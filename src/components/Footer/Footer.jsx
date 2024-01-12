import { CompanyLogo } from "../../svg/Symbols";
import { Nav } from "../Navigation/Navigation";
import { Socials } from "../Socials/Socials";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.container} container`}>
          <div className={styles.border}></div>
          <CompanyLogo className={styles.logo} />
          <Nav className={styles.nav} />
          <p className={styles.text}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.copyright}>
            Copyright 2021. All Rights Reserved
          </p>

          <Socials className={styles.socials} />
        </div>
      </footer>
    </>
  );
}
