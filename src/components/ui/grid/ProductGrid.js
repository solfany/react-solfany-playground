import React from 'react';
import './ProductGrid.scss';
import ProductCard from '../card/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <section className="products-section">
      <div className="products-header">
        <div className="products-header__left">
          <p className="products-header__subtitle">Global leaders piping material</p>
          <h2 className="products-header__title">Products</h2>
          <p className="products-header__description">
            한데이스트리얼은 엔지니어링 서비스, 최고 공급 및 유통의 프로젝션 패키지 고품질의 산업 제품 및 장비를 제공합니다.
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