import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import SliderBlock from "./SliderBlock";
import "./styles.css";
import Popup from "../Popup/Popup";
import imgSlider from "../../images/check-up.png";

export const Slider = () => {
  const [popupActive, setPopupActive] = useState(false);
  const dataSlider = [
    {
      id: 1,
      title: "Проверка",
      subTitle: "для мужчин",
      price: "2800",
      oldPrice: "3500",
      image: imgSlider,
    },
    {
      id: 2,
      title: "Проверка",
      subTitle: "для женщин",
      price: "2800",
      oldPrice: "3500",
      image: imgSlider,
    },
    {
      id: 3,
      title: "Прием врача",
      subTitle: "для детей",
      price: "3000",
      oldPrice: "3800",
      image: imgSlider,
    },
    {
      id: 4,
      title: "Проверка",
      subTitle: "для животных",
      price: "2000",
      oldPrice: "2500",
      image: imgSlider,
    },
  ];
  return (
    <>
      <Popup active={popupActive} setActive={setPopupActive} />
      {/* <div className={styles.buttons}>
        <button
          className={styles.button_ok}
          onClick={() => setPopupActive(true)}
        >
          Записаться
        </button>
        <button className={styles.button_info}>Подробнее</button>
      </div> */}
      <Swiper
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className="slider"
      >
        {dataSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliderBlock
              title={slide.title}
              subTitle={slide.subTitle}
              price={slide.price}
              oldPrice={slide.oldPrice}
              image={slide.image}
              activatePopup={() => setPopupActive(!popupActive)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
