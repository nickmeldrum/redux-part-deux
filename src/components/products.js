import React from 'react'
import ProductSearch from './product-search'
import ProductList from './product-list'

const Products = ({fetching, products, getProducts}) => {
  return (
    <div>
      <ProductSearch getProducts={getProducts} />
      <ProductList fetching={fetching} products={products} />
    </div>
  )
}

export default Products
