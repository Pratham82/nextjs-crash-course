import * as React from 'react'
import Navbar from '../../../components/navbar'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function () {
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Nested Route</h1>
      <Link href="/routing/nested_route/deeply_nested">
        <a href="">
          <h2 className={styles.centeredText}>Deeply nested Route 🔗</h2>
        </a>
      </Link>
    </>
  )
}
