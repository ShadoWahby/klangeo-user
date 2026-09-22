'use client'

import * as React from 'react'
import { useApp } from '@/components/components'

const Product = ({ params }) => {
  const { productName } = React.use(params)
  const spaceSeperatedName = productName.replace(/-/g, ' ')
  const { products, specs } = useApp()
  const product = products.find((p) => p.name.toLowerCase() === spaceSeperatedName.toLowerCase())
  const productSpecs = specs.filter((spec) => spec.productId === product.id)

  if (!product) {
    return (
      <main>
        <p>Product not found</p>
      </main>
    )
  }

  return (
    <>
      <header>
        <h1>{product.name}</h1>
      </header>
      <main>
        <card>
          <img src={`/products/${product.category}/${product.imageUrl}`} alt={product.name} />
          <div>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </card>
        <card>
          <h3>Technical Specifications</h3>
          {productSpecs.map((spec) => (
            <div key={spec.id}>
              <h4>{spec.name}</h4>
              <p>{spec.value}</p>
            </div>
          ))}
        </card>
      </main>
    </>
  )
}

export default Product
export const dynamic = 'force-dynamic'