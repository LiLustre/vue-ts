<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /*去掉点击链接和文本框对象时默认的灰色半透明覆盖层(iOS)或者虚框(Android)*/
  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html, body {
    background: transparent;
    color: #333;
    width: 100%;
    height: 100%;
    -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust: none; /* prevent webkit from resizing text to fit */
    -webkit-user-select: none; /* prevent copy paste, to allow, change 'none' to 'text' */
  }

  #app {
    width: 100%;
    height: 100%;
  }


  ul {
    list-style-type: none;
  }

  /*主题按钮*/
  .primary-btn {
    background: #FE894F;
  }

  .primary-btn:hover, .primary-btn:active {
    background: #ca4e28;
  }

  /*动画*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    opacity: 0
  }

  /*画页切换动画*/
  .child-view {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .8s;
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 100;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }

  .slide-left-leave-active, .slide-right-enter {
    opacity: 100;
    -webkit-transform: translate(100%, 0);
    transform: translate(-100%, 0);
  }

</style>
