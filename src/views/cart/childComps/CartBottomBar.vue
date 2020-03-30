<template>
  <div class="bottom-bar">
    <check-button/>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: red;
    position: relative;
  }
</style>