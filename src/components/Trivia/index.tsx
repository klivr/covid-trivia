import React, { useState } from "react";

import Question from "../Question/index";

import questions from "../../data/questions.json";

interface TriviaState {
  currentQuestion: number;
  responses: number[];
  questionsTest: any;
}

export default () => {
  const [test, setTest] = useState<TriviaState>({
    currentQuestion: 1,
    questionsTest: questions.questions.virus,
    responses: [],
  });

  const moveNextQuestion = (response: number) => {
    setTest({
      ...test,
      currentQuestion: test.currentQuestion + 1,
      responses: [...test.responses, response],
    });
  };

  const { currentQuestion, questionsTest } = test;

  return (
    <Question
      id={questionsTest[currentQuestion].id}
      text={questionsTest[currentQuestion].question}
      onNextQuestion={moveNextQuestion}
      options={questionsTest[currentQuestion].options}
    />
  );
};
