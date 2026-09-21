'use client'

import { useApp } from '@/components/components'

const Account = () => {
  const { user, logout, deleteUser } = useApp()

  if (!user) {
    return (
      <>
        <header>
          <h1>Account Details</h1>
        </header>
        <main>
          <h2>Sign in first to view your account.</h2>
        </main>
      </>
    )
  }

  return (
    <>
      <header>
        <h1>Account Details</h1>
      </header>
      <main>
        <article>
          <span>
            <img src={user.picture} alt="Google_Account_Profile" />
            <article>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
            </article>
          </span>
          <p>{user.id}</p>
          <span>
            <button onClick={logout}>Logout</button>
            <button onClick={deleteUser}>Delete Account</button>
          </span>
        </article>
      </main>
    </>
  )
}

export default Account