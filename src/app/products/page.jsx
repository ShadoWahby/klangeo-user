'use client'

import { useApp } from '@/components/components'
import Link from 'next/link'

const Products = () => {
  const { products } = useApp()
  const categories = [...new Set(products.map(p => p.category))]

  return (
    <>
      <header>
        <h1>Full Product Catalog</h1>
      </header>
      <main>
        {categories.map(category => (
          <div key={category}>
            <Link href={`/products/${category}`}>
              <h2>{category}</h2>
            </Link>
            <section>
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
            </section>
          </div>
        ))}
      </main>
    </>
  )
}

export default Products