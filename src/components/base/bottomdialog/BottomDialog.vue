<template>
    <transition name="bottom-dialog-fade">
        <div class="normal-dialog-background"
             :class="[{'dialog-mask-background':hasMaskColor},{'auto-hide-class':autoHiden}]"
             v-show="isShow"
             v-on:click.self="onMaskClick">
            <transition name="bottom-slide-fade">
                <div class="bottom-content" v-show="isShow" v-on:click.stop="onContentClick">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>

</template>
<script lang="ts" src="./bottom-dialog.ts">
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
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        pointer-events: auto;
    }

    .bottom-slide-fade-enter-active {
        transition: all .3s ease-in-out
    }

    .bottom-slide-fade-leave-active {
        transition: all .3s ease-in-out
    }

    .bottom-slide-fade-enter, .bottom-slide-fade-leave-to {
        transform: translate3d(0, 100%, 0);
        opacity: 0;
    }


    .bottom-dialog-fade-enter, .bottom-dialog-fade-leave-active {
        opacity: 0;
    }


    .bottom-dialog-fade-enter-active, .bottom-dialog-fade-leave-active {
        transition: all .3s ease-in-out;
    }


</style>