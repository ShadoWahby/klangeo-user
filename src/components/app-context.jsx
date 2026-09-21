'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import Loading from '@/app/loading'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [specs, setSpecs] = useState([])
  const [user, setUser] = useState(null)
  const API_URL = 'https://klangeo-backend.vercel.app/api'

  useEffect(() => {
    fetch(`${API_URL}/products`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.error)
        return res.json()
      })
      .then((data) => setProducts(data.products))
      .catch((err) => alert(err))

    fetch(`${API_URL}/specs`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.error)
        return res.json()
      })
      .then((data) => setSpecs(data.specs))
      .catch((err) => alert(err))

    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }

    fetch(`${API_URL}/auth/token`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.error)
        return res.json()
      })
      .then((data) => {
        setUser(data.user)
        localStorage.setItem('token', data.token)
      })
      .catch(() => logout())
      .finally(() => setLoading(false))
  }, [])

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true)
      await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: tokenResponse.access_token }),
      })
        .then((res) => {
          if (!res.ok) throw new Error(res.error)
          return res.json()
        })
        .then((data) => {
          setUser(data.user)
          localStorage.setItem('token', data.token)
          alert(`Account ${data.user.name} logged in successfully.`)
        })
        .catch((err) => alert(err))
        .finally(() => setLoading(false))
    },
    onError: () => alert('Login failed, please try again later.'),
  })

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  const deleteUser = () => {
    setLoading(true)
    const token = localStorage.getItem('token')

    fetch(`${API_URL}/auth/token`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.error)
        return res.json()
      })
      .then(() => logout())
      .catch((err) => alert(err))
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <main><Loading /></main>
  }

  return (
    <AppContext.Provider value={{ products, specs, user, login, logout, deleteUser, setLoading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)