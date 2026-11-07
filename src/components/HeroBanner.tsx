import React from 'react';
import { ArrowRight, Sparkles, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

interface HeroBannerProps {
  onShopNow: (category: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onShopNow }) => {
  return (
    <div className="hero-section">
      <div className="hero-banner-card">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tag">
            <Sparkles size={14} /> WINTER FESTIVE COLLECTION 2026
          </span>
          <h2 className="hero-title">Timeless Ethnic Elegance</h2>
          <p className="hero-desc">
            Discover handcrafted royal velvet suit sets, flared anarkalis, and signature embroidered kurtas designed for celebratory moments.
          </p>
          <div className="hero-cta-group">
            <button
              onClick={() => onShopNow('Velvets')}
              className="hero-btn primary-btn"
            >
              Shop Velvets <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onShopNow('Suit Sets')}
              className="hero-btn secondary-btn"
            >
              Explore Suit Sets
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="trust-badges-bar">
        <div className="trust-item">
          <Truck size={20} className="trust-icon" />
          <div>
            <strong>Free Express Shipping</strong>
            <span>On all prepaid orders nationwide</span>
          </div>
        </div>
        <div className="trust-item">
          <Sparkles size={20} className="trust-icon" />
          <div>
            <strong>Authentic Craftsmanship</strong>
            <span>Handcrafted zari & zardozi embroidery</span>
          </div>
        </div>
        <div className="trust-item">
          <RefreshCw size={20} className="trust-icon" />
          <div>
            <strong>Easy 7-Day Returns</strong>
            <span>Hassle-free exchange & size swaps</span>
          </div>
        </div>
        <div className="trust-item">
          <ShieldCheck size={20} className="trust-icon" />
          <div>
            <strong>Secure Checkout</strong>
            <span>Powered by Supabase & Encrypted Payments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
