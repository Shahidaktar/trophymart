import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, ShoppingBag, User, Home, Compass, Info, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

interface MenuItem {
  label: string;
  category: string;
  viewAll?: boolean;
}

interface MenuGroup {
  heading: string;
  items: MenuItem[];
}

interface NavbarProps {
  onOpenSearch: () => void;
  onSelectCategory: (category: string) => void;
  onOpenContact: () => void;
  onOpenCart?: () => void;
  cartCount?: number;
  onOpenAccount?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onSelectCategory,
  onOpenContact,
  onOpenCart,
  cartCount = 0,
  onOpenAccount,
}) => {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [activeMenuType, setActiveMenuType] = useState<'type' | 'occasion' | null>(null);
  const [activeSubgroupHeading, setActiveSubgroupHeading] = useState<string | null>(null);
  const [activeBottomNav, setActiveBottomNav] = useState<'home' | 'explore' | 'about' | 'contact'>('home');
  const [searchPhraseIndex, setSearchPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const searchPhrases = [
    'Search trophies...',
    'Search crystal awards...',
    'Search championship cups...',
    'Search bespoke plaques...',
    'Search sports medals...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setSearchPhraseIndex((prev) => (prev + 1) % searchPhrases.length);
        setIsFading(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [searchPhrases.length]);

  const typeRef = useRef<HTMLDivElement>(null);
  const occasionRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) {
        setIsTypeOpen(false);
      }
      if (occasionRef.current && !occasionRef.current.contains(e.target as Node)) {
        setIsOccasionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll & close on Escape while explore drawer or mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen && !isExploreOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setIsExploreOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, isExploreOpen]);

  const closeExploreDrawer = () => {
    setIsExploreOpen(false);
    setActiveMenuType(null);
    setActiveSubgroupHeading(null);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    closeExploreDrawer();
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('about') || document.getElementById('craftsmanship');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    closeExploreDrawer();
  };

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    setIsTypeOpen(false);
    setIsOccasionOpen(false);
    setMobileMenuOpen(false);
    closeExploreDrawer();
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categoryImages: Record<string, string> = {
    crystal: '/trophis/Haven-Star-1031-G-1-3-scaled-removebg-preview.png',
    'sculpted-gold': '/trophis/Zenith-Star-1022-AG-1-3-scaled-removebg-preview.png',
    plaques: '/trophis/Kite-Star-1011-L-4-scaled-removebg-preview.png',
    medals: '/trophis/Calvin-Star-1035-G-1-3-scaled-removebg-preview.png',
    bespoke: '/trophis/Fresco-Star-1007-L-1-1-scaled-removebg-preview.png',
    all: '/trophis/Haven-Star-1031-G-1-3-scaled-removebg-preview.png'
  };

  const occasionMegaMenu: MenuGroup[] = [
    {
      heading: 'Sports & Games',
      items: [
        { label: 'Cricket trophies', category: 'medals' },
        { label: 'Football trophies', category: 'medals' },
        { label: 'Golf trophies', category: 'medals' },
        { label: 'Kabaddi & wrestling', category: 'medals' },
        // { label: 'All sports trophies', category: 'medals', viewAll: true }
      ]
    },
    {
      heading: 'Education',
      items: [
        { label: 'School prize day', category: 'crystal' },
        { label: 'College & university', category: 'crystal' },
        { label: 'Academic excellence', category: 'crystal' },
        { label: 'Sports day', category: 'crystal' },
        // { label: 'All education awards', category: 'crystal', viewAll: true }
      ]
    },
    {
      heading: 'Corporate Awards',
      items: [
        { label: 'Employee of the month', category: 'plaques' },
        { label: 'Annual day awards', category: 'plaques' },
        { label: 'Client & partner gifts', category: 'plaques' },
        { label: 'Sales & performance', category: 'plaques' },
        // { label: 'All corporate awards', category: 'plaques', viewAll: true }
      ]
    },
    {
      heading: 'Cultural & Community',
      items: [
        { label: 'Dance & music', category: 'bespoke' },
        { label: 'Art competitions', category: 'bespoke' },
        { label: 'Associations & clubs', category: 'bespoke' },
        { label: 'Religious & social events', category: 'bespoke' },
        // { label: 'All cultural awards', category: 'bespoke', viewAll: true }
      ]
    }
  ];

  const typeMegaMenu: MenuGroup[] = [
    {
      heading: 'Trophies',
      items: [
        { label: 'Acrylic trophies', category: 'crystal' },
        { label: 'Crystal trophies', category: 'crystal' },
        { label: 'Crystal glass trophies', category: 'crystal' },
        { label: 'Fiber trophies', category: 'crystal' },
        { label: 'Resin trophies', category: 'crystal' },
        // { label: 'View all trophies', category: 'all', viewAll: true }
      ]
    },
    {
      heading: 'Medals & Badges',
      items: [
        { label: 'Sports medals', category: 'medals' },
        { label: 'Academic medals', category: 'medals' },
        { label: 'Corporate medals', category: 'medals' },
        { label: 'Custom medals', category: 'medals' },
        { label: 'Lapel badges & pins', category: 'medals' },
        // { label: 'View all medals', category: 'medals', viewAll: true }
      ]
    },
    {
      heading: 'Plaques & Mementos',
      items: [
        { label: 'Wooden plaques', category: 'plaques' },
        { label: 'Acrylic plaques', category: 'plaques' },
        { label: 'Glass plaques', category: 'plaques' },
        { label: 'Mementos', category: 'plaques' },
        { label: 'Certificate Frames', category: 'plaques' },
        // { label: 'View all plaques', category: 'plaques', viewAll: true }
      ]
    },
    {
      heading: 'Cups & Shields',
      items: [
        { label: 'Trophy cups', category: 'sculpted-gold' },
        { label: 'Shields', category: 'sculpted-gold' },
        { label: 'Badges & pins', category: 'medals' },
        // { label: 'View all cups', category: 'sculpted-gold', viewAll: true }
      ]
    }
  ];

  return (
    <>
      <header
        className="relative z-40 w-full py-2.5 sm:py-4 bg-white/75 backdrop-blur-xl border-b border-[#E5E0D4]/70 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2.5 sm:gap-3">
          
          {/* Desktop Left Side: Logo */}
          <a
            href="#"
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            <img
              src="https://trophymart.co.in/wp-content/uploads/2024/07/TROPHY-MART-1-removebg-preview.png"
              alt="Trophy Mart Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </a>

          {/* Mobile Integrated Search Pill: Logo + Text + Search Icon inside one border box */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Trophies"
            className="md:hidden flex-1 flex items-center justify-between h-10 px-3 bg-white border border-[#D5CFBF] rounded-md shadow-xs active:bg-[#FAF9F5] transition-all text-left"
          >
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <img
                src="https://trophymart.co.in/wp-content/uploads/2024/07/TROPHY-MART-1-removebg-preview.png"
                alt="Trophy Mart"
                className="h-5 w-auto object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="relative flex-1 overflow-hidden h-5 flex items-center">
                <span
                  key={searchPhraseIndex}
                  className={`text-[12px] text-[#64748B] whitespace-nowrap select-none transition-all duration-300 transform ${
                    isFading ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  {searchPhrases[searchPhraseIndex]}
                </span>
              </div>
            </div>
            <Search className="w-4 h-4 text-[#475569] shrink-0 ml-2" />
          </button>

        {/* Center: Menus (Home, Shop By Type, Shop By Occasion, About, Contact Us) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium tracking-wide text-[#0E233E]">
          
          {/* Home */}
          <a
            href="#"
            onClick={scrollToTop}
            className="hover:text-[#C5222A] transition-colors hover:underline underline-offset-8 decoration-[#C5222A] whitespace-nowrap"
          >
            Home
          </a>

          {/* Shop By Type Dropdown */}
          <div
            className="relative"
            ref={typeRef}
            onMouseEnter={() => {
              setIsTypeOpen(true);
              setIsOccasionOpen(false);
            }}
            onMouseLeave={() => setIsTypeOpen(false)}
          >
            <button
              onClick={() => {
                setIsTypeOpen(!isTypeOpen);
                setIsOccasionOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-[#C5222A] transition-colors focus:outline-none whitespace-nowrap"
            >
              <span>Shop By Type</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
                  isTypeOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isTypeOpen && (
              <div className="fixed top-[72px] sm:top-[80px] left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <div className="max-w-7xl mx-auto border border-white/10 bg-[#070D18]/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                  <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-7 lg:gap-x-8 lg:gap-y-8 p-6 sm:p-8 lg:p-9">
                    {typeMegaMenu.map((group) => (
                      <div key={group.heading} className="lg:col-span-2">
                        <h3 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                          {group.heading}
                        </h3>
                        <ul className="mt-2.5 lg:mt-3 space-y-1.5 lg:space-y-2">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <button
                                onClick={() => handleCategoryClick(item.category)}
                                className={`w-full text-left text-xs lg:text-[13px] transition-colors ${
                                  item.viewAll
                                    ? 'font-semibold text-white hover:text-[#DFB967]'
                                    : 'text-white/65 hover:text-white'
                                }`}
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Side Image CTA */}
                    <div className="col-span-2 lg:col-span-4 relative overflow-hidden border border-white/10 min-h-[200px] lg:min-h-[280px]">
                      <img
                        src="/banner3.png"
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover object-right opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-[#070D18]/10" />

                      <div className="relative h-full flex flex-col justify-end p-5 lg:p-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFB967]">
                          Bespoke Atelier
                        </span>
                        <h4 className="font-serif text-xl lg:text-2xl font-bold text-white mt-1 leading-snug">
                          Can’t find your design?
                        </h4>
                        <p className="text-[11px] lg:text-xs text-white/60 mt-1 leading-relaxed">
                          Commission a one-of-a-kind trophy with our master
                          craftspeople.
                        </p>
                        <button
                          onClick={() => {
                            setIsTypeOpen(false);
                            onOpenContact();
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 self-start  bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#070D18] transition-colors hover:bg-[#DFB967]"
                        >
                          <span>Request a Quote</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shop By Occasion Dropdown */}
          <div
            className="relative"
            ref={occasionRef}
            onMouseEnter={() => {
              setIsOccasionOpen(true);
              setIsTypeOpen(false);
            }}
            onMouseLeave={() => setIsOccasionOpen(false)}
          >
            <button
              onClick={() => {
                setIsOccasionOpen(!isOccasionOpen);
                setIsTypeOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-[#C5222A] transition-colors focus:outline-none whitespace-nowrap"
            >
              <span>Shop By Occasion</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
                  isOccasionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOccasionOpen && (
              <div className="fixed top-[72px] sm:top-[80px] left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <div className="max-w-7xl mx-auto border border-white/10 bg-[#070D18]/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                  <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-7 lg:gap-x-8 lg:gap-y-8 p-6 sm:p-8 lg:p-9">
                    {occasionMegaMenu.map((group) => (
                      <div key={group.heading} className="lg:col-span-2">
                        <h3 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                          {group.heading}
                        </h3>
                        <ul className="mt-2.5 lg:mt-3 space-y-1.5 lg:space-y-2">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <button
                                onClick={() => handleCategoryClick(item.category)}
                                className={`w-full text-left text-xs lg:text-[13px] transition-colors ${
                                  item.viewAll
                                    ? 'font-semibold text-white hover:text-[#DFB967]'
                                    : 'text-white/65 hover:text-white'
                                }`}
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Side Image CTA */}
                    <div className="col-span-2 lg:col-span-4 relative overflow-hidden  border border-white/10 min-h-[200px] lg:min-h-[280px]">
                      <img
                        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/trohpy-2.jpg"
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-[#070D18]/10" />

                      <div className="relative h-full flex flex-col justify-end p-5 lg:p-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFB967]">
                          Occasion Curation
                        </span>
                        <h4 className="font-serif text-xl lg:text-2xl font-bold text-white mt-1 leading-snug">
                          Planning an awards night?
                        </h4>
                        <p className="text-[11px] lg:text-xs text-white/60 mt-1 leading-relaxed">
                          Tell us the occasion and we’ll curate the perfect
                          awards.
                        </p>
                        <button
                          onClick={() => {
                            setIsOccasionOpen(false);
                            onOpenContact();
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 self-start  bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#070D18] transition-colors hover:bg-[#DFB967]"
                        >
                          <span>Plan My Awards</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <a
            href="#craftsmanship"
            onClick={scrollToAbout}
            className="hover:text-[#C5222A] transition-colors hover:underline underline-offset-8 decoration-[#C5222A] whitespace-nowrap"
          >
            About
          </a>

          {/* Contact Us */}
          <button
            onClick={onOpenContact}
            className="hover:text-[#C5222A] transition-colors hover:underline underline-offset-8 decoration-[#C5222A] whitespace-nowrap focus:outline-none"
          >
            Contact Us
          </button>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 justify-end">
          {/* Desktop Animated Search Box */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Trophies"
            className="group hidden md:flex items-center h-10 w-56 px-3.5 bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E0D4] hover:border-[#C5222A]/40 rounded-full transition-all duration-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5222A]/20"
          >
            <Search className="w-4 h-4 text-[#64748B] group-hover:text-[#C5222A] shrink-0 transition-colors" />
            <div className="relative ml-2 flex-1 overflow-hidden h-5 flex items-center">
              <span
                key={searchPhraseIndex}
                className={`text-xs text-[#64748B] group-hover:text-[#0E233E] whitespace-nowrap select-none transition-all duration-300 transform ${
                  isFading ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {searchPhrases[searchPhraseIndex]}
              </span>
            </div>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Cart"
            className="relative p-2 sm:p-2.5 text-[#0E233E] hover:text-[#C5222A] hover:bg-black/5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0E233E]/20"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-[#C5222A] text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums leading-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account Button (Last icon, visible on both mobile and desktop) */}
          <button
            onClick={onOpenAccount}
            aria-label="My Account"
            className="p-2 sm:p-2.5 text-[#0E233E] hover:text-[#C5222A] hover:bg-black/5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#0E233E]/20"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Mobile Menu — Full Screen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0E233E] text-white overflow-y-auto animate-in fade-in duration-200">
          {/* Overlay Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-[#E5E0D4]">
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center shrink-0"
            >
              <img
                src="https://trophymart.co.in/wp-content/uploads/2024/07/TROPHY-MART-1-removebg-preview.png"
                alt="Trophy Mart Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="p-2 rounded-lg bg-[#0E233E]/5 text-[#0E233E] hover:bg-[#0E233E]/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <nav className="px-6 py-6 pb-16">
            <button
              onClick={scrollToTop}
              className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
            >
              Home
            </button>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Shop By Type
              </span>
              <div className="mt-4 space-y-5">
                {typeMegaMenu.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                      {group.heading}
                    </h3>
                    <div className="mt-1.5 space-y-0.5">
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleCategoryClick(item.category)}
                          className={`block w-full text-left py-1.5 text-sm transition-colors ${
                            item.viewAll
                              ? 'font-semibold text-white hover:text-[#DFB967]'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Shop By Occasion
              </span>
              <div className="mt-4 space-y-5">
                {occasionMegaMenu.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                      {group.heading}
                    </h3>
                    <div className="mt-1.5 space-y-0.5">
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleCategoryClick(item.category)}
                          className={`block w-full text-left py-1.5 text-sm transition-colors ${
                            item.viewAll
                              ? 'font-semibold text-white hover:text-[#DFB967]'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={scrollToAbout}
                className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
              >
                Contact Us
              </button>
              {onOpenCart && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="flex items-center justify-between w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
                >
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="bg-[#C5222A] text-white text-xs px-2.5 py-0.5 rounded-full font-sans font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
              )}
              {onOpenAccount && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAccount();
                  }}
                  className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
                >
                  My Account
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>

      {/* Mobile Multi-Level Explore Drawer */}
      {isExploreOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div
            onClick={closeExploreDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
          />

          {/* Drawer Container (Slides from left) */}
          <div className="relative z-10 w-[84%] max-w-sm h-full bg-white shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-left duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAE6DF] bg-[#FAF9F5]">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#C5222A]" />
                <h3 className="font-serif text-lg font-bold text-[#0E233E]">
                  Explore Catalog
                </h3>
              </div>
              <button
                onClick={closeExploreDrawer}
                aria-label="Close Explore Menu"
                className="p-1.5 text-[#0E233E] hover:bg-[#EAE6DF] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sliding Multi-Panel Window */}
            <div className="relative flex-1 overflow-hidden">
              {/* Level 1 Panel: Main Two Mega Menus */}
              <div
                className={`absolute inset-0 flex flex-col overflow-y-auto p-4 transition-transform duration-300 ease-in-out ${
                  activeMenuType !== null ? '-translate-x-full' : 'translate-x-0'
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C827A] px-2 mb-2">
                  Browse by Collection
                </p>

                <div className="space-y-2">
                  {/* Option 1: Shop By Type */}
                  <button
                    onClick={() => {
                      setActiveMenuType('type');
                      setActiveSubgroupHeading(null);
                    }}
                    className="w-full flex items-center justify-between p-4 bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E0D4] rounded-lg transition-all text-left group"
                  >
                    <div>
                      <span className="block font-serif text-base font-bold text-[#0E233E] group-hover:text-[#C5222A] transition-colors">
                        Shop By Type
                      </span>
                      <span className="block text-xs text-[#64748B] mt-0.5">
                        Trophies, Medals, Plaques, Cups & Shields
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#0E233E] group-hover:text-[#C5222A] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>

                  {/* Option 2: Shop By Occasion */}
                  <button
                    onClick={() => {
                      setActiveMenuType('occasion');
                      setActiveSubgroupHeading(null);
                    }}
                    className="w-full flex items-center justify-between p-4 bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E0D4] rounded-lg transition-all text-left group"
                  >
                    <div>
                      <span className="block font-serif text-base font-bold text-[#0E233E] group-hover:text-[#C5222A] transition-colors">
                        Shop By Occasion
                      </span>
                      <span className="block text-xs text-[#64748B] mt-0.5">
                        Sports, Education, Corporate, Cultural Awards
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#0E233E] group-hover:text-[#C5222A] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                </div>

                {/* View All Trophies Shortcut */}
                {/* <div className="mt-6 pt-5 border-t border-[#EAE6DF]">
                  <button
                    onClick={() => handleCategoryClick('all')}
                    className="w-full flex items-center justify-center gap-2 p-3 bg-[#0E233E] hover:bg-[#1A365D] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                  >
                    <span>View All Trophies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div> */}
              </div>

              {/* Level 2 Panel: Sub-groups (e.g. Trophies, Medals, Plaques, Cups OR Sports, Education, Corporate) */}
              <div
                className={`absolute inset-0 flex flex-col overflow-y-auto p-4 transition-transform duration-300 ease-in-out bg-white ${
                  activeMenuType === null
                    ? 'translate-x-full'
                    : activeSubgroupHeading !== null
                    ? '-translate-x-full'
                    : 'translate-x-0'
                }`}
              >
                {/* Back to Level 1 */}
                <button
                  onClick={() => {
                    setActiveMenuType(null);
                    setActiveSubgroupHeading(null);
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#C5222A] hover:underline mb-3 py-1 self-start"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Main Menu</span>
                </button>

                <h4 className="font-serif text-lg font-bold text-[#0E233E] border-b border-[#EAE6DF] pb-2 mb-3">
                  {activeMenuType === 'type' ? 'Shop By Type' : 'Shop By Occasion'}
                </h4>

                <div className="space-y-2">
                  {(activeMenuType === 'type' ? typeMegaMenu : occasionMegaMenu).map(
                    (group) => (
                      <button
                        key={group.heading}
                        onClick={() => setActiveSubgroupHeading(group.heading)}
                        className="w-full flex items-center justify-between p-3.5 bg-[#FAF9F5] hover:bg-[#F3F0E8] border border-[#E5E0D4] rounded-md transition-all text-left group"
                      >
                        <span className="font-serif text-sm font-semibold text-[#0E233E] group-hover:text-[#C5222A] transition-colors">
                          {group.heading}
                        </span>
                        <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#C5222A] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Level 3 Panel: Items under selected heading as cards (Image with text) */}
              <div
                className={`absolute inset-0 flex flex-col overflow-y-auto p-4 transition-transform duration-300 ease-in-out bg-white ${
                  activeSubgroupHeading !== null ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                {/* Back to Level 2 */}
                <button
                  onClick={() => setActiveSubgroupHeading(null)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#C5222A] hover:underline mb-3 py-1 self-start"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>
                    Back to {activeMenuType === 'type' ? 'Types' : 'Occasions'}
                  </span>
                </button>

                <h4 className="font-serif text-lg font-bold text-[#0E233E] border-b border-[#EAE6DF] pb-2 mb-3">
                  {activeSubgroupHeading}
                </h4>

                {/* 2-column Grid of Cards (Image with Text) */}
                <div className="grid grid-cols-2 gap-2.5 pb-6">
                  {(
                    (activeMenuType === 'type' ? typeMegaMenu : occasionMegaMenu).find(
                      (g) => g.heading === activeSubgroupHeading
                    )?.items || []
                  ).map((item) => {
                    const imgSrc = categoryImages[item.category] || categoryImages.all;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleCategoryClick(item.category)}
                        className={`group relative p-2.5 rounded-lg border text-left flex flex-col items-center justify-between transition-all duration-200 ${
                          item.viewAll
                            ? 'col-span-2 flex-row py-3 px-4 bg-[#0E233E] text-white border-[#0E233E] hover:bg-[#1A365D]'
                            : 'bg-[#FAF9F5] border-[#E5E0D4] hover:border-[#C5222A]/50 hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        {item.viewAll ? (
                          <>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <img
                                  src={imgSrc}
                                  alt=""
                                  className="w-7 h-7 object-contain drop-shadow"
                                />
                              </div>
                              <span className="font-serif text-xs font-bold uppercase tracking-wider">
                                {item.label}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        ) : (
                          <>
                            {/* Product silhouette badge */}
                            <div className="w-full aspect-square rounded-md bg-[#F4F1EA] flex items-center justify-center p-2 mb-2 group-hover:bg-[#FAF9F5] transition-colors overflow-hidden">
                              <img
                                src={imgSrc}
                                alt={item.label}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                                loading="lazy"
                              />
                            </div>
                            {/* Card title */}
                            <span className="text-[11px] font-medium text-[#0E233E] group-hover:text-[#C5222A] text-center line-clamp-2 leading-snug w-full">
                              {item.label}
                            </span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar (Home, Explore, About, Contact Us) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-lg border-t border-[#EAE6DF] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-2"
      >
        <div className="grid grid-cols-4 items-center">
          {/* Home (Selected by default) */}
          <button
            onClick={(e) => {
              setActiveBottomNav('home');
              scrollToTop(e);
            }}
            className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors focus:outline-none ${
              activeBottomNav === 'home' && !isExploreOpen
                ? 'text-[#C5222A] font-bold'
                : 'text-[#0E233E] hover:text-[#C5222A]'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">Home</span>
          </button>

          {/* Explore */}
          <button
            onClick={() => {
              setActiveBottomNav('explore');
              setIsExploreOpen(true);
              setActiveMenuType(null);
              setActiveSubgroupHeading(null);
            }}
            className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors focus:outline-none ${
              isExploreOpen || activeBottomNav === 'explore'
                ? 'text-[#C5222A] font-bold'
                : 'text-[#0E233E] hover:text-[#C5222A]'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">Explore</span>
          </button>

          {/* About */}
          <button
            onClick={(e) => {
              setActiveBottomNav('about');
              scrollToAbout(e);
            }}
            className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors focus:outline-none ${
              activeBottomNav === 'about' && !isExploreOpen
                ? 'text-[#C5222A] font-bold'
                : 'text-[#0E233E] hover:text-[#C5222A]'
            }`}
          >
            <Info className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">About</span>
          </button>

          {/* Contact Us */}
          <button
            onClick={() => {
              setActiveBottomNav('contact');
              onOpenContact();
            }}
            className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors focus:outline-none ${
              activeBottomNav === 'contact' && !isExploreOpen
                ? 'text-[#C5222A] font-bold'
                : 'text-[#0E233E] hover:text-[#C5222A]'
            }`}
          >
            <Mail className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">Contact Us</span>
          </button>
        </div>
      </nav>
    </>
  );
};
