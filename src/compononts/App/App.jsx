import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import MainInfo from "../MainInfo/MainInfo";
import Footer from "../Footer/Footer";
import Slider from "../SliderBlock/Slider";
import Questions from "../Questions/Questions";

const App = () => {
  return (
    <div className={styles.page}>
      <Header></Header>
      <NavMenu></NavMenu>
      <MainInfo></MainInfo>
      <Questions></Questions>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
};

export default App;
