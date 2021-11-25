import { GetStaticPaths, GetStaticProps } from 'next'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'

// Execution on server
// revalidate: this field will refetch the data from server in provided seconds
export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      myName: 'Prathamesh',
    },
  }
}

/*
getStaticProps: runs on BUILD time. It does not run at runtime
It will render all the data from html,css and json and store it before going to the live page

wwe can specify next.js to choose which files to run the static props

when we specified the paths in the array, only those page will be permissible/ available on the current dynamic page i.e user


Flow:
START
localhost:3000/user/hello --> take the output --> store it on the disk
localhost:3000/user/world --> take the output --> store it on the disk
COMPLETED
*/

export const getStaticPaths: GetStaticPaths = async () => {
  // Access nodejs part
  // handle db, fs
  return {
    paths: [{ params: { name: 'hello' } }, { params: { name: 'world' } }],

    // If the fallback is false only urls in path array are permissible
    // If the fallback is true other dynamics urls will also be accessible, it will go through getStatic props for faster access
    fallback: true,
  }
}
export default function StaticPaths() {
  return (
    <div className={styles.centeredText}>
      <Navbar />
      <h1>Static Paths page</h1>
    </div>
  )
}
