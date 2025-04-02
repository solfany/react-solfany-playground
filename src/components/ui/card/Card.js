import React from 'react';
import '../../../styles/components/ui/card/_card.scss';

const Card = ({ title, subtitle, content, imageUrl, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {imageUrl && (
        <div
          className="card__image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <div className="card__body">
        {subtitle && <div className="card__subtitle">{subtitle}</div>}
        {title && <h3 className="card__title">{title}</h3>}
        <div className="card__content">{content}</div>
      </div>
    </div>
  );
};

export default Card;
