'use client'

import styles from './loading.module.css'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <span className={styles.loader}>
        <h3>E</h3>
        <h3>R</h3>
        <h3>R</h3>
        <h3>O</h3>
        <h3>R</h3>

        <span className={styles.spinner} />
      </span>
      <h2>{"Something went wrong :("}</h2>
      <p>{error.message}</p>
      <ul>
        <li>Check your internet connection</li>
        <li>Refresh the page</li>
        <li>Clear the site cache</li>
        <li>
          If the problem persists, contact us at
          <a href="mailto:support@klangeo.com" className="hyperlink"> support@klangeo.com</a>
        </li>
      </ul>
      <button onClick={reset}>Try Again</button>
    </main>
  )
}