import React from 'react';
import '../../../styles/components/ui/card/_card.scss';
import Title from "../Title";
import Subtitle from "../Subtitle";
import Img from "../img/Img";

const Card = ({ title, subtitle, content, imageUrl, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <Img src={imageUrl} alt={title} className="card__image" />
      )}

      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}

      <div className="card__body">
        {content}
      </div>
    </div>
  );
};

export default Card;