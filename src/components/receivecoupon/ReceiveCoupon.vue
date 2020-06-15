<template>
    <div class="receive-coupon-dialog-background" v-if="isShow">
        <div class="coupon-window">
            <div class="close-div">
                <span class="close-span" v-on:click="onCloseClick"></span>
            </div>
            <div class="receive-coupon-top"></div>
            <div class="receive-coupon-bottom">
                <div class="coupon-list">
                    <div class="coupon-root">
                        <div class="coupon">
                            <div class="coupon-right">
                                <div class="coupon-info">
                                    <div class="coupon-name">检车首单优惠券检车首单优惠券检车首单优惠券</div>
                                    <div class="coupon-date">2018.11.19-2018.11.26</div>
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="coupon-left">
                                <div class="coupon-amount-root">
                                    <div class="coupon-amount">
                                        <span class="coupon-amount-sym">￥</span>
                                        <span>694815</span></div>
                                    <div class="coupon-amount-rule">满￥10可用</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="receive-coupon-i-know" v-on:click="onCloseClick">我知道了</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./receive-coupon.ts">
</script>

<style lang="less" src="./ReceiveCoupon.less">

</style>