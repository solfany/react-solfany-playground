import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Mbti.css";

const questions = [
  "나는 새로운 아이디어를 탐구하고 분석하는 것을 좋아한다.",
  "나는 감정보다 논리를 우선시하며 결정을 내리는 편이다.",
  "나는 장기적인 계획을 세우고 목표를 이루는 데 집중한다.",
  "나는 문제를 해결할 때 직관적인 통찰력을 중요하게 여긴다.",
  "나는 여러 사람과 어울리는 것보다 혼자만의 시간이 더 편하다.",
  "나는 즉흥적으로 행동하기보다는 계획을 세워 실행하는 편이다.",
  "나는 감성적인 사람보다는 객관적인 사람으로 보이는 경우가 많다.",
  "나는 갈등이 발생하면 감정보다는 해결책을 찾는 것에 집중한다.",
  "나는 사람들에게 동기를 부여하고 영향을 미치는 것이 즐겁다.",
  "나는 감정을 중요하게 여기고, 타인의 기분을 신경 쓰는 편이다.",
  "나는 깊이 있는 철학적 대화를 즐긴다.",
  "나는 주변 환경을 세심하게 관찰하고 세부 사항을 잘 기억한다.",
  "나는 혼자서 깊이 생각하는 시간이 꼭 필요하다.",
  "나는 현실적이고 실용적인 해결책을 찾는 것을 좋아한다.",
  "나는 변화와 도전을 두려워하지 않고, 즉흥적으로 행동하는 편이다.",
  "나는 계획보다는 유연한 접근 방식이 더 편하다.",
  "나는 팀을 이끌며 조직을 관리하는 것이 익숙하다.",
  "나는 위험을 감수하는 모험적인 성향이 강하다.",
  "나는 사람들을 기쁘게 하고, 즐거운 분위기를 만드는 것이 좋다.",
  "나는 감성적인 예술 활동(음악, 그림, 글쓰기 등)에 관심이 많다."
];

const Mbti = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    if (name.trim() !== "") {
      setIsStarted(true);
      navigate("/quiz", { state: { name } });
    }
  };

  return (
    <div className="background">
      <div className="overlay"></div>
      <div className="content">
        {!isStarted ? (
          <>
            <h2>AI character</h2>
            <h1>with AI <br />나의 MBTI로 <br />AI 캐릭터를 생성해보세요</h1>
            <button className="invest-button" onClick={handleStart}>
              시작하기
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Mbti;
