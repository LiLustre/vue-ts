<template>
    <div class="page">
        <div class="title-top" v-on:click="onTitleClick">title</div>
        <div class="title-top" style="background-color: #10aeff" v-on:click="onChoosCarClick">车牌选择</div>
        <div class="title-top" style="background-color: #10aeff" v-on:click="onSinglePickerClick">单列picker</div>
        <carid-input ref="caridInput" @onCarIdItemSelected="onCarIDSelected"></carid-input>
        <tab></tab>
        <div class="content">
            <top-dailog ref="topDialog">
                <div class="title">111</div>
                <div class="title">222</div>
                <div class="title">333</div>
            </top-dailog>
        </div>

        <cars-picker style="z-index: 10002" ref="carsPicker" :carGroup="carGroup" @select="onCarSelected"></cars-picker>
        <single-picker style="z-index: 10002" ref="singlePicker" :pickerData="singPickerData" @select="onSingleSelected"></single-picker>
        <carid-keyboard ref="caridKeyBoard" @onKeyClickEvent="onKeyClickEvent" @onDelClickEvent="onDelClickEvent">
        </carid-keyboard>
    </div>
</template>

<script lang="ts" src="./demo.ts">
</script>

<style lang="less" src="./demo.less">

</style>