import capitalize from '../helpers/capitalize'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import pages from '../data/pages'

export default function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-evenly',
        boxShadow: ' 0px 3px 9px -4px rgba(0,0,0,0.75)',
      }}
    >
      <h4 className={styles.title}>
        <Link href="/home">
          <a> Next.js Demo </a>
        </Link>
      </h4>
      <ul>
        {pages.map(link => (
          <li
            style={{
              display: 'inline-block',
              listStyle: 'none',
              padding: '10px',
              fontSize: '25px',
              fontWeight: 'bold',
            }}
            key={link}
          >
            {' '}
            <Link href={link}>
              <a>{capitalize(link.replace('/', ''))}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
