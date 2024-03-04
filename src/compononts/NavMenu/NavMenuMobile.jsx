import React, { useState } from "react";
import styles from "./NavMenuMobile.module.css";
import Popup from "../Popup/Popup";
import logo from "../../images/logo.svg";

const NavMenuMobile = ({ active, setActive }) => {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <>
      <section
        className={active ? styles.nav_active : styles.nav}
        aria-label="Навигация по страницам"
      >
        <div className={styles.header}>
          <button
            className={styles.button_close}
            onClick={() => setActive(false)}
          ></button>
          <img className={styles.logo} src={logo} alt="Логотип"></img>
          <div className={styles.info}>
            <p className={styles.phone}>+7(863) 000 00 00</p>
            <p className={styles.city}>Ростов-на-Дону</p>
          </div>
        </div>
        <ul className={styles.nav_links}>
          <li className={styles.nav_text}>О клинике</li>
          <li className={styles.nav_text}>Услуги</li>
          <li className={styles.nav_text}>Специалисты</li>
          <li className={styles.nav_text}>Цены</li>
          <li className={styles.nav_text}>Контакты</li>
        </ul>
        <button className={styles.button} onClick={() => setPopupActive(true)}>
          Записаться на приём
        </button>
      </section>
      <Popup active={popupActive} setActive={setPopupActive} />
    </>
  );
};

export default NavMenuMobile;
