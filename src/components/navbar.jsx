'use client'

import { useState } from 'react'
import { useApp } from './components'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const { isMobile, user, login } = useApp()
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)

  const links = [
    { name: 'Products', path: '/products' },
    { name: 'Live Sound', path: '/products/LIVE' },
    { name: 'Production', path: '/products/PRODUCTION' },
    { name: 'Studio', path: '/products/STUDIO' },
    { name: 'Recording', path: '/products/RECORDING' },
  ]

  const google = (
    <li className="Account" onClick={login}>
      <svg width="32" height="32" viewBox="0 0 18 18">
        <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
        <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
        <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
      </svg>
      Sign in with Google
    </li>
  )

  const account = (
    <Link href="/account">
      <li className="Account">
        <img src={user?.picture} alt="User" />
        {user?.name}
      </li>
    </Link>
  )

  return (
    <nav>
      {user ? account : google}
      {isMobile ? (
        <>
          <ul>
            {pathname === '/' ? (<></>) : (
              <Link href="/">
                <li className="Home">
                  <span className="material-symbols-rounded">Home</span>
                </li>
              </Link>
            )}
            <li onClick={() => setMenu(!menu)}>
              <span className="material-symbols-rounded">{menu ? 'Close' : 'Menu'}</span>
            </li>
          </ul>
          <menu className={menu ? 'open' : ''}>
            {links.map((link) => (
              <Link href={link.path} key={link.name}>
                <li>
                  {link.name}
                </li>
              </Link>
            ))}
          </menu>
        </>
      ) : (
        <ul>
          {pathname === '/' ? (<></>) : (
            <Link href="/">
              <li className="Home">
                <span className="material-symbols-rounded">Home</span>
              </li>
            </Link>
          )}
          {links.map((link) => (
            <Link href={link.path} key={link.name}>
              <li>
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  )
}