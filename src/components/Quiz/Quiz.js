import { useState } from "react";
import swal from "sweetalert2";
import Question from "../Question/Question";
import dbQuestions from "./DbQuestions";
import styles from "./quiz.module.css";

const Quiz = () => {
  const [questions, setQuestions] = useState(dbQuestions);
  const [questionNumber, setQuestionNumber] = useState(1);

  const saveChoiceHandler = (qId, slot) => {
    let index = questions.findIndex((q) => q.id === qId);
    let question = { ...questions[index] };
    question.lastChoice = slot;
    let newState = [...questions];
    newState[index] = question;
    setQuestions(newState);
  };

  const calculatePoint = () => {
    let point = 0;
    questions.forEach((q) => {
      let choice = q.choices.find((c) => c.isCorrect);
      if (choice.slot === q.lastChoice) point++;
    });
    return point;
  };

  const endQuizHandler = () => {
    swal.fire(` Your point is : "${calculatePoint()}" `);
  };

  const goToNextQuestionHandler = () => {
    setQuestionNumber((prevNumber) => prevNumber + 1);
  };

  const goToPreviousQuestionHandler = () => {
    setQuestionNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className={styles.quiz_wraper}>
      <Question
        question={questions[questionNumber - 1]}
        qustionNumber={questionNumber}
        getChoiceHandler={saveChoiceHandler}
      />
      <div className={styles.btns_wraper}>
        <button
          onClick={goToPreviousQuestionHandler}
          disabled={questionNumber === 1}
        >
          ❮ Previous
        </button>
        {questionNumber !== questions.length ? (
          <button onClick={goToNextQuestionHandler}> Next ❯ </button>
        ) : (
          <button onClick={endQuizHandler}> End... </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
