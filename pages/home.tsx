import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
Navbar
export default function HomePage() {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>HomePage</h1>
    </>
  )
}
