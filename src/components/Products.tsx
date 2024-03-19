import React from 'react'

type Tproducts = {
  name: string
  price: number
}

const Products = (props: { products: Tproducts }) => {
  return (
    <>
      <h2>{props.products.name}</h2>
      <p>{props.products.price}</p>
    </>
  )
}

export default Products
