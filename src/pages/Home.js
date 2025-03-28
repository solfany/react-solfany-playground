import React from "react";
import "../styles/pages/_home.scss";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import Text from "../components/ui/Text";
import List from "../components/ui/List";
import Content from "../components/ui/Content";

const Home = () => {
  return (
    <>
      <Container>
        <Section>
        <Content>
          <Subtitle>Welcome to</Subtitle>
          <Title>Solfany Playground</Title>
          <Text>여기서 당신의 아이디어를 실험해보세요 🎯</Text> 
        </Content>
          <Content>
            <Text>이곳은 Solfany의 Playground입니다.</Text>
            <Text>여러분의 아이디어를 실험해보세요.</Text>
            <Text>여기서 만들어진 모든 코드는 여러분의 것입니다.</Text>
            <Text>이곳은 Solfany의 Playground입니다.</Text>
            <Text>여러분의 아이디어를 실험해보세요.</Text>
            <Text>여기서 만들어진 모든 코드는 여러분의 것입니다.</Text>
            <Text>이곳은 Solfany의 Playground입니다.</Text>

          </Content>
        </Section>

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
          </Container>


    </>
  );
};

export default Home;
