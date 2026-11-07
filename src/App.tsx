import { useState, useEffect, useMemo } from 'react';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import type { Product, CartItem } from './types/product';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import { Filter, SlidersHorizontal, CheckCircle2, X } from 'lucide-react';
import './App.css';

export default function App() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Cart & Wishlist state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lakshita_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lakshita_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);

  // Sync cart & wishlist with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('lakshita_cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('lakshita_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  // Auth session listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch products from Supabase
  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          // Fallback initial products if table is empty
          setProducts(defaultProducts);
        }
      } catch (err) {
        console.warn('Using local catalog fallback:', err);
        setProducts(defaultProducts);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (activeCategory === 'All') return true;
        if (activeCategory === 'Sale') return true; // All items qualify or have discount
        return p.category.toLowerCase() === activeCategory.toLowerCase();
      })
      .filter((p) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return Number(a.price) - Number(b.price);
        if (sortBy === 'price-high') return Number(b.price) - Number(a.price);
        if (sortBy === 'rating') return Number(b.rating) - Number(a.rating);
        return 0;
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  // Cart operations
  const handleAddToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, size }];
    });
  };

  const handleUpdateQuantity = (productId: string, size: string | undefined, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, size: string | undefined) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleCheckout = () => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    setIsCartOpen(false);
    setOrderSuccessModal(true);
    setCart([]);
  };

  const cartCount = cart.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="store-app-container">
      {/* Top 4-Color Category Bar + Sale Timer */}
      <AnnouncementBar onCategorySelect={(cat) => setActiveCategory(cat)} />

      {/* Main Luxury Navigation */}
      <Navbar
        user={user}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => {
          if (user) setShowDashboard(true);
          else setIsAuthOpen(true);
        }}
        onSignOut={async () => {
          await supabase.auth.signOut();
          setUser(null);
          setShowDashboard(false);
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Banner Showcase */}
      <HeroBanner onShopNow={(cat) => setActiveCategory(cat)} />

      {/* Main Store Catalog Section */}
      <main className="catalog-main-wrapper" id="MainContent">
        <div className="catalog-header-bar">
          <div className="category-title-wrap">
            <h2 className="catalog-main-title">
              {activeCategory === 'All'
                ? 'All Festive Collections'
                : activeCategory === 'Sale'
                ? 'Festive Sale (Upto 50% Off)'
                : `${activeCategory} Collection`}
            </h2>
            <span className="products-count-badge">
              Showing {filteredProducts.length} handcrafted styles
            </span>
          </div>

          {/* Sort & Filter Controls */}
          <div className="sort-filter-actions">
            <div className="sort-dropdown-box">
              <SlidersHorizontal size={14} />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured Styles</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Fast Filters */}
        <div className="quick-category-pills">
          {['All', 'Velvets', 'Suit Sets', 'Kurtas', 'Jewellery', 'Sale'].map((cat) => (
            <button
              key={cat}
              className={`pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="products-loading-skeleton">
            <div className="spinner"></div>
            <p>Loading royal ethnic collections from Supabase...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="no-products-found">
            <Filter size={40} className="empty-icon" />
            <h3>No products found for "{searchQuery}"</h3>
            <p>Try clearing your search query or choosing another category.</p>
            <button
              className="reset-filter-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
            >
              View All Collections
            </button>
          </div>
        ) : (
          <div className="products-responsive-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Cart Drawer Slide-out */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Auth Modal (Sign In / Sign Up via Supabase) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={() => {
          setIsAuthOpen(false);
        }}
      />

      {/* User Dashboard Overlay Modal */}
      {showDashboard && user && (
        <div className="dashboard-overlay-modal" onClick={() => setShowDashboard(false)}>
          <div className="dashboard-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="dashboard-modal-close" onClick={() => setShowDashboard(false)}>
              <X size={22} />
            </button>
            <Dashboard
              user={user}
              onSignOut={() => {
                setUser(null);
                setShowDashboard(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Order Success Modal */}
      {orderSuccessModal && (
        <div className="order-success-overlay" onClick={() => setOrderSuccessModal(false)}>
          <div className="order-success-card" onClick={(e) => e.stopPropagation()}>
            <CheckCircle2 size={56} className="success-check-icon" />
            <h2>Order Placed Successfully! 🎉</h2>
            <p>
              Thank you for shopping with Lakshita! Your order confirmation has been registered.
              Our concierge team will dispatch your royal ethnic outfit via Express Courier shortly.
            </p>
            <div className="order-meta-box">
              <span>Order Number: <strong>#LK-{Math.floor(100000 + Math.random() * 900000)}</strong></span>
              <span>Estimated Delivery: <strong>3-4 Business Days</strong></span>
            </div>
            <button className="continue-shop-modal-btn" onClick={() => setOrderSuccessModal(false)}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Fallback dataset matching Lakshita
const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Varnika Royal Purple Velvet Kurta Set',
    description: 'Exquisite royal purple velvet kurta set with intricate zardozi embroidery and matching scalloped dupatta.',
    price: 4999,
    original_price: 7999,
    category: 'Velvets',
    image_url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    stock: 25,
  },
  {
    id: '2',
    name: 'Shreya Red Embroidered Velvet Suit Set',
    description: 'Classic deep red embroidered velvet suit set with golden zari detailing, ideal for weddings and festivities.',
    price: 5499,
    original_price: 8499,
    category: 'Velvets',
    image_url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    stock: 30,
  },
  {
    id: '3',
    name: 'Shreya Teal Blue Velvet Suit Set',
    description: 'Regal teal blue velvet suit set with delicate thread work and silk blend organza dupatta.',
    price: 5299,
    original_price: 7999,
    category: 'Velvets',
    image_url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80',
    rating: 4.7,
    stock: 18,
  },
  {
    id: '4',
    name: 'Pranika Black Pearl Anarkali Suit Set',
    description: 'Stunning black flared anarkali suit set with lustrous pearl embellishments and churidar pants.',
    price: 6299,
    original_price: 9499,
    category: 'Suit Sets',
    image_url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80',
    rating: 5.0,
    stock: 22,
  },
  {
    id: '5',
    name: 'Misha Wine Maroon Anarkali Kurta Set',
    description: 'Floor-length flared wine maroon anarkali with fine resham embroidery and gota patti borders.',
    price: 5899,
    original_price: 8999,
    category: 'Suit Sets',
    image_url: 'https://images.unsplash.com/photo-1610030469668-932d04a60b94?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    stock: 20,
  },
  {
    id: '6',
    name: 'Devika Crimson Red Embroidered Kurta',
    description: 'Straight-fit crimson red embroidered kurta with subtle sequin accents and side slits.',
    price: 2199,
    original_price: 3499,
    category: 'Kurtas',
    image_url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    rating: 4.5,
    stock: 50,
  },
  {
    id: '7',
    name: 'Emerald Green Vanya Multilayer Necklace',
    description: 'Artisan hand-strung multilayer emerald green bead necklace with gold-plated statement pendant.',
    price: 1499,
    original_price: 2499,
    category: 'Jewellery',
    image_url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
    rating: 4.8,
    stock: 45,
  },
  {
    id: '8',
    name: 'Gold Esha CZ Statement Choker',
    description: 'Traditional Indian gold-finish choker embedded with sparkling cubic zirconia crystals.',
    price: 1899,
    original_price: 2999,
    category: 'Jewellery',
    image_url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
    rating: 4.9,
    stock: 28,
  },
];
