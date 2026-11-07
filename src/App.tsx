import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { TrustStrip } from './components/TrustStrip';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductQuickView } from './components/ProductQuickView';
import { CorporateQuotationModal } from './components/CorporateQuotationModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { SearchModal } from './components/SearchModal';
import { TrophyProduct, CartItem } from './types/trophy';
import { TROPHY_PRODUCTS } from './data/trophyData';
import { TestimonialsCustomisationSection } from './components/TestimonialsCustomisationSection';
import { ProductPage } from './components/ProductPage';
import { CartPage } from './components/CartPage';
import { CollectionPage } from './components/CollectionPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-sample-01',
      product: TROPHY_PRODUCTS[0],
      quantity: 1,
      customization: {
        recipientName: 'Prajakta Samant',
        awardTitle: 'Excellence in Leadership 2026',
        organization: 'Trophy Mart Honors',
        plateFinish: 'gold',
        eventDate: 'November 2026'
      }
    }
  ]);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<TrophyProduct | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    // From a non-home page (e.g. product), go home first, then scroll to the catalog
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const catalogElem = document.getElementById('catalog');
      if (catalogElem) {
        catalogElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollToStudio = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    const studioElem = document.getElementById('studio');
    if (studioElem) {
      studioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCatalog = () => {
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: TrophyProduct, customization?: any) => {
    setCartItems((prev) => {
      // If customized, create a new distinct line item
      if (customization) {
        const newItem: CartItem = {
          id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          product,
          quantity: 1,
          customization
        };
        return [newItem, ...prev];
      }

      // If standard un-customized, increment existing if found
      const existingIdx = prev.findIndex((i) => i.product.id === product.id && !i.customization);
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + 1
        };
        return next;
      }

      return [
        {
          id: `item-${Date.now()}`,
          product,
          quantity: 1
        },
        ...prev
      ];
    });

    showToast(`Added "${product.name}" to your commemorative bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-[#FAF9F5] text-[#161C24] font-sans antialiased selection:bg-[#0E233E] selection:text-white relative">

      {/* Shared Navbar — shown on all pages */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        onOpenContact={() => setIsQuoteModalOpen(true)}
        onOpenCart={() => navigate('/cart')}
        cartCount={cartCount}
        onOpenAccount={() => showToast('Account portal coming soon')}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-36 right-4 sm:bottom-20 sm:right-6 z-50 bg-[#0E233E] text-white text-xs px-4 py-2.5 rounded shadow-xl border border-white/10 animate-in fade-in duration-200">
          {toastMessage}
        </div>
      )}

      {/* Floating WhatsApp button — global, all pages */}
      {/* <a
        href="https://wa.me/917980620672"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in-50 slide-in-from-bottom-4 duration-700"
      >
     
        <span aria-hidden="true" className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a> */}

      {/* ── Routes ── */}
      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <main className="flex-1 w-full max-w-full overflow-x-hidden">
                <Hero
                  onExploreCatalog={handleScrollToCatalog}
                  onOpenCustomizer={handleScrollToStudio}
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
                <CategoryShowcase onSelectCategory={handleSelectCategory} />
                <ProductCatalog
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  onQuickView={(product) => setQuickViewProduct(product)}
                  onAddToCart={(product) => handleAddToCart(product)}
                  onOpenCustomizerWithProduct={handleScrollToStudio}
                />
                <TestimonialsCustomisationSection
                  onOpenCustomizer={handleScrollToStudio}
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
                <TrustStrip />
                <FaqSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
              </main>
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

        {/* Product detail page */}
        <Route
          path="/product/:slug"
          element={
            <>
              <ProductPage />
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

        {/* Trophies collection page */}
        <Route
          path="/collection/trophies"
          element={
            <>
              <CollectionPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

        {/* Contact us page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

        {/* About us page */}
        <Route
          path="/about"
          element={
            <>
              <AboutPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

        {/* Commemorative bag page */}
        <Route
          path="/cart"
          element={
            <>
              <CartPage
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onCheckout={() => setIsCheckoutModalOpen(true)}
              />
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

      </Routes>

      {/* ── Shared Modals (rendered outside Routes so they persist across navigation) ── */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
        onSelectCategory={handleSelectCategory}
      />
      <ProductQuickView
        key={quickViewProduct?.id ?? 'none'}
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomizer={() => {
          setQuickViewProduct(null);
          handleScrollToStudio();
        }}
      />
      <CorporateQuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      <OrderSuccessModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

    </div>
  );
}
