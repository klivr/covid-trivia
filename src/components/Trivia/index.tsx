import React, { useState } from "react";

import { shuffleArray, selectRandomElements } from "../../utils/array";
import Question from "../Question/index";

import questions from "../../data/questions.json";

interface TriviaState {
  currentQuestion: number;
  responses: number[];
  questionsTest: any;
  questionsOrder: any[];
}

const TOTAL_QUESTIONS = 15;

export default () => {
  const [test, setTest] = useState<TriviaState>({
    currentQuestion: 0,
    questionsTest: questions.questions,
    questionsOrder: selectRandomElements(questions.questions.order, TOTAL_QUESTIONS),
    responses: [],
  });

  const moveNextQuestion = (response: number) => {
    if (test.currentQuestion + 1 < TOTAL_QUESTIONS) {
      setTest({
        ...test,
        currentQuestion: test.currentQuestion + 1,
        responses: [...test.responses, response],
      });
    } else {
      alert("You completed the test");
    }
  };

  const { currentQuestion, questionsOrder, questionsTest } = test;
  const selectedQuestion = questionsTest[questionsOrder[currentQuestion]];

  return (
    <Question
      id={selectedQuestion.id}
      text={selectedQuestion.question}
      correctAnswer={selectedQuestion.correctAnswer}
      sourceLinks={selectedQuestion.sourceLinks}
      onNextQuestion={moveNextQuestion}
      options={shuffleArray(selectedQuestion.options)}
      totalQuestions={TOTAL_QUESTIONS}
    />
  );
};
