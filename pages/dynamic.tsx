import { GetServerSideProps, GetStaticProps } from 'next'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

// Execution on server
// revalidate: this field will refetch the data from server in provided seconds
export const getStaticProps: GetStaticProps = async context => {
  return {
    revalidate: 10,
    props: {
      myName: 'Prathamesh',
    },
  }
}

// It will run always on every page request, even in prod
export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      serverName: 'blade90',
    },
  }
}

export default function Dynamic(props) {
  return (
    <div className={styles.centeredText}>
      <Navbar />
      <h1>Dynamic (static props)</h1>
      <h2>
        Data from props: <br /> my name: {props.myName}
      </h2>
    </div>
  )
}
