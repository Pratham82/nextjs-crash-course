import React from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
export default function My404Page() {
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Custom 404 page</h1>
    </>
  )
}
