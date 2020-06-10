<template>
    <div class="page">
        <div class="title-top" v-on:click="onTitleClick">title</div>
        <div class="title-top" v-on:click="onChoosCarClick">车牌选择</div>
        <div class="content">
            <top-dailog ref="topDialog">
                <div class="title">111</div>
                <div class="title">222</div>
                <div class="title">333</div>
            </top-dailog>
        </div>
        <cars-picker style="z-index: 10002" ref="carsPicker"></cars-picker>
        <!--<carid-input ref="caridInput" @onCarIdItemSelected="onCarIDSelected"></carid-input>
        <carid-keyboard ref="caridKeyBoard" @onKeyClickEvent="onKeyClickEvent" @onDelClickEvent="onDelClickEvent">
        </carid-keyboard>-->
    </div>
</template>

<script lang="ts" src="./demo.ts">
</script>

<style lang="less" src="./demo.less">

</style>