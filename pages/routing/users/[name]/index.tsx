import * as React from 'react'
import Navbar from '../../../../components/navbar'
import styles from '../../../../styles/Home.module.css'
import Link from 'next/link'

export default function () {
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Name</h1>
      <h2 className={styles.centeredText}>
        <Link href="name/subname">
          <a>Subname ↗️</a>
        </Link>
      </h2>
    </>
  )
}
