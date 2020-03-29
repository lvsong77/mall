import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload为新添加的商品
      // let oldProduct = null
      // for (const item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldProduct
      if (oldProduct) {
        oldProduct.count++
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

// 3.挂载到Vue实例上
export default store