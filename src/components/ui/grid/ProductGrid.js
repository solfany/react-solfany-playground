import React from 'react';
import './ProductGrid.scss';
import ProductCard from '../card/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <section className="products-section">
      <div className="products-header">
        <div className="products-header__left">
          <p className="products-header__subtitle">Explore My Creations</p>
          <h2 className="products-header__title">Side Projects</h2>
          <p className="products-header__description">
            다양한 아이디어와 기술을 바탕으로 직접 만들어본 프로젝트들을 소개합니다.
            하단에서 자유롭게 둘러보고 직접 사용해보세요!
          </p>
        </div>
        <div className="products-header__right">
          <button className="viewmore-button">
            Viewmore <span className="viewmore-button__arrow">→</span>
          </button>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="products-grid__item" key={index}>
            <ProductCard
              title={product.title}
              description={product.description}
              subDescription={product.subDescription}
              backgroundImageUrl={product.backgroundImageUrl}
              foregroundImageUrl={product.foregroundImageUrl}
              pageUrl={product.pageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;