<template>
    <bottom-dialog ref="bottomDialog" @onBottomDialogHiden="onBottomDialogHiden">
        <div class="picker-panel">
            <div class="picker-choose">
                <span class="cancel" @click="onCancelClick">取消</span>
                <h1 class="picker-title">{{dialogTitle}}</h1>
                <span class="confirm" @click="onConfirmClick">确定</span>
            </div>
            <div class="title-line"></div>
            <div class="picker-title-root" v-if="pickerTitle&&pickerTitle.length>0">
                <div class="picker-title">{{pickerTitle}}</div>
            </div>
            <div class="picker-content">
                <div class="mask mask-top "></div>
                <div class="mask mask-bottom"></div>
                <div class="left-bg">
                    <div class="select-bg"></div>
                </div>
                <div class="wheel-wrapper" ref="wheelWrapper">
                    <div class="wheel">
                        <ul class="wheel-scroll" v-if="pickerData">
                            <li v-for="(data,index) in pickerData" :key="'data_'+index"
                                class="wheel-item">{{data}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </bottom-dialog>
</template>

<script lang="ts" src="./single-picker.ts">
</script>

<style  lang="less" src="./SinglePicker.less">

</style>