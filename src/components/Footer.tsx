import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenCustomizer: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenCustomizer,
  onOpenQuoteModal
}) => {
  const navigate = useNavigate();
  const panIndiaHubs = [
    'Mumbai', 'New Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad',
    'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Lucknow', 'Chandigarh',
    'Indore', 'Bhopal', 'Vadodara', 'Surat', 'Nagpur', 'Kochi'
  ];

  const occasionLinks = [
    { label: 'Sports & Games', category: 'medals' },
    { label: 'Education', category: 'medals' },
    { label: 'Corporate Awards', category: 'medals' },
    { label: 'Cultural & Community', category: 'crystal' },

  ];

  return (
    <footer className="bg-[#F4F1EA] text-[#161C24] border-t border-[#E5E0D4]">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Identity & Mission */}
          <div className="lg:col-span-4 order-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://trophymart.co.in/wp-content/uploads/2024/07/TROPHY-MART-1-removebg-preview.png"
                alt="Trophy Mart Logo"
                className="h-14 sm:h-16 w-auto object-contain  p-1"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            
            </div>

            <p className="text-xs text-[#475569] leading-relaxed max-w-sm">
              India's foremost manufacturer and stockist of luxury optical crystal trophies, hand-cast 24k gold chalices, and bespoke corporate awards. Direct factory pricing with pan-India white-glove dispatch.
            </p>

            <div className="pt-2 text-xs space-y-2 text-[#334155]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5222A] shrink-0 mt-0.5" />
                <span>
                 100 A & B, Kabi Sukanta Sarani, Koley Biscuit Compound, Beliaghata, Kolkata-700085
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5222A] shrink-0" />
                <span>+91 79806 20672 / +91 9674163446</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5222A] shrink-0" />
                <span>trophymartindia@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Collections Navigation */}
          <div className="lg:col-span-3 order-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#0E233E] tracking-wide">
Shop by Type
            </h4>
            <ul className="text-xs space-y-2 text-[#475569]">
              <li>
                <button
                  onClick={() => onSelectCategory('crystal')}
                  className="hover:text-[#C5222A] transition-colors"
                >
         Trophies

                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sculpted-gold')}
                  className="hover:text-[#C5222A] transition-colors"
                >
                Medals & Badges

                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('plaques')}
                  className="hover:text-[#C5222A] transition-colors"
                >
               Plaques & Mementos

                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('medals')}
                  className="hover:text-[#C5222A] transition-colors"
                >
               Cups & Shields
                </button>
              </li>
             
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 order-2 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#0E233E] tracking-wide">
              Quick Links
            </h4>
            <ul className="text-xs space-y-2 text-[#475569]">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#C5222A] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-[#C5222A] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('all')}
                  className="hover:text-[#C5222A] transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#C5222A] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Shop by Occasion */}
          <div className="lg:col-span-3 order-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#0E233E] tracking-wide">
              Shop by Occasion
            </h4>
            <ul className="text-xs space-y-2 text-[#475569]">
              {occasionLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onSelectCategory(item.category)}
                    className="hover:text-[#C5222A] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Custom Commission Banner */}
          {/* <div className="lg:col-span-12 order-5 bg-white border border-[#E5E0D4] shadow-sm  p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h5 className="font-serif text-lg font-bold text-[#0E233E]">
                Commission Your Signature Trophy
              </h5>
              <p className="text-xs text-[#64748B] leading-relaxed max-w-2xl">
                Design a one-of-a-kind trophy capturing your organizationâ€™s prestige with our master craftspeople.
              </p>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="shrink-0 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C5222A] hover:bg-[#991B1B] text-white  transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div> */}

        </div>

        {/* Pan-India Express Delivery Hubs */}
        {/* <div className="mt-12 pt-8 border-t border-[#E5E0D4]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2">
            Pan-India Express Priority Dispatch Hubs (66+ Cities):
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#64748B]">
            {panIndiaHubs.map((city, idx) => (
              <span key={city} className="hover:text-[#0E233E] transition-colors">
                {city}
                {idx < panIndiaHubs.length - 1 && <span className="ml-3 text-[#CBD5E1]">Â·</span>}
              </span>
            ))}
          </div>
        </div> */}

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E0D4] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <div>
            © 2026 Trophy Mart. All rights reserved. Handcrafted with pride in Kolkata, India.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C5222A] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C5222A] transition-colors">Terms of Commission</a>
            <a href="#" className="hover:text-[#C5222A] transition-colors">GST Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

