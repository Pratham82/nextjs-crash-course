import * as React from 'react'
import Navbar from '../../../components/navbar'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function () {
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Dynamic Routing</h1>
      <h2 className={styles.centeredText}>Users</h2>
      <h2 className={styles.centeredText}>
        <Link href="users/name">
          <a>Name ↗️</a>
        </Link>
      </h2>
    </>
  )
}
