<template>
    <div class="modal-dialog-background" v-show="isShow" v-on:click.stop="onBackGroudClick">
        <transition name="slide-fade">
            <div class="content" v-show="menuIsShow">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script  lang="ts" src="./right-side-menu.ts">
</script>

<style scoped>
    /*通用模式窗口*/
    .modal-dialog-background {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(51, 51, 51, .7);
        z-index: 999;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        outline: 0;
    }

    .content {
        width: 70%;
        height: 100%;
        position: absolute;
        right: 0;
        background: #ffffff;
    }

    .slide-fade-enter-active {
        transition: all .3s
    }

    .slide-fade-leave-active {
        transition: all .3s
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(100%);
        opacity: 0;
    }
</style>