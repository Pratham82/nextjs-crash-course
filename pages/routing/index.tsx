import * as React from 'react'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function () {
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Routing</h1>
      <h2 className={styles.centeredText}>Route 1</h2>
      <h2 className={styles.centeredText}>Route 2</h2>
      <Link href="/routing/nested_route">
        <a href="">
          <h2 className={styles.centeredText}>Nested Route 🔗</h2>
        </a>
      </Link>
      <Link href="/routing/users">
        <a href="">
          <h2 className={styles.centeredText}>Dynamic Routing/ Users page</h2>
        </a>
      </Link>
      <Link href="/routing/fruit">
        <a href="">
          <h2 className={styles.centeredText}>Fruits page(CatchAll route)</h2>
        </a>
      </Link>
    </>
  )
}
