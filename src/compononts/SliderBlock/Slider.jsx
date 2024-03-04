import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import SliderBlock from "./SliderBlock";
import "./styles.css";
import Popup from "../Popup/Popup";
import styles from "./SliderBlock.module.css";

export const Slider = () => {
  const [popupActive, setPopupActive] = useState(false);
  return (
    <>
      <Popup active={popupActive} setActive={setPopupActive} />
      <div className={styles.buttons}>
        <button
          className={styles.button_ok}
          onClick={() => setPopupActive(true)}
        >
          Записаться
        </button>
        <button className={styles.button_info}>Подробнее</button>
      </div>
      <Swiper
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="slider"
      >
        <SwiperSlide>
          <SliderBlock></SliderBlock>
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
