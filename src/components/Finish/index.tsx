import React from "react";

import styles from "./finish.module.css";

interface FinishProps {
  onRestart: () => void;
  totalCorrect: number;
  totalQuestions: number;
}
export default ({ onRestart, totalCorrect, totalQuestions }: FinishProps) => {
  const failedLimit = Math.floor(totalQuestions / 3);
  const approvedLimit = totalQuestions - 1;

  const styleResults =
    totalCorrect <= failedLimit
      ? styles.failedTest
      : (totalCorrect <= approvedLimit && styles.approvedTest) || styles.excellentTest;

  return (
    <div className={styles.finishContainer}>
      <p className={styles.top}>Felicidades por completar la trivia</p>

      <div className={[styles.circleOuter, styleResults].join(" ")}>
        <div className={styles.circleInner}>
          <p>Has contestado bien</p>
          <p className={styles.score}>{totalCorrect}</p>
          <p>preguntas</p>
        </div>
      </div>
      <button className={styles.restartButton} type="button" onClick={onRestart}>
        Seguir aprendiendo
      </button>

      <p className={styles.foot}>Compartí tus resultados en:</p>
      <div className={styles.socialIcons}>
        <i className={styles.iconFacebook} />
        <i className={styles.iconTwitter} />
        <i className={styles.iconWhatsapp} />
      </div>
    </div>
  );
};
