<template>
    <bottom-dialog ref="bottomDialog" :hasMaskColor="false" :autoHiden="false">
        <div class="keyboard-root">
            <div class="top-hiden-parent" v-on:click="onHidenClick">
                <div class="hiden-icon"></div>
            </div>
            <div class="line-div"></div>
            <div class="province-keyboard-parent" v-if="curentKeyboard ==0">
                <div class="province-keyboard-key-parent" v-for="(column,index) in provincesRow"
                     :class="{'province-keyboard-key-del-parent':!column.keyValue}">
                    <div class="press-tip" v-if="column.tipShowing&&column.canShowTip">{{column.keyValue}}</div>
                    <button class="province-keyboard-key"
                            :class="{'province-keyboard-del-key':!column.keyValue,'province-keyboard-key-press':column.tipShowing&&column.canShowTip}"
                            @touchstart.stop.prevent="onProvincesKeyTouchStart(column)"
                             @touchmove.stop.prevent="onProvincesKeyTouchMove(column)"
                             @touchend.stop.prevent="onProvincesKeyTouchEnd(column)"
                    >{{column.keyValue}}
                    </button>
                    <span v-if="!column.keyValue" class="del-key-icon"
                          @touchstart.stop.prevent="onProvincesKeyTouchStart(column)"
                          @touchmove.stop.prevent="onProvincesKeyTouchMove(column)"
                          @touchend.stop.prevent="onProvincesKeyTouchEnd(column)"></span>
                </div>
            </div>
            <div class="carid-keyboard-parent" v-else>
                <div class="suffix-key-row">
                    <div class="suffix-key-parent" v-for="(column,index) in suffixRow">
                        <button class="suffix-keyboard-key" :class="{'suffix-keyboard-key-press':column.tipShowing}"
                              @touchstart.stop.prevent="onCarIDTouchStart(column)"
                                @touchmove.stop.prevent="onCarIDKeyTouchMove(column)"
                                 @touchend.stop.prevent="onCarIDKeyTouchEnd(column)"
                        >{{column.keyValue}}
                        </button>
                    </div>
                </div>
                <div class="charnum-keyboard-parent">
                    <div class="charnum-key-parent" v-for="(column,index) in charNumberRow"
                         :class="{'charnum-key-del-parent':!column.keyValue&&!column.placeholder}">
                        <div class="charnum-press-tip" v-if="column.tipShowing&&column.canShowTip">{{column.keyValue}}
                        </div>
                        <button v-if="!column.placeholder"
                                type="button"
                                :class="[isNumKey(column.keyValue)?'num-key': column.keyValue==='I' || column.keyValue === 'O'?'char-key-disable':'char-key',
                                {'charnum-key-press':column.tipShowing&&column.canShowTip}]"
                                @touchstart.stop.prevent="onCarIDTouchStart(column)"
                                 @touchmove.stop.prevent="onCarIDKeyTouchMove(column)"
                               @touchend.stop.prevent="onCarIDKeyTouchEnd(column)">
                            {{column.keyValue}}
                        </button>
                        <span v-if="!column.placeholder&&!column.keyValue" class="del-key-icon"
                              @touchstart.stop.prevent="onCarIDTouchStart(column)"
                              @touchmove.stop.prevent="onCarIDKeyTouchMove(column)"
                             @touchend.stop.prevent="onCarIDKeyTouchEnd(column)"></span>
                    </div>
                </div>
            </div>
        </div>
    </bottom-dialog>
</template>

<script lang="ts" src="./carid-keyboard.ts">
</script>

<style lang="less" src="./CarIdKeyboard.less">
</style>