import React from "react";
import styles from "./SliderBlock.module.css";
import slider from "../../images/check-up.png";

const SliderBlock = () => {
  return (
    <section className={styles.slider}>
      <article className={styles.slider_content}>
        <img className={styles.slider_image} src={slider} alt="Слайдер" />
        <div className={styles.text_content}>
          <div className={styles.titles}>
            <h2 className={styles.main_title}>CHECK-UP</h2>
            <h3 className={styles.sub_title}>для мужчин</h3>
          </div>
          <ul className={styles.list}>
            <li className={styles.list_item}>Гормональный скрининг</li>
            <li className={styles.list_item}>Тестостерон</li>
            <li className={styles.list_item}>Свободный тестостерон</li>
            <li className={styles.list_item}>
              Глобулин, связывающий половые гормоны
            </li>
          </ul>
          <div className={styles.coast}>
            <p className={styles.coast_end}>Всего 2800₽</p>
            <p className={styles.coast_start}>3500₽</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SliderBlock;
