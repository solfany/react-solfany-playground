import React from 'react';
import './ProductCard.scss';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ 
  title, 
  description, 
  subDescription, 
  backgroundImageUrl, 
  foregroundImageUrl,
  pageUrl,
}) => {
  // 카드 컨테이너 스타일 계산
  const cardStyle = {
    backgroundColor: '#ffffff'
  };
  
  // 배경 이미지가 있으면 스타일에 추가
  if (backgroundImageUrl) {
    cardStyle.backgroundImage = `url(${backgroundImageUrl})`;
  }
  const navigate = useNavigate();

  const handleClick = () => {
    if (pageUrl) {
      navigate(pageUrl);
    }
  };
  return (
    <div className="product-card" style={cardStyle}  onClick={handleClick}>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__description">{description}</p>
        {subDescription && (
          <p className="product-card__sub-description">{subDescription}</p>
        )}
      </div>
      
      {foregroundImageUrl && (
        <div className="product-card__foreground-image-container">
          <img 
            src={foregroundImageUrl} 
            alt={title} 
            className="product-card__foreground-image" 
          />
        </div>
      )}
    </div>
  );
};

export default ProductCard;