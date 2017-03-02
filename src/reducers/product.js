import { PRODUCTS_FETCHING, PRODUCTS_FETCHED } from '../actions/products.js'

const initialState = {
  fetching: false,
  products: []
}

export default function product(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_FETCHING:
      return Object.assign({}, state, {fetching: true})
    case PRODUCTS_FETCHED :
      return Object.assign({}, state, {products: action.products, fetching: false})
    default :
      return state
  }
}
