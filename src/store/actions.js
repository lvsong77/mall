import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payload) {
    // payload为新添加的商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      payload.checked = true
      context.commit(ADD_TO_CART, payload)
    }
  }
}