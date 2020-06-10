<template>

    <transition name="top-dialog-fade">
        <div class="normal-dialog-background"
             :class="[{'dialog-mask-background':hasMaskColor},{'auto-hide-class':autoHiden}]"
             v-show="isShow"
             v-on:click.self="onMaskClick">
            <transition name="top-slide-fade">
                <div class="bottom-content" v-show="menuIsShow" v-on:click.stop="onContentClick">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script lang="ts" src="./top-dialog.ts">
</script>

<style scoped>
    /*通用模式窗口*/
    .normal-dialog-background {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1000;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        outline: 0;
        pointer-events: none
    }

    .auto-hide-class {
        pointer-events: auto;
    }


    .dialog-mask-background {
        background: rgba(51, 51, 51, .7);
    }

    .bottom-content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        pointer-events: auto;
    }

    .top-slide-fade-enter-active, .top-slide-fade-leave-active {
        transition: all .3s
    }

    .top-slide-fade-enter, .top-slide-fade-leave-to {
        transform: translateY(-100%);
    }



    .top-dialog-fade-enter, .top-dialog-fade-leave-active {
        opacity: 0;
    }


    .top-dialog-fade-enter-active, .top-dialog-fade-leave-active {
        transition: all .3s ease-in-out;
    }
</style>