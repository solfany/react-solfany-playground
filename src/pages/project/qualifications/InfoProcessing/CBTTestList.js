import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CBTTestList.scss";

const testData = [
  {
    title: "정보처리기사 필기 2024년 3회",
    subjects: [
      { name: "① 소프트웨어설계", score: 19, total: 20, url: "/project/qualifications/infoProcessing/202403/1" },
      { name: "② 소프트웨어개발", score: 16, total: 20, url: "/project/qualifications/infoProcessing/202403/1" },
      { name: "③ 데이터베이스구축", score: 19, total: 20, url: "/project/qualifications/infoProcessing/202403/1" },
      { name: "④ 프로그래밍언어활용", score: 19, total: 20, url: "/project/qualifications/infoProcessing/202403/1" },
      { name: "⑤ 정보시스템구축관리", score: 20, total: 20, url: "/project/qualifications/infoProcessing/202403/1" }
    ],
  },
  {
    title: "정보처리기사 필기 2024년 2회",
    subjects: [],
  },
  {
    title: "정보처리기사 필기 2024년 1회",
    subjects: [],
  },
  {
    title: "정보처리기사 필기 2023년 3회",
    subjects: [],
  },
  {
    title: "정보처리기사 필기 2023년 2회",
    subjects: [],
  },
];

const CBTTestList = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClick = (url) => {
    navigate(url);
  };

  return (
      <div className="cbt-test-list">
      <h2 className="cbt-title">기출 CBT</h2>
        <h3>처리기사</h3>
        <p>{testData.length}건의 기출시험이 있습니다.</p>
        {testData.map((test, index) => (
          <div className="test-item" key={index}>
            <button
              className={`test-title ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleOpen(index)}
            >
              {test.title}
              <span className="score-badge">100</span>
              <span className="toggle">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && test.subjects.length > 0 && (
              <div className="test-subjects">
                <ul>
                  {test.subjects.map((subject, i) => (
                    <li key={i} onClick={() => handleClick(subject.url)}>
                      <span>{subject.name}</span>
                      <span className="score">
                        <span className="score-now">{subject.score}</span> / {subject.total}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default CBTTestList;
