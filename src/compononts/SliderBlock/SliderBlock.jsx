import React from "react";
import styles from "./SliderBlock.module.css";

const SliderBlock = ({
  title,
  subTitle,
  price,
  oldPrice,
  image,
  activatePopup,
}) => {
  return (
    <section className={styles.slider}>
      <article className={styles.slider_content}>
        <img className={styles.slider_image} src={image} alt="Слайдер" />
        <div className={styles.text_content}>
          <div className={styles.titles}>
            <h2 className={styles.main_title}>{title}</h2>
            <h3 className={styles.sub_title}>{subTitle}</h3>
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
            <p className={styles.coast_end}>Всего {price}₽</p>
            <p className={styles.coast_start}>{oldPrice}₽</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button_ok} onClick={activatePopup}>
              Записаться
            </button>
            <button className={styles.button_info}>Подробнее</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SliderBlock;
