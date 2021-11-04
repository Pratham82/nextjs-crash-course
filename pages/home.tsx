import Navbar from '../components/navbar'
import capitalize from '../helpers/capitalize'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import pages from '../data/pages'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>HomePage</h1>
      {pages.map((page, i) => (
        <h3 className={styles.centeredText} key={page}>
          <Link href={page}>
            <a> {`${i + 1}. ${capitalize(page.replace('/', ''))}`}</a>
          </Link>
        </h3>
      ))}
    </>
  )
}
