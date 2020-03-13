<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    text-align: center;
    font-size: 12px;
    padding: 10px 0;
    border-bottom: 10px solid #eee;
  }
  .recommend-item img {
    width: 20vw;
    margin-bottom: 10px;
  }
</style>