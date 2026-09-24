'use client'

import { use } from 'react';
import { useApp } from '@/components/components'

export default function Product({ params }) {
  const { productName } = use(params)
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
            <p>${product.price}</p>
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