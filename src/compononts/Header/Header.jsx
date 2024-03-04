import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import Popup from "../Popup/Popup";
import NavMenuMobile from "../NavMenu/NavMenuMobile";

const Header = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className={styles.header}>
      <button
        className={styles.button_menu}
        onClick={() => setMenuActive(true)}
      ></button>
      <img className={styles.logo} src={logo} alt="Логотип"></img>
      <address className={styles.address}>
        <div className={styles.location_image}></div>
        <div className={styles.address_text}>
          <p className={styles.address_city}>Ростов-на-Дону</p>
          <p className={styles.address_street}>ул. Ленина, 2Б</p>
        </div>
      </address>
      <div className={styles.whatsapp_icon}></div>
      <p className={styles.phone}>+7(863) 000 00 00</p>
      <button className={styles.button} onClick={() => setPopupActive(true)}>
        Записаться на прием
      </button>
      <Popup active={popupActive} setActive={setPopupActive} />
      <NavMenuMobile active={menuActive} setActive={setMenuActive} />
    </header>
  );
};

export default Header;
