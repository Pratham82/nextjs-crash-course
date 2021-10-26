import capitalize from '../helpers/capitalize'
import styles from '../styles/Home.module.css'

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
        <a href="/"> Next.js Demo </a>
      </h4>
      <ul>
        {['/home', '/hello_world', '/about', '/contact'].map(link => (
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
            <a href={link}> {capitalize(link.replace('/', ''))} </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
