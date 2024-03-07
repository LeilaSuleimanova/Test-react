import React from "react";
import data from "../../data/data.json";
import styles from "../Questions/Questions.module.css";
import Question from "../Question/Question";

const Questions = () => {
  return (
    <section className={styles.questions}>
      <h2 className={styles.title_questions}>Часто задаваемые вопросы</h2>
      {data.map((item) => (
        <Question key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Questions;
