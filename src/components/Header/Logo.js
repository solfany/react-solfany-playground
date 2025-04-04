import CustomLink from "../ui/customLink/CustomLink";
import { useRef, useEffect } from 'react';

const Logo = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    if (textRef.current) {
      const subText = textRef.current;
      const text = subText.textContent;
      
      // 기존 텍스트 내용 비우기
      subText.textContent = '';
      
      // 각 글자를 span으로 감싸기
      [...text].forEach((char) => {
        const span = document.createElement('span');
        span.className = 'arc-char';
        span.textContent = char;
        subText.appendChild(span);
      });
    }
  }, []);

  return (
    <div className="logo">
      <CustomLink to="/" className="logo-link">
        <div className="logo-main">
          <span className="logo-highlight">S</span>OLFANY
        </div>
        <div className="logo-sub" ref={textRef}>우아한(척 하는) 개발자</div>
      </CustomLink>
    </div>
  );
};

export default Logo;