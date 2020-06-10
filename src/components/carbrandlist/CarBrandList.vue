<template>
    <div class="wrapper" ref="wraper">
        <section >
            <div ref="hotCarBrand" v-if="hotCarBrands&&hotCarBrands.length>0" class="hot-car-root">
                <h1 class="hot-car-lable">热门车型选择</h1>
                <ul class="hot-car-ul">
                    <li class="hot-car-li" v-for="(item,index) in hotCarBrands" v-on:click.stop="onCarBrandClick(item)">
                        <img class="hot-car-image" :src="item.car_brand_image">
                        <span class="hot-car-span">{{item.car_brand_name}}</span>
                    </li>
                </ul>
            </div>
            <ul>
                <li v-for="(group,index) in carBrandGroups" :key="index" class="list-group" ref="listGroup">
                    <h2 ref="groupTitle" class="list-group-title">{{group.title}}</h2>
                    <ul>
                        <li v-for="(item,index) in group.items" :key="index" v-on:click.stop="onCarBrandClick(item)"
                            class="list-group-item">
                            <div class="img-div"><img class="avatar" :src="item.car_brand_image"></div>
                            <span class="name">{{item.car_brand_name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <div class="list-shortcut" v-on:touchstart.stop.prevent="onShortcutTouchStart"
             v-on: @touchmove.stop.prevent="onShortcutTouchMove"
             v-on: @touchend.stop.prevent="onShortcutTouchEnd">
            <ul>
                <li v-for="(item, index) in carBrandGroups" :data-index="index" class="list-shortcut-item" :key="index"
                    ref="shortcutItem"
                    :class="{'current':currentIndex===index}">{{item.title}}
                </li>
            </ul>
        </div>
        <div class="list-fixed" ref="fixed" v-show="getFixedTitle()">
            <div class="fixed-title" ref="fixedTitle">{{getFixedTitle()}}</div>
        </div>
        <div class="shortcut-title" v-if="isShowCenterTitle">
            {{getCenterTitle()}}
        </div>
    </div>
</template>
<script lang="ts" src="./car-brand-list.ts">
</script>
<style lang="less" scoped src="./car-brand-list.less">
</style>