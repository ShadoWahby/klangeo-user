'use client'

import styles from './loading.module.css'

export default function Loading() {
  return (
    <span className={styles.loader}>
      <h3>L</h3>
      <h3>o</h3>
      <h3>a</h3>
      <h3>d</h3>
      <h3>i</h3>
      <h3>n</h3>
      <h3>g</h3>

      <span className={styles.spinner} />
    </span>
  )
}