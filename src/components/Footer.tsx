import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Phone, MapPin, Heart, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="lakshita-footer">
      {/* Newsletter Bar */}
      <div className="newsletter-banner">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h3>Join the Lakshita Family</h3>
            <p>Subscribe to receive exclusive access to new arrivals, festive sales & ₹500 off your first order.</p>
          </div>
          {subscribed ? (
            <div className="subscribed-success">
              <CheckCircle size={20} />
              <span>Thank you for subscribing! Check your email for your welcome discount code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-box">
                <Mail size={18} className="mail-icon" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <span>Subscribe</span> <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main-columns">
        <div className="footer-col brand-col">
          <h2 className="footer-brand-title">LAKSHITA</h2>
          <p className="brand-statement">
            India's premier ethnic wear brand offering timeless elegance with flattering fits,
            premium fabrics, and exquisite hand embroidery in size-inclusive suit sets, co-ords, and kurtas.
          </p>
          <div className="contact-info">
            <div className="contact-line">
              <Phone size={16} />
              <span>+91 1800-123-4567 (Mon-Sat, 10am-7pm)</span>
            </div>
            <div className="contact-line">
              <MapPin size={16} />
              <span>Flagship Stores Across Delhi NCR, Mumbai, Bangalore & Lucknow</span>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>SHOP COLLECTIONS</h4>
          <ul>
            <li><a href="#velvets">Royal Velvet Sets</a></li>
            <li><a href="#suits">Embroidered Suit Sets</a></li>
            <li><a href="#kurtas">Anarkali & Straight Kurtas</a></li>
            <li><a href="#winter">Winter Festive Wear</a></li>
            <li><a href="#jewellery">Heritage Jewellery</a></li>
            <li><a href="#sale">Festive Sale - Upto 50% Off</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li><a href="#track">Track Your Order</a></li>
            <li><a href="#returns">7-Day Easy Returns & Exchange</a></li>
            <li><a href="#shipping">Shipping & Delivery Policy</a></li>
            <li><a href="#sizes">Size Guide & Fit Chart</a></li>
            <li><a href="#stores">Find a Store Near You</a></li>
            <li><a href="#contact">Contact Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>WHY CHOOSE US</h4>
          <div className="why-us-list">
            <div className="why-item">
              <ShieldCheck size={18} className="gold-icon" />
              <span>100% Genuine Handcrafted Fabrics</span>
            </div>
            <div className="why-item">
              <Heart size={18} className="gold-icon" />
              <span>Inclusive Sizing from XS to 4XL</span>
            </div>
            <div className="why-item">
              <ShieldCheck size={18} className="gold-icon" />
              <span>Safe Payments via UPI, Cards, COD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom-bar">
        <p>© 2026 Lakshita. All Rights Reserved. Built with Supabase & React.</p>
        <div className="payment-icons-strip">
          <span className="pay-tag">UPI</span>
          <span className="pay-tag">Visa</span>
          <span className="pay-tag">MasterCard</span>
          <span className="pay-tag">RuPay</span>
          <span className="pay-tag">COD Available</span>
        </div>
      </div>
    </footer>
  );
};

