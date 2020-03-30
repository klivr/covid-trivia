import React, { useState, useEffect } from "react";

import styles from "./question.module.css";

interface QuestionProps {
  text: string;
  options: any[];
  correctAnswer: number;
  sourceLinks: any[];
  id: string;
  totalQuestions: number;
  onNextQuestion: (response: number) => void;
}

export default ({ correctAnswer, text, id: questionId, options, onNextQuestion, totalQuestions }: QuestionProps) => {
  const [response, setResponse] = useState();
  const [answer, setAnswer] = useState({
    checked: false,
    correct: false,
  });

  useEffect(() => {
    setResponse(null);
  }, [questionId]);

  const onClickAnswer = () => {
    if (answer.checked) {
      setAnswer({
        checked: false,
        correct: false,
      });
      onNextQuestion(response);
    } else {
      setAnswer({
        checked: true,
        correct: response === correctAnswer,
      });
    }
  };

  return (
    <div className={styles.question}>
      <h3 className={styles.questionTitle}>{text}</h3>

      <ul className={[styles.options, answer.checked ? styles.optionsReadOnly : ""].join(" ")}>
        {options.map(({ id, value }: any) => {
          const onClick = () => setResponse(id);

          return (
            <li key={id}>
              <button
                onClick={onClick}
                type="button"
                className={[
                  styles.option,
                  answer.checked && answer.correct && response === id ? styles.selectedOptionCorrect : "",
                  answer.checked && !answer.correct && response === id ? styles.selectedOptionIncorrect : "",
                  answer.checked && !answer.correct && correctAnswer === id ? styles.optionCorrect : "",
                  response === id ? styles.selectedOption : "",
                ].join(" ")}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
      {answer.checked ? "Show links" : null}
      <button
        type="button"
        className={[styles.nextButton, !response ? styles.nextButtonDisabled : ""].join(" ")}
        onClick={onClickAnswer}
      >
        {answer.checked ? "Siguiente" : "Validar"}
      </button>
      <div className={styles.questionNumber}>
        Pregunta {questionId} / {totalQuestions}
      </div>
    </div>
  );
};
