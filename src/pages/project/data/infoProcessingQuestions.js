const infoProcessingQuestions = {
  "202403": {
    title: "정보처리기사",
    subTitle: "정보처리기사 필기 2024년 3회",
    subjects: [
      {
        subjectIndex: 1,
        name: "소프트웨어설계",
        questions: [
          {
            question: "GoF(Gang of Four)의 디자인 패턴에서 행위 패턴에 속하는 것은?",
            choices: ["Builder", "Visitor", "Prototype", "Bridge"],
            answer: 1,
          },
          {
            question: "객체지향 프로그램에서 데이터를 추상화하는 단위는?",
            choices: ["메소드", "클래스", "상속성", "메시지"],
            answer: 1,
          },
          // ...총 20문제 준비
        ],
      },
      {
        subjectIndex: 2,
        name: "소프트웨어개발",
        questions: [
          {
            question: "소프트웨어 개발 생명 주기의 첫 번째 단계는 무엇인가?",
            choices: ["설계", "요구사항 분석", "테스트", "배포"],
            answer: 1,
          },
          // ...20문제
        ],
      },
      {
        subjectIndex: 3,
        name: "데이터베이스구축",
        questions: [
          {
            question: "관계형 데이터베이스에서 기본키(Primary Key)의 특징은?",
            choices: [
              "중복을 허용한다",
              "NULL 값을 가질 수 있다",
              "유일해야 한다",
              "외래키와 같다",
            ],
            answer: 2,
          },
          // ...20문제
        ],
      },
      {
        subjectIndex: 4,
        name: "프로그래밍언어활용",
        questions: [
          {
            question: "JavaScript에서 변수 선언 키워드 중 재할당이 불가능한 것은?",
            choices: ["var", "let", "const", "function"],
            answer: 2,
          },
          // ...20문제
        ],
      },
      {
        subjectIndex: 5,
        name: "정보시스템구축관리",
        questions: [
          {
            question: "정보 시스템 개발에서 사용자의 요구사항을 문서화하는 도구는?",
            choices: ["UML", "ERD", "DFD", "PDM"],
            answer: 0,
          },
          // ...20문제
        ],
      },
    ],
  },
};

export default infoProcessingQuestions;
