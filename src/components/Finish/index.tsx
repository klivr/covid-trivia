import React from "react";

import styles from "./finish.module.css";

const SHARE_URL_BASE = "https://covid-trivia.klivr.com/share_pages/%CORRECT_ANSWERS%.html";
const SHARE_TWITTER_TEXT = "Yo contesté bien %CORRECT_ANSWERS%, y aprendí mucho sobre COVID19. Jugá y aprendé!";

interface FinishProps {
  onRestart: () => void;
  totalCorrect: number;
  totalQuestions: number;
}
export default ({ onRestart, totalCorrect, totalQuestions }: FinishProps) => {
  const failedLimit = Math.floor(totalQuestions / 3);
  const approvedLimit = totalQuestions - 1;
  const urlToShare = encodeURIComponent(SHARE_URL_BASE.replace("%CORRECT_ANSWERS%", String(totalCorrect)));
  const twitterText = encodeURIComponent(SHARE_TWITTER_TEXT.replace("%CORRECT_ANSWERS%", String(totalCorrect)));

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
        <a href={`https://facebook.com/sharer/sharer.php?u=${urlToShare}`} target="_blank noreferrer" rel="noopener">
          <i className={styles.iconFacebook} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet/?text=${twitterText}&amp;url=${urlToShare}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={styles.iconTwitter} />
        </a>
        <a href={`whatsapp://send?text=${twitterText}%20${urlToShare}`} target="_blank" rel="noopener noreferrer">
          <i className={styles.iconWhatsapp} />
        </a>
      </div>
    </div>
  );
};
