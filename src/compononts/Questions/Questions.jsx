import React, { useState } from "react";
import data from "../../data/data.json";
import styles from "../Questions/Questions.module.css";

const Questions = () => {
  const subParagraph = "Это предложение должно здесь быть.";
  const strongSubParagraph = (
    <strong className={styles.strong}>{subParagraph}</strong>
  );

  const [textVisibleArr, setTextVisibleArr] = useState(
    Array(data.length).fill(true)
  );
  const [buttonVisibleArr, setButtonVisibleArr] = useState(
    Array(data.length).fill(true)
  );

  const toggleVisibility = (index) => {
    setTextVisibleArr((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setButtonVisibleArr((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const renderText = (text, i, index) => {
    if (text.includes(subParagraph)) {
      const parts = text.split(subParagraph);
      return (
        <p
          key={i}
          className={textVisibleArr[index] ? styles.text : styles.text_visible}
        >
          {" "}
          {parts[0]}
          {strongSubParagraph}
          {parts[1]}{" "}
        </p>
      );
    } else {
      return (
        <p
          key={i}
          className={textVisibleArr[index] ? styles.text : styles.text_visible}
        >
          {" "}
          {text}{" "}
        </p>
      );
    }
  };

  return (
    <section className={styles.questions}>
      <h2 className={styles.title_questions}>Часто задаваемые вопросы</h2>
      {data.map((item, index) => (
        <div className={styles.data_questions} key={index}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.text
            .split("</br>")
            .map((text, i) => renderText(text, i, index))}
          <button
            className={
              buttonVisibleArr[index] ? styles.button : styles.button_visible
            }
            onClick={() => toggleVisibility(index)}
          ></button>
        </div>
      ))}
    </section>
  );
};

export default Questions;
