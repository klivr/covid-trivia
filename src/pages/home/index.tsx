import React, { useState } from "react";

import Trivia from "../../components/Trivia";

import styles from "./home.module.css";
import Intro from "../../components/Intro";

export default () => {
  const [startTrivia, setStartTrivia] = useState(false);

  const onClickStart = () => {
    setStartTrivia(true);
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageTitle}>Covid Trivia</h1>
      {startTrivia ? <Trivia /> : <Intro onStart={onClickStart} />}
    </div>
  );
};
