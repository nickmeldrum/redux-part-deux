import React from 'react'
import Product from './product'
import Fetching from './fetching'

const ProductList = ({fetching, products}) => {
  return (fetching)
    ? <Fetching />
    : <ol>
      { products.map(product => <Product key={product.id} product={product} />) }
    </ol>
}

export default ProductList
