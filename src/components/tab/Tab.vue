<template>

    <div class="tab-component">

        <div class="tab-scroll-content" ref="tabContent">
            <ul class="tab-list" ref="tabRow">
                <li class="tab-item" v-for="(item,index) in tabArray" v-on:click="onTabItemClick(index,$event)">
                    <span class="tab-name" :class="{'tab-name-selected':index===selectTabPos}">{{item}}</span>
                    <div class="activit-line" v-show="index===selectTabPos"></div>
                </li>
            </ul>
        </div>
        <div class="tab-mask-bg">
            <div class="left_mask"></div>
            <div class="right_mask"></div>
        </div>
    </div>
</template>
<script lang="ts" src="./tab.ts">
</script>

<style lang="less" scoped src="./Tab.less">

</style>