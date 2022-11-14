import styles from '../styles/Home.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <h3>
        by Joshua Du Plooy for <a  href="https://www.sovtech.co.za/" target="_blank"  rel="noreferrer">
          <img src="https://sovtechall.wpenginepowered.com/wp-content/uploads/sites/29/2019/07/sovtech_logo-2.png" alt="SovTech" height="50pt"></img>
        </a>
      </h3>
      </footer>
    )
}