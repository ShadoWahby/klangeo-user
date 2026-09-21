'use client'

import { useApp } from '@/components/components'

const Home = () => {
  const { user } = useApp()

  return (
    <>
      <header>
        <h1>{user ? `Welcome, ${user.name}` : 'Home'}</h1>
      </header>
      <main>
        <section>
          <img src="/products/modmix-pro.png" alt="ModMix Pro" />
          <div>
            <h2>ModMix Pro</h2>
            <p>The new generation of mixing machines</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home