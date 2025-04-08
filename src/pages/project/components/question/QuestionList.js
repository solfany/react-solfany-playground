// src/components/question/QuestionList.jsx
import React from "react";
import "./QuestionList.scss";

const choiceSymbols = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

const QuestionList = ({ questions, answers = [], onSelect }) => {
  return (
    <div className="question-list">
      {questions.map((q, questionIndex) => (
        <div key={questionIndex} className="question-item">
          <div className="question-title">
            <strong>{questionIndex + 1}. {q.question}</strong>
          </div>
          <ul className="choice-list">
            {q.choices.map((choice, choiceIndex) => {
              const isSelected = answers[questionIndex] === choiceIndex;
              return (
                <li
                  key={choiceIndex}
                  className={`choice-item ${isSelected ? "selected" : ""}`}
                  onClick={() => onSelect?.(questionIndex, choiceIndex)}
                >
                  <span className="choice-icon">
                    {isSelected && <span className="checkmark">✓</span>}
                    {choiceSymbols[choiceIndex]}
                  </span>
                  <span className="choice-text">{choice}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
