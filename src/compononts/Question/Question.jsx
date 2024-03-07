import React, { useState } from "react";
import styles from "../Questions/Questions.module.css";

const Question = ({ item }) => {
  const [openQuestion, setOpenQuestion] = useState(true);
  const htmlString = JSON.parse(`"${item.text}"`);
  return (
    <div className={styles.data_questions}>
      <h3 className={styles.title}>{item.title}</h3>
      <p
        className={openQuestion ? styles.text : styles.text_visible}
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
      <button
        className={openQuestion ? styles.button : styles.button_visible}
        onClick={() => setOpenQuestion(!openQuestion)}
      ></button>
    </div>
  );
};

export default Question;
