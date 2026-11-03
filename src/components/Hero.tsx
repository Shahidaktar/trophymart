import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerSlide {
  id: string;
  /** Desktop banner image URL */
  image: string;
  /** Mobile banner image URL (shown on screens ≤ 640px) */
  mobileImage: string;
  alt: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'slide-1',
    image:
      'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/aboutweb2.jpeg',
    mobileImage:
      'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/aboutmobile2.jpeg',
    alt: 'Timeless Elegance Trophy Showcase',
  },
  {
    id: 'slide-2',
    image:
      'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/a/trophy_mart_banner_1902x827%20(1).png',
    mobileImage:
      'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/so%20make%20it%20for%20mobile%20screen%20size%20,%20dimensions%20is%20962%20x%201635.png',
    alt: 'Championship Trophy Lights',
  },
  {
    id: 'slide-3',
    image:
      '/Celebrateweb.jpeg',
    mobileImage:
      'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/tr2M.png',
    alt: 'Championship Trophy Lights',
  },
   {
    id: 'slide-4',
    image:
      'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/a/WOODEN%20MEMENTO%20SERIES%20web%20(1).png',
    mobileImage:
      'https://ddbmiixykqommytdhyny.supabase.co/storage/v1/object/sign/Trophy/WOODEN%20MEMENTO%20SERIES%20mobile.png?token=eyJraWQiOiI3ZjkzNTk5ZS1mNGQ2LTQxMjYtYjkyNi0yZjVmMGE4NGM3MTQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJUcm9waHkvV09PREVOIE1FTUVOVE8gU0VSSUVTIG1vYmlsZS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkzNjg1NzgzLCJleHAiOjE4NTY3NTc3ODN9.Jasnyb9wyZQq8AFr_N3xqVPATeeFQqnI_2hqp5PNJZZGCs5kTV_YFiS5XGvk_O1biAwHF_W_06q3dE0tBIBT7A',
    alt: 'Championship Trophy Lights',
  },
  {
    id: 'slide-5',
    image:
      'https://ddbmiixykqommytdhyny.supabase.co/storage/v1/object/sign/Trophy/MEDALS%20AND%20BADGES%20web.png?token=eyJraWQiOiI3ZjkzNTk5ZS1mNGQ2LTQxMjYtYjkyNi0yZjVmMGE4NGM3MTQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJUcm9waHkvTUVEQUxTIEFORCBCQURHRVMgd2ViLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTM2ODU4MjAsImV4cCI6MTg1Njc1NzgyMH0.4ZI8CdS0tXAmXV_ZsY7xaaqY8QB4UCKIpKpHVNXDhrRCvGcue2wG_IjHyg9LpMn2nkSdqnGO_XArl78UOAvQDQ',
    mobileImage:
      'https://ddbmiixykqommytdhyny.supabase.co/storage/v1/object/sign/Trophy/MEDALS%20AND%20BADGES%20mobile.png?token=eyJraWQiOiI3ZjkzNTk5ZS1mNGQ2LTQxMjYtYjkyNi0yZjVmMGE4NGM3MTQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJUcm9waHkvTUVEQUxTIEFORCBCQURHRVMgbW9iaWxlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTM2ODU4NTAsImV4cCI6MTg1Njc1Nzg1MH0.OUsVXDUtow1d8fHnFzGY4GDI8Su2u5JAnBN_EofIbVa9ph5eghaaxi4q-qWohLcdlUS_0wkWDLkZy8uZYoA2mg',
    alt: 'Championship Trophy Lights',
  },
 
  {
    id: 'slide-6',
    image:
      'https://ddbmiixykqommytdhyny.supabase.co/storage/v1/object/sign/Trophy/BULK%20ORDER%20web.png?token=eyJraWQiOiI3ZjkzNTk5ZS1mNGQ2LTQxMjYtYjkyNi0yZjVmMGE4NGM3MTQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJUcm9waHkvQlVMSyBPUkRFUiB3ZWIucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzY4NTg4NCwiZXhwIjoxODU2NzU3ODg0fQ.0cZff1Un_MC1bdehrERr3fb3_o-mBzLzWtvziIogGOLev2QAxHypsZkmExknP3Ht2_cC26lMEQrqfHTKBMrN5Q',
    mobileImage:
      'https://ddbmiixykqommytdhyny.supabase.co/storage/v1/object/sign/Trophy/BULK%20ORDER%20mobile.png?token=eyJraWQiOiI3ZjkzNTk5ZS1mNGQ2LTQxMjYtYjkyNi0yZjVmMGE4NGM3MTQiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJUcm9waHkvQlVMSyBPUkRFUiBtb2JpbGUucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MzY4NTk0OCwiZXhwIjoxODU2NzU3OTQ4fQ.n13QsnHci1IsLS8qCwm9WAWiN_2NBOIpjTTOb2D4jftFgcSLO_iE_QVOxcgWKpehJq_OAckvYPlqHp3y1WcZZg',
    alt: 'Championship Trophy Lights',
  },
];

interface HeroProps {
  onExploreCatalog?: () => void;
  onOpenCustomizer?: () => void;
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = BANNER_SLIDES.length;

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % total);

  // Auto-advance banner every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    // Mobile: full banner at its actual 962x1635 aspect ratio; desktop: fixed 600px
    <section className="relative w-full aspect-[962/1635] sm:aspect-auto sm:h-[600px] overflow-hidden bg-[#070D18]">
      {/* Sliding Images */}
      {BANNER_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <picture>
              {/* Mobile banner (≤ 640px) */}
              <source media="(max-width: 640px)" srcSet={slide.mobileImage} />
              {/* Desktop banner (> 640px) */}
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'sm:scale-105' : 'sm:scale-100'
                }`}
              />
            </picture>
          </div>
        );
      })}

      {/* Navigation controls — hidden when only one slide */}
      {total > 1 && (
      <>
      {/* Mobile: Left / Right arrow buttons (hidden on sm+) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="sm:hidden absolute left-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white hover:bg-black/70 transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="sm:hidden absolute right-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white hover:bg-black/70 transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Desktop: Floating Vertical Slider Dots at bottom-right corner (hidden on mobile) */}
      <div className="hidden sm:flex absolute bottom-8 right-8 z-30 flex-col items-center gap-2 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-2xl">
        {BANNER_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? 'h-8 bg-[#F30F18]'
                : 'h-2.5 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
      </>
      )}
    </section>
  );
};
