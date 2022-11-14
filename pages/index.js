import Footer from '../components/Footer'
import Head_and_Metadata from '../components/head_and_metadata'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head_and_Metadata/>
      <body>
        <Header/>
        <Main/>
        <Footer/>
      </body>
    </div>
  )
}
