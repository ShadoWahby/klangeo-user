'use client'

import { use } from 'react';
import { useApp } from '@/components/components'

export default function Category({ params }) {
  const { category } = use(params)
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
            <Link href={`/products/${product.category}/${product.name.toLowerCase().replace(/\s/g, '-')}`}>
              <card key={product.id}>
                <img src={`/products/${product.category}/${product.imageUrl}`} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>${product.price}</p>
                  <p>{product.description}</p>
                </div>
              </card>
            </Link>
          ))
        }
      </main>
    </>
  )
}