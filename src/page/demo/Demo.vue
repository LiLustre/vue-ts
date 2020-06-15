<template>
    <div class="page">
        <div class="title-top" v-on:click="onTitleClick">title</div>
        <div class="title-top" style="background-color: #10aeff" v-on:click="onChoosCarClick">车牌选择</div>
        <div class="title-top" style="background-color: #10aeff" v-on:click="onSinglePickerClick">单列picker</div>
        <carid-input ref="caridInput" @onCarIdItemSelected="onCarIDSelected"></carid-input>
        <tab ref="tab" :tabArray="tabArray" @tabSelected="onTabSelected"></tab>
        <div class="content">

            <button class="button"  v-on:click="onBtnClick" > </button>
            <div class="service_root">

                <div class="service_root1">
                    <div class="service-item"></div>
                    <div class="service-item"></div>
                    <!--<div class="service-item"></div>
                    <div class="service-item"></div>
                    <div class="service-item"></div>
                    <div class="service-item"></div>
                    <div class="service-item"></div>
                    <div class="service-item"></div>
                    <div class="service-item"></div>-->
                  <!--  <div class="service-item"></div>-->
                </div>
                <div class="detail"></div>
            </div>
            <top-dailog ref="topDialog">
                <div class="title">111</div>
                <div class="title">222</div>
                <div class="title">333</div>
            </top-dailog>
        </div>
        <div>

        </div>
        <cars-picker style="z-index: 10002" ref="carsPicker" :carGroup="carGroup" @select="onCarSelected"></cars-picker>
        <single-picker style="z-index: 10002" ref="singlePicker" :pickerData="singPickerData" @select="onSingleSelected"></single-picker>
        <carid-keyboard ref="caridKeyBoard" @onKeyClickEvent="onKeyClickEvent" @onDelClickEvent="onDelClickEvent">
        </carid-keyboard>
        <receive-coupon ref="receiveCoupon"></receive-coupon>
    </div>
</template>

<script lang="ts" src="./demo.ts">
</script>

<style lang="less" src="./demo.less">

</style>