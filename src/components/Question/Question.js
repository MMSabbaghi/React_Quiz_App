import React from "react";
import styles from "./question.module.css";

const Question = (props) => {
  const { qustionNumber, question, getChoiceHandler } = props;

  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <h4>
            Question # <span>{qustionNumber}</span>
          </h4>
        </div>
        <div className={styles.card_body}>
          <p className={styles.card_text}>{question.description}</p>
          {question.choices.map((c) => {
            return (
              <div key={c.slot} className={styles.form_control}>
                <input
                  type="radio"
                  name="ChoiceRadio"
                  onChange={() => getChoiceHandler(c.questionId, c.slot)}
                  checked={question.lastChoice === c.slot}
                />
                <label htmlFor="ChoiceRadio">{c.text}</label>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
