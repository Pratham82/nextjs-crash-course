import { useRouter } from 'next/router'
import * as React from 'react'
import Navbar from '../../../../components/navbar'
import styles from '../../../../styles/Home.module.css'
import userStyles from '../../users/Users.module.scss'

export default function () {
  const router = useRouter()
  console.log(router)
  const {
    query: { name, subname },
    asPath,
  } = router
  return (
    <>
      <Navbar />
      <h1 className={styles.centeredText}>Subname</h1>
      <p className={styles.centeredText} style={{ fontSize: '20px' }}>
        Entered Query: <br /> <br />
        name: <b>{name}</b> , subName : <b>{subname}</b>
        <br />
        <br />
        Current route: {asPath}
        <br />
        <button
          className={userStyles.routeBtn}
          onClick={() => router.push('/home')}
        >
          Go to Home
        </button>
      </p>
    </>
  )
}
