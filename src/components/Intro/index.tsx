import React from "react";

import styles from "./intro.module.css";

interface IntroProps {
  onStart: () => void;
}
export default ({ onStart }: IntroProps) => (
  <div className={styles.container}>
    <p className={styles.top}>Con este juego queremos que aprendas todo acerca del COVID19.</p>

    <i className={styles.covid} />

    <button className={styles.introButton} type="button" onClick={onStart}>
      Jugá &amp; Aprendé
    </button>

    <p className={styles.foot}>
      La información fue recolectada de diferentes sitios web, e intentaremos incluir siempre la fuente para que puedas
      chequear por tu cuenta.
    </p>
  </div>
);
