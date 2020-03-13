<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #tab-bar {
    display: flex;
    justify-content: space-around;
    height: 49px;
    align-items: center;
    background: #F6F6F6;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  }
</style>