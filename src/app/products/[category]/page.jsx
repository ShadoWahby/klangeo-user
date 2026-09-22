'use client'

import { useApp } from '@/components/components'

export default async function Category({ params }) {
  const { category } = await params
  const { products } = useApp()

  if (category !== 'LIVE' && category !== 'PRODUCTION' && category !== 'STUDIO' && category !== 'RECORDING') {
    return (
      <>
        <header>
          <h1>{category}</h1>
        </header>
        <main>
          <p>Category does't exist</p>
        </main>
      </>
    )
  }

  return (
    <>
      <header>
        <img src={`/category/${category}.png`} alt={category} />
        <h1>{category}</h1>
      </header>
      <main>
        {products
          .filter(product => product.category === category)
          .map(product => (
            <card key={product.id}>
              <img src={`/products/${product.category}/${product.imageUrl}`} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </div>
            </card>
          ))
        }
      </main>
    </>
  )
}