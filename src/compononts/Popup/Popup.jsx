import React from "react";
import styles from "./Popup.module.css";
import logo from "../../images/logo.svg";

const Popup = ({ active, setActive }) => {
  return (
    <div className={active ? styles.popup_active : styles.popup}>
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
      <div className={styles.popup_box}>
        <div className={styles.text_content}>
          <h2 className={styles.title}>
            Запишитесь<br></br>на приём онлайн
          </h2>
          <p className={styles.text}>
            Администратор свяжется с вами через WhatsApp в течение дня и уточнит
            детали
          </p>
        </div>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="ФИО"
            required
            onChange={() => {}}
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            required
            onChange={() => {}}
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Электронная почта"
            required
            onChange={() => {}}
          />
          <button className={styles.submit_button} type="submit">
            Записаться
          </button>
        </form>
        <button
          type="button"
          className={styles.close_button}
          onClick={() => setActive(false)}
        ></button>
      </div>
    </div>
  );
};

export default Popup;
