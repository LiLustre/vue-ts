<template>
    <div class="root" v-on:click="onRootClick">
        <car-brand-list ref="carBrandList" :carBrandGroups="carBrandGroupArr"
                        :hotCarBrands="hotCarBrand" @onCarBrandClick="onCarBrandClickHandler"></car-brand-list>
        <side-menu ref="menu">
            <div class="container">
                <div class="fix-top" v-if="curCarBrand">
                    <div class="brand-logo-parent">
                        <img class="brand-logo" :src="curCarBrand.car_brand_image">
                    </div>
                    <span class="brand-name">{{curCarBrand.car_brand_name}}</span>
                </div>
                <div class="fix-content">
                </div>
            </div>
        </side-menu>
    </div>
</template>
<script lang="ts" src="./index-list.ts">
</script>
<style lang="less" src="./indexlist.less"></style>
