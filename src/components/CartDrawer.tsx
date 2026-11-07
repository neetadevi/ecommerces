import React, { useState } from 'react';
import type { CartItem } from '../types/product';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Tag, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string | undefined, qty: number) => void;
  onRemoveItem: (productId: string, size: string | undefined) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount;
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(null);
    if (!couponCode.trim()) return;

    if (couponCode.toUpperCase() === 'LAKSHITA15' || couponCode.toUpperCase() === 'FESTIVE15') {
      setDiscountPercent(15);
      setCouponApplied(couponCode.toUpperCase());
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon code. Try "LAKSHITA15" for 15% OFF!');
    }
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} className="bag-icon" />
            <h3>Your Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</h3>
          </div>
          <button className="close-drawer-btn" onClick={onClose} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="free-shipping-progress-box">
          {subtotal >= freeShippingThreshold ? (
            <div className="free-shipping-unlocked">
              <CheckCircle size={16} />
              <span>Congratulations! You've unlocked <strong>FREE Express Shipping</strong>!</span>
            </div>
          ) : (
            <div className="free-shipping-needed">
              <span>
                Add <strong>₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')}</strong> more to get <strong>FREE Express Shipping</strong>!
              </span>
            </div>
          )}
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-scroll-area">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <ShoppingBag size={56} className="empty-bag-icon" />
              <h4>Your bag is currently empty</h4>
              <p>Explore our royal velvet collection & ethnic suit sets to add items.</p>
              <button className="continue-shopping-btn" onClick={onClose}>
                Start Shopping Now
              </button>
            </div>
          ) : (
            <div className="items-list">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="cart-item-row">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="cart-item-thumb"
                  />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.product.name}</h4>
                    <div className="cart-item-meta">
                      <span className="size-badge">Size: {item.size || 'M'}</span>
                      <span className="unit-price">₹{Number(item.product.price).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="cart-item-controls">
                      <div className="qty-selector">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.size, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-display">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.size, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="delete-item-btn"
                        onClick={() => onRemoveItem(item.product.id, item.size)}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Coupon Code Section */}
            <form onSubmit={handleApplyCoupon} className="coupon-code-form">
              <div className="coupon-input-wrapper">
                <Tag size={16} className="coupon-icon" />
                <input
                  type="text"
                  placeholder="Coupon code (Try LAKSHITA15)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button type="submit">Apply</button>
              </div>
              {couponApplied && (
                <div className="coupon-success-msg">
                  <CheckCircle size={14} /> Code <strong>{couponApplied}</strong> applied (15% OFF)!
                </div>
              )}
              {couponError && <div className="coupon-error-msg">{couponError}</div>}
            </form>

            {/* Bill Breakdown */}
            <div className="bill-summary">
              <div className="bill-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="bill-row discount-row">
                  <span>Special Discount (15%)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="bill-row">
                <span>Shipping</span>
                <span className="free-tag">FREE</span>
              </div>
              <div className="bill-row total-row">
                <strong>Grand Total</strong>
                <strong className="grand-price">₹{finalTotal.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="proceed-checkout-btn"
            >
              <span>PROCEED TO SECURE CHECKOUT</span>
              <ArrowRight size={18} />
            </button>

            <div className="secure-badge-note">
              <ShieldCheck size={16} />
              <span>100% Safe & Encrypted Checkout | Powered by Supabase</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
