import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo-footer.svg";

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      aria-label="Навигация по страницам и контакты"
    >
      <img className={styles.logo} src={logo} alt="Логотип"></img>
      <ul className={styles.nav_links}>
        <li className={styles.nav_text}>О клинике</li>
        <li className={styles.nav_text}>Услуги</li>
        <li className={styles.nav_text}>Специалисты</li>
        <li className={styles.nav_text}>Цены</li>
        <li className={styles.nav_text}>Контакты</li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.inst}></li>
        <li className={styles.whatsapp}></li>
        <li className={styles.telegram}></li>
      </ul>
    </footer>
  );
};

export default Footer;
