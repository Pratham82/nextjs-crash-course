import Navbar from '../components/navbar'
import capitalize from '../helpers/capitalize'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>HomePage</h1>
      {['/home', '/hello_world', '/styling', '/fileStructure', '/login'].map(
        (page, i) => (
          <h3 className={styles.centeredText} key={page}>
            <a href={page}>
              {' '}
              {`${i + 1}. ${capitalize(page.replace('/', ''))}`}
            </a>
          </h3>
        )
      )}
    </>
  )
}
