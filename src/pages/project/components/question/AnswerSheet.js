// src/components/question/AnswerSheet.jsx
import React from "react";
import "./AnswerSheet.scss";
import CheckButton from "../../../../components/ui/button/CheckButton";
const numberMap = ["①", "②", "③", "④"];

const AnswerSheet = ({ questions = [], answers = [], onSelect }) => {
  return (
    <div className="answer-sheet">
      <h3>답안지</h3>
      <CheckButton onClick={() => console.log("채점 실행")}>
    채점 및 기록
  </CheckButton>      <ul className="answer-list">
        {questions.map((_, qIndex) => (
          <li key={qIndex}>
            <span className="question-number">{String(qIndex + 1).padStart(2, "0")}</span>
            {numberMap.map((symbol, cIndex) => (
              <button
                key={cIndex}
                className={`choice ${answers[qIndex] === cIndex ? "selected" : ""}`}
                onClick={() => onSelect?.(qIndex, cIndex)}
              >
                {answers[qIndex] === cIndex && (
                  <span className="checkmark">✓</span>
                )}
                {symbol}
              </button>
            ))}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerSheet;
