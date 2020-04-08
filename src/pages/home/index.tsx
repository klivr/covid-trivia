import React, { useState } from "react";

import Trivia from "../../components/Trivia";

import styles from "./home.module.css";
import Intro from "../../components/Intro";
import Finish from "../../components/Finish";

const TOTAL_QUESTIONS = 14;
export default () => {
  const [trivia, setTrivia] = useState({
    started: false,
    completed: false,
    totalCorrect: 8,
  });

  const onClickStart = () => {
    setTrivia({
      started: true,
      completed: false,
      totalCorrect: 0,
    });
  };

  const onTriviaCompleted = (totalCorrect: number) => {
    setTrivia({
      started: true,
      completed: true,
      totalCorrect,
    });
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageTitle}>Covid Trivia</h1>
      {(trivia.started &&
        (!trivia.completed ? (
          <Trivia onTriviaCompleted={onTriviaCompleted} totalQuestions={TOTAL_QUESTIONS} />
        ) : (
          <Finish onRestart={onClickStart} totalCorrect={trivia.totalCorrect} totalQuestions={TOTAL_QUESTIONS} />
        ))) || <Intro onStart={onClickStart} />}
    </div>
  );
};
