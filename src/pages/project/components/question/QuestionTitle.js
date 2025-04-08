import React from "react";
import "./QuestionTitle.scss";

const QuestionTitle = ({ examTitle, subjectName, subjectIndex, onPrev, onNext, hasPrev, hasNext }) => (
  <div className="question-header">
    <h3 className="exam-title">{examTitle}</h3>
    <div className="subject-navigator">
      <span className="subject-name">제{subjectIndex}과목 : {subjectName}</span>
      <div className="subject-buttons">
        <button onClick={onPrev} disabled={!hasPrev} className="nav-button prev">〈 이전과목</button>
        <button onClick={onNext} disabled={!hasNext} className="nav-button next">다음과목 〉</button>
      </div>
    </div>
  </div>
);

export default QuestionTitle;
