import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, LogOut, Menu, X, ShieldCheck } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface NavbarProps {
  user: SupabaseUser | null;
  cartCount: number;
  wishlistCount: number;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onSignOut: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  cartCount,
  wishlistCount,
  activeCategory,
  onSelectCategory,
  onOpenCart,
  onOpenAuth,
  onSignOut,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: 'All Collections', value: 'All' },
    { name: 'Velvets', value: 'Velvets' },
    { name: 'Suit Sets', value: 'Suit Sets' },
    { name: 'Kurtas', value: 'Kurtas' },
    { name: 'Jewellery', value: 'Jewellery' },
    { name: 'Sale Upto 50%', value: 'Sale', highlight: true },
  ];

  const handleCategoryClick = (cat: string) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
  };

  return (
    <header className="lakshita-header">
      {/* Main Nav Bar */}
      <div className="header-inner">
        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <div className="brand-logo-area" onClick={() => handleCategoryClick('All')}>
          <h1 className="lakshita-logo">LAKSHITA</h1>
          <span className="logo-tagline">ETHNIC & INDO-WESTERN</span>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="header-search-bar">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search suit sets, kurtas, velvets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              ×
            </button>
          )}
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Mobile Search Toggle */}
          <button
            className="action-icon-btn mobile-search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* User Account / Login */}
          {user ? (
            <div className="user-logged-menu">
              <button className="user-profile-badge" onClick={onOpenAuth} title="View Account">
                <ShieldCheck size={16} className="verified-icon" />
                <span className="user-short-name">
                  {user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0]}
                </span>
              </button>
              <button onClick={onSignOut} className="header-logout-btn" title="Sign Out">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button className="action-icon-btn login-btn-header" onClick={onOpenAuth}>
              <User size={20} />
              <span className="login-label">Sign In</span>
            </button>
          )}

          {/* Wishlist */}
          <button className="action-icon-btn wishlist-btn" title="Wishlist">
            <Heart size={20} />
            {wishlistCount > 0 && <span className="badge-bubble">{wishlistCount}</span>}
          </button>

          {/* Cart Bag */}
          <button className="action-icon-btn cart-btn-header" onClick={onOpenCart} title="Cart Bag">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge-bubble">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Expandable Mobile Search */}
      {searchOpen && (
        <div className="mobile-search-dropdown">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search kurtas, velvets, suits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <button onClick={() => setSearchOpen(false)}>Close</button>
        </div>
      )}

      {/* Navigation Categories Row */}
      <nav className={`nav-categories-bar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-links-list">
          {navLinks.map((link) => (
            <li key={link.value}>
              <button
                className={`nav-link-btn ${activeCategory === link.value ? 'active' : ''} ${
                  link.highlight ? 'highlight-sale' : ''
                }`}
                onClick={() => handleCategoryClick(link.value)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

