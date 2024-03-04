import React from "react";
import styles from "./MainInfo.module.css";

const MainInfo = () => {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Многопрофильная клиника для детей и взрослых
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </main>
  );
};

export default MainInfo;
