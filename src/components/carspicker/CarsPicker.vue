<template>
    <bottom-dialog ref="bottomDialog" @onBottomDialogHiden="onBottomDialogHiden">
        <div class="picker-panel">
            <div class="picker-choose">
                <span class="cancel" @click="onCancelClick">取消</span>
                <!--<h1 class="picker-title">确定</h1>-->
                <span class="confirm" @click="onConfirmClick">确定</span>
            </div>
            <div class="title-line"></div>
            <div class="picker-title-root">
                <div class="picker-title">分组</div>
                <div class="picker-title">车牌</div>
            </div>
            <div class="picker-content">
                <div class="mask mask-top "></div>
                <div class="mask mask-bottom"></div>
                <div class="carpicker-left-bg">
                    <div class="select-bg"></div>
                </div>
                <div class="carpicker-right-bg">
                    <div class="select-bg"></div>
                </div>
                <div class="wheel-wrapper" ref="wheelWrapper">
                    <div class="wheel">
                        <ul class="wheel-scroll" v-if="carGroup">
                            <li v-for="(group,index) in carGroup" :key="'group_'+index"
                                class="wheel-item">{{group.carGroupName}}
                            </li>
                        </ul>
                    </div>
                    <div class="wheel">
                        <ul class="wheel-scroll" v-if="curCarGroup">
                            <li v-for="(car,index) in curCarGroup.carInfos" :key="'car_'+index"
                                class="wheel-item">{{car.carID}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </bottom-dialog>
</template>

<script lang="ts" src="./cars-picker.ts">
</script>
<style lang="less" src="./CarsPicker.less">

</style>