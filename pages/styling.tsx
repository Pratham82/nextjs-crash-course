import React from 'react'
import Navbar from '../components/navbar'
// 3. CSS modules
import styles from '../styles/Home.module.css'
import otherStyles from '../styles/styling.module.scss'

// These styles are component level styles
// To apply these styles globally, add global after jsx in style tag
const StyledJSX = () => (
  <div>
    <h2 className="title">Styles JSX</h2>
    <style jsx>{`
      .title {
        color: red;
        text-align: center;
      }
    `}</style>
  </div>
)

// 2. For adding styles to all components, import a css file in the _app.tsx
// 4. For adding sass in the app, install sass. And change the extension of css module to scss 

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
      <StyledJSX />
      <h2 className={otherStyles.title}>Test</h2>
    </>
  )
}
