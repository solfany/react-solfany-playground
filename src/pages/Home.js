import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="background">
         <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/videos/main.mp4" type="video/mp4" />
        당신의 브라우저는 HTML5 비디오를 지원하지 않습니다.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h2>playground</h2>
        <h1>with solfany </h1>
        {/* <button className="invest-button">Invest Now</button> */}
      </div>
    </div>
  );
};

export default Home;
