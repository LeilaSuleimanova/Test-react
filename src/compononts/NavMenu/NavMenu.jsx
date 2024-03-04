import React from "react";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <section className={styles.nav} aria-label="Навигация по страницам">
      <ul className={styles.nav_links}>
        <li className={styles.nav_text}>О клинике</li>
        <li className={styles.nav_text}>Услуги</li>
        <li className={styles.nav_text}>Специалисты</li>
        <li className={styles.nav_text}>Цены</li>
        <li className={styles.nav_text}>Контакты</li>
      </ul>
    </section>
  );
};

export default NavMenu;
