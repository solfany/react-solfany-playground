import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionTitle from "../components/question/QuestionTitle";
import QuestionList from "../components/question/QuestionList";
import AnswerSheet from "../components/question/AnswerSheet";
import questionData from "../data/infoProcessingQuestions";
import FlexSection from "../../../components/ui/section/FlexSection";
import "./QuestionPage.scss";

const QuestionPage = () => {
  const { examId, subjectId } = useParams();
  const navigate = useNavigate();

  const subjectIndex = parseInt(subjectId, 10);
  const exam = questionData[examId];
  const subject = exam?.subjects?.[subjectIndex - 1];
  const totalSubjects = exam?.subjects?.length || 0;

  // ✅ 과목별 answers 저장
  const [answersMap, setAnswersMap] = useState({});

  // ✅ 현재 과목에 해당하는 답안 배열
  const currentAnswers = answersMap[subjectIndex] || Array(subject?.questions?.length || 0).fill(null);

  // ✅ 특정 문항 선택 시, 해당 과목에만 저장
  const handleSelect = (qIndex, cIndex) => {
    const updatedAnswers = [...currentAnswers];
    updatedAnswers[qIndex] = cIndex;

    setAnswersMap((prev) => ({
      ...prev,
      [subjectIndex]: updatedAnswers,
    }));
  };

  const handlePrev = () => {
    if (subjectIndex > 1) {
      navigate(`/project/qualifications/infoProcessing/${examId}/${subjectIndex - 1}`);
    }
  };

  const handleNext = () => {
    if (subjectIndex < totalSubjects) {
      navigate(`/project/qualifications/infoProcessing/${examId}/${subjectIndex + 1}`);
    }
  };

  if (!subject) return <div>문제를 불러올 수 없습니다.</div>;

  return (
    <div className="question-page">
    <FlexSection style={{ gap: "20px", alignItems: "flex-start" }}>
      <div className="question-main">
        <QuestionList
          questions={subject.questions}
          answers={currentAnswers}
          onSelect={handleSelect}
        />
      </div>
      <div className="question-1">
        <QuestionTitle
          examTitle={exam.title}
          subjectName={subject.name}
          subjectIndex={subjectIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={subjectIndex > 1}
          hasNext={subjectIndex < totalSubjects}
        />
        <AnswerSheet
          questions={subject.questions}
          answers={currentAnswers}
          onSelect={handleSelect}
        />
      </div>
    </FlexSection>
    </div>
  );
};

export default QuestionPage;
