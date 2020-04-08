import React, { useState, useEffect } from "react";

import { shuffleArray, selectRandomElements } from "../../utils/array";
import Question from "../Question/index";

import questions from "../../data/questions.json";

interface TriviaState {
  currentQuestion: number;
  responses: number[];
  questionsTest: any;
  questionsOrder: any[];
  totalCorrect: number;
}

interface TriviaProps {
  onTriviaCompleted: (totalCorrect: number) => void;
  totalQuestions: number;
}

export default ({ onTriviaCompleted, totalQuestions }: TriviaProps) => {
  const [test, setTest] = useState<TriviaState>({
    currentQuestion: 0,
    questionsTest: questions.questions,
    questionsOrder: [],
    responses: [],
    totalCorrect: 0,
  });

  useEffect(() => {
    if (test.questionsOrder.length === 0) {
      setTest({
        currentQuestion: 0,
        questionsTest: questions.questions,
        questionsOrder: selectRandomElements([...questions.questions.order], totalQuestions),
        responses: [],
        totalCorrect: 0,
      });
    }
  }, [test, totalQuestions]);

  console.log(test.questionsOrder);

  const moveNextQuestion = (response: number, isCorrect: boolean) => {
    if (test.currentQuestion + 1 < totalQuestions) {
      setTest({
        ...test,
        currentQuestion: test.currentQuestion + 1,
        responses: [...test.responses, response],
        totalCorrect: test.totalCorrect + (isCorrect ? 1 : 0),
      });
    } else {
      onTriviaCompleted(test.totalCorrect + (isCorrect ? 1 : 0));
      setTest({
        currentQuestion: 0,
        questionsTest: questions.questions,
        questionsOrder: [],
        responses: [],
        totalCorrect: 0,
      });
    }
  };

  const { currentQuestion, questionsOrder, questionsTest } = test;
  const selectedQuestion = questionsTest[questionsOrder[currentQuestion]];

  return questionsOrder.length ? (
    <Question
      id={selectedQuestion.id}
      text={selectedQuestion.question}
      correctAnswer={selectedQuestion.correctAnswer}
      indexQuestion={currentQuestion + 1}
      sourceLinks={selectedQuestion.sourceLinks}
      onNextQuestion={moveNextQuestion}
      options={shuffleArray(selectedQuestion.options)}
      totalQuestions={totalQuestions}
    />
  ) : (
    <div>Cargando</div>
  );
};
