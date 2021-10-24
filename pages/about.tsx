import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>About</h1>
    </>
  )
}
