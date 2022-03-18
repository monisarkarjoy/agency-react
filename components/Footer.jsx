import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cardL}>
          <h1 className={styles.title}>JADRIKA CREATIVES</h1>
          <h1 className={styles.linkTitle}>
            <a href="/contact" passHref>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" width="40px" height="40px" color="white" alt="" />
            </a>
          </h1>
        </div>
        <div className={styles.cardS}>
          <div className={styles.cardItem}>
            12 SADAR SYLHET <br /> BAN
          </div>
          <div className={styles.cardItem}>
            CONTACT@JADRIKA.DEV <br /> 01722-112914
          </div>
        </div>
        <div className={styles.cardS}>
        <div className={styles.cardItem}>
            FOLLO US:
            <br /> __FB __IN __BE __TW
          </div>
          <div className={styles.cardItem}>
            @ 2022 JADRIKA INTERACTIVE,
            <br />
            ALL RIGHTS RESERVED
          </div>
        </div>
    </div>
  )
}

export default Footer;