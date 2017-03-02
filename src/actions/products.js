import { get } from '../api/products.js'

export const PRODUCTS_FETCHING = '/groceries-online/products/fetching'
export const PRODUCTS_FETCHED = '/groceries-online/products/fetched'

function fetching() {
  return { type: PRODUCTS_FETCHING }
}

function fetched(products) {
  return { type: PRODUCTS_FETCHED, products }
}

export function getProducts(query) {
  return dispatch => {
    dispatch(fetching())
    get(query).then(results => {
      dispatch(fetched(results))
    })
  }
}
