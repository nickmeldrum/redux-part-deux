import React from 'react'

const ProductSearch = ({getProducts}) => {
  function textChanged(e) {
    getProducts(e.target.value)
  }

  return <input type="text" onChange={textChanged} />
}

export default ProductSearch
