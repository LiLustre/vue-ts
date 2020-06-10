<template>
    <div class="carid-input-root">
        <input :class="[index === 7?'carid-input-last':'carid-input',{'carid-input-seleted':curPos==index}]"
               type="text" v-on:click="onInputClick(index)" readOnly='readOnly' :value="item"
               v-for="(item,index) in carIDArray" :placeholder="index === 7?'新':''">
    </div>
</template>

<script lang="ts" src="./carid-input.ts">
</script>

<style lang="less" scoped src="./CarIDInput.less">

</style>