import React from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
export default function Styles() {
  const typesOfStyling = [
    'styledJSX',
    'Global Styles',
    'CSS Modules',
    'SASS Modules',
  ]
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Styling</h1>
      {typesOfStyling.map((style, i) => (
        <h3 key={i} className={styles.centeredText}>{`${i + 1}. ${style}`}</h3>
      ))}
    </>
  )
}
