import React, { useState, useEffect } from "react";

interface QuestionProps {
  text: string;
  options: any[];
  id: string;
  onNextQuestion: (response: number) => void;
}

export default ({ text, id: questionId, options, onNextQuestion }: QuestionProps) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    setResponse(null);
  }, [questionId]);

  return (
    <div>
      <h4>Pregunta {questionId}</h4>
      <h3>{text}</h3>

      <ul>
        {options.map(({ id, value }: any) => {
          const onClick = () => setResponse(id);

          return (
            <li key={id} style={{ color: response === id ? "red" : "black" }}>
              <button onClick={onClick} type="button">
                {value}
              </button>
            </li>
          );
        })}
      </ul>
      <input type="button" onClick={() => onNextQuestion(response)} value="Siguiente" />
    </div>
  );
};
