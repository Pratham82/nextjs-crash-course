import React from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
export default function HelloWorld() {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Hello World</h1>
    </>
  )
}
