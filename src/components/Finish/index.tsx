import React from "react";

import styles from "./finish.module.css";

interface FinishProps {
  onRestart: () => void;
}
export default ({ onRestart }: FinishProps) => (
  <div className={styles.finishContainer}>
    <p className={styles.top}>Felicidades por completar la trivia</p>

    <div className={styles.circleOuter}>
      <div className={styles.circleInner}>
        <p>Has contestado bien</p>
        <p className={styles.score}>25</p>
        <p>preguntas</p>
      </div>
    </div>
    <button className={styles.restartButton} type="button" onClick={onRestart}>
      Seguir aprendiendo
    </button>

    <p className={styles.foot}>Compartí tus resultados en:</p>
    <div className={styles.socialIcons}>Facebook - Twitter - Whatsapp</div>
  </div>
);
