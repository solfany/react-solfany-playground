import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Result.css";

const calculateMBTI = (answers) => {
  let EI = 0, SN = 0, TF = 0, JP = 0;

  // 20개 질문을 4가지 MBTI 축으로 구분해서 점수 계산
  answers.forEach((answer, index) => {
    if (index % 4 === 0) EI += answer === "예" ? 1 : -1; // 외향(E) vs 내향(I)
    if (index % 4 === 1) SN += answer === "예" ? 1 : -1; // 감각(S) vs 직관(N)
    if (index % 4 === 2) TF += answer === "예" ? 1 : -1; // 사고(T) vs 감정(F)
    if (index % 4 === 3) JP += answer === "예" ? 1 : -1; // 판단(J) vs 인식(P)
  });

  const mbti = 
    (EI >= 0 ? "E" : "I") +
    (SN >= 0 ? "N" : "S") +
    (TF >= 0 ? "T" : "F") +
    (JP >= 0 ? "J" : "P");

  return mbti;
};

// 각 MBTI 유형에 대한 설명
const MBTI_DESCRIPTIONS = {
  INTJ: "전략적인 사고를 즐기는 계획형 리더! 🧠",
  INTP: "논리적이며 창의적인 탐구자! 🔬",
  ENTJ: "야망 넘치는 대담한 리더! 🔥",
  ENTP: "토론을 즐기고 아이디어가 넘치는 혁신가! 💡",
  INFJ: "깊은 통찰력을 가진 조용한 이상주의자! 🌿",
  INFP: "감성적이고 창의적인 이상주의자! 🎨",
  ENFJ: "타인을 돕고 리드하는 따뜻한 리더! 🤝",
  ENFP: "자유롭고 창의적인 활력 넘치는 사람! 🌟",
  ISTJ: "책임감 강한 현실주의자! 📊",
  ISFJ: "따뜻하고 헌신적인 조력자! 💕",
  ESTJ: "강한 조직력을 가진 관리자! 🏆",
  ESFJ: "친절하고 사람들을 잘 챙기는 사회자! 😊",
  ISTP: "현실적이며 논리적인 문제 해결사! 🛠",
  ISFP: "예술적이고 감성적인 자유로운 영혼! 🎶",
  ESTP: "즉흥적이며 활동적인 도전자! 🚀",
  ESFP: "분위기를 밝게 만드는 사교적인 엔터테이너! 🎭"
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || "사용자";
  const answers = location.state?.answers || [];
  
  if (!answers.length) {
    return (
      <div className="result-container">
        <h1>오류 발생</h1>
        <p>테스트 결과를 불러올 수 없습니다.</p>
        <button onClick={() => navigate("/")}>메인으로 돌아가기</button>
      </div>
    );
  }

  const mbti = calculateMBTI(answers);
  const description = MBTI_DESCRIPTIONS[mbti] || "알 수 없는 유형";

  return (
    <div className="background">
      <div className="overlay"></div>
      <div className="content">
      <div className="blur-container">
        <h1>{name}님의 MBTI 결과는...</h1>
        <h2 className="mbti-type">{mbti}</h2>
        <p className="mbti-description">{description}</p>
        <button onClick={() => navigate("/")}>다시 테스트하기</button>
        </div>
    </div>
    </div>
  );
};

export default Result;
