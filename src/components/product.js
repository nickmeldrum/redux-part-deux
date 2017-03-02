import React from 'react'

const Product = ({product}) => {
  return <ul>
    <li>{product.title}</li>
    <li>{product.price}</li>
  </ul>
}

export default Product
