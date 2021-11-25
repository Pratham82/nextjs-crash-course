import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../../../styles/Home.module.css'

// Catch all routes
/*
[...name] (All the routes without the based route) for eg. 
Eg. fruit/apple/144g/30cal 
caught query: ['apple', '144g', '30cal']



[[...name]] (All the routes with base route)
this will even handle the base route i.e 'fruit' but the query.name is not present on base URL
*/
export default function Fruit() {
  let queries: string[]
  const router = useRouter()
  console.log(router.query.name)
  queries = router.query.name

  return (
    <div className={styles.centeredText}>
      <h1>Fruit Component</h1>
      <p>
        Query values: {queries && queries.map((q, i) => <b key={i}>{q}/</b>)}
      </p>
    </div>
  )
}
