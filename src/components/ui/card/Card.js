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
        <div className="card__center-title">
          {title && <h3 className="card__title">{title}</h3>}
        </div>
        <div className="card__bottom-content">
          {subtitle && <div className="card__subtitle">{subtitle}</div>}
          {content && <div className="card__content">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;