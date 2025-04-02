import React from "react";
import "../styles/pages/_home.scss";
import Section from "../components/ui/section/Section";
import FlexSection from "../components/ui/section/FlexSection";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import Text from "../components/ui/Text";
import List from "../components/ui/List";
import Content from "../components/ui/Content";
import Card from "../components/ui/card/Card";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <FlexSection>

        <Card
          title="제목"
          subtitle="부제목"
          content="여기에 내용이 들어갑니다."
          imageUrl="/images/test.jpg"
          footer={<button className="text-blue-500">자세히 보기</button>}
        />
      </FlexSection>
      <Title level={3}>📚 사용법</Title>

      <FlexSection>
        <Card
          title="제목"
          subtitle="부제목"
          content="여기에 내용이 들어갑니다."
          imageUrl="/images/test.jpg"
          footer={<button className="text-blue-500">자세히 보기</button>}
        />
        <Card
          title="제목"
          subtitle="부제목"
          content="여기에 내용이 들어갑니다."
          imageUrl="/images/test.jpg"
          footer={<button className="text-blue-500">자세히 보기</button>}
        />
      </FlexSection>

      <Section>
        <Title level={3}>✨ 특징</Title>
        <List
          items={[
            "SCSS 모듈화된 구조",
            "반응형 기본 구성",
            "깔끔한 컴포넌트 스타일링",
          ]}
        />
      </Section>
      <Section>
        <Title level={3}>📚 사용법</Title>
        <Text>src/pages/Home.js 파일을 수정해보세요.</Text>
        <Text>src/styles/pages/_home.scss 파일을 수정해보세요.</Text>
      </Section>
      <Section>
        <Title level={3}>🛠️ 개발 환경</Title>
        <Text>React, SCSS, Vite</Text>
        <Text>npm run dev</Text>
      </Section>
    </>
  );
};

export default Home;
