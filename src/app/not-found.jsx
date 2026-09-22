'use client'

import styles from './loading.module.css'

export default function NotFound() {
  return (
    <main>
      <span className={styles.loader}>
        <h3>4</h3>
        <h3>0</h3>
        <h3>4</h3>

        <span className={styles.spinner} />
      </span>
      <h2>{"The page you're looking for was not found :("}</h2>
    </main>
  )
}