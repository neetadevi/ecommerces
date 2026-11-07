import React from 'react';
import type { Product } from '../types/product';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <span className="product-category-tag">{product.category}</span>
      </div>

      <div className="product-info">
        <div className="product-rating">
          <Star size={14} className="star-filled" fill="#eab308" color="#eab308" />
          <span>{product.rating || 4.5}</span>
          <span className="stock-count">({product.stock} in stock)</span>
        </div>

        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="product-price">
            ${Number(product.price).toFixed(2)}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="add-to-cart-btn"
            title="Add to cart"
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
