import React, { useState } from 'react';
import type { Product } from '../types/product';
import { ShoppingBag, Heart, Star, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  onToggleWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  // Calculate simulated original price and discount if not provided
  const priceNum = Number(product.price);
  const originalPrice = product.original_price || Math.round(priceNum * 1.45);
  const discountPercent = Math.round(((originalPrice - priceNum) / originalPrice) * 100);

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="lakshita-product-card">
      {/* Product Image Box */}
      <div className="product-media-wrapper">
        <img
          src={product.image_url}
          alt={product.name}
          className="product-media-img"
          loading="lazy"
        />

        {/* Badges */}
        <div className="badges-overlay">
          <span className="sale-discount-badge">{discountPercent}% OFF</span>
          {product.category === 'Velvets' && (
            <span className="special-tag-badge">VELVET SPECIAL</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className={`wishlist-heart-btn ${isWishlisted ? 'active' : ''}`}
          onClick={() => onToggleWishlist?.(product.id)}
          aria-label="Wishlist"
        >
          <Heart size={18} fill={isWishlisted ? '#b40740' : 'none'} color={isWishlisted ? '#b40740' : '#4b0006'} />
        </button>
      </div>

      {/* Product Info */}
      <div className="product-card-details">
        {/* Rating and Reviews */}
        <div className="product-rating-row">
          <div className="stars-holder">
            <Star size={12} fill="#ab8c52" color="#ab8c52" />
            <span className="rating-val">{product.rating || 4.8}</span>
          </div>
          <span className="reviews-count">({Math.floor(Number(product.rating || 4.8) * 18)} reviews)</span>
        </div>

        <span className="product-category-sub">{product.category}</span>
        <h3 className="product-name-title" title={product.name}>
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="product-price-row">
          <span className="current-price">₹{priceNum.toLocaleString('en-IN')}</span>
          <span className="original-strike-price">₹{originalPrice.toLocaleString('en-IN')}</span>
          <span className="discount-txt">({discountPercent}% OFF)</span>
        </div>

        {/* Size Selection */}
        <div className="size-selector-row">
          <span className="size-label">Size:</span>
          <div className="sizes-pills">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`size-pill ${selectedSize === s ? 'active' : ''}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Bag Button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`quick-add-bag-btn ${addedAnimation ? 'added-success' : ''}`}
        >
          {addedAnimation ? (
            <>
              <Check size={16} /> Added to Bag
            </>
          ) : (
            <>
              <ShoppingBag size={16} /> Add to Bag
            </>
          )}
        </button>
      </div>
    </div>
  );
};
