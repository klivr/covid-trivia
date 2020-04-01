import React, { useState, useEffect } from "react";

import styles from "./question.module.css";

interface QuestionProps {
  text: string;
  options: any[];
  correctAnswer: number;
  sourceLinks: any[];
  id: string;
  totalQuestions: number;
  onNextQuestion: (response: number, isisCorrect: boolean) => void;
}

export default ({
  correctAnswer,
  text,
  id: questionId,
  options,
  onNextQuestion,
  totalQuestions,
  sourceLinks,
}: QuestionProps) => {
  const [response, setResponse] = useState<number>(-1);
  const [answer, setAnswer] = useState({
    checked: false,
    isCorrect: false,
  });

  useEffect(() => {
    setResponse(-1);
  }, [questionId]);

  const onClickAnswer = () => {
    if (answer.checked) {
      onNextQuestion(response, answer.isCorrect);
      setAnswer({
        checked: false,
        isCorrect: false,
      });
    } else {
      setAnswer({
        checked: true,
        isCorrect: response === correctAnswer,
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
                  answer.checked && answer.isCorrect && response === id ? styles.selectedOptionCorrect : "",
                  answer.checked && !answer.isCorrect && response === id ? styles.selectedOptionIncorrect : "",
                  answer.checked && !answer.isCorrect && correctAnswer === id ? styles.optionCorrect : "",
                  response === id ? styles.selectedOption : "",
                ].join(" ")}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={[styles.nextButton, response === -1 ? styles.nextButtonDisabled : ""].join(" ")}
        onClick={onClickAnswer}
      >
        {answer.checked ? "Siguiente" : "Validar"}
      </button>
      <div>
        {answer.checked &&
          sourceLinks.map((link) => {
            return (
              <a href={link.link} target="_blank" rel="noopener noreferrer" key={link.link}>
                {link.title}
              </a>
            );
          })}
      </div>
      <div className={styles.questionNumber}>
        Pregunta {questionId} / {totalQuestions}
      </div>
    </div>
  );
};
