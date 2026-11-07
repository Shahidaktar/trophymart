import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  PenTool,
  Layers,
  Factory,
  Truck,
  PackageCheck,
  Leaf,
  Headphones,
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

const PILLARS = [
  {
    icon: Clock,
    title: 'Quick Turnaround',
    body:
      'A last-minute request or a tight deadline before an upcoming event is never a problem. Our streamlined processes and dedicated production and logistics teams make sure your trophies ship promptly, without compromising on quality.',
  },
  {
    icon: PenTool,
    title: 'Customization',
    body:
      'Every organisation is unique, and so should be its awards. From engraving company logos to crafting designs that reflect your brand identity, we work closely with you - a bespoke trophy with your mark elegantly etched leaves a lasting impression.',
  },
  {
    icon: Layers,
    title: 'Widest Range',
    body:
      'Fibre, metal, resin, wooden and more, with a catalogue kept current on the latest trends and styles. Sleek, contemporary awards for a tech company or traditional, elegant trophies for a formal evening - there is something for everyone.',
  },
  {
    icon: Factory,
    title: 'No Middlemen',
    body:
      'As direct importers and manufacturers we remove the middlemen, which means the best prices and the highest quality. Direct relationships with suppliers in Taiwan, Hong Kong, China and across India let us source premium materials at competitive rates.',
  },
  {
    icon: Truck,
    title: 'Pan India Reach',
    body:
      'A robust distribution network serves clients across the country. Wherever your corporate office is located, your trophies are delivered safely and on time, with consistent quality and service regardless of location.',
  },
  {
    icon: PackageCheck,
    title: 'One-Point Solution',
    body:
      'A comprehensive service from design to delivery. Our team guides you through every step - selecting the perfect trophy, packaging it beautifully and delivering it to your doorstep - so you can focus on the event.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    body:
      'Our procurement prioritises eco-friendly materials and responsible sourcing. Choosing Trophy Mart also means supporting a company that values environmental stewardship.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    body:
      'Our dedicated support team is always ready to assist - product queries, help with customisation or after-sales service. We build long-term relationships through exceptional service.',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#161C24] font-sans">
      {/* ── Hero Banner (same treatment as the collection page) ── */}
      <section className="relative bg-[#0E233E] overflow-hidden">
        <img
          src="/banner3.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E233E]/95 via-[#0E233E]/75 to-[#0E233E]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E233E]/80 via-transparent to-[#0E233E]/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb - top of banner */}
          <nav
            aria-label="Breadcrumb"
            className="py-4 border-b border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/60"
          >
            <Link to="/" className="hover:text-[#DFB967] transition-colors">
              Home
            </Link>
            <span className="mx-2.5 text-white/30">/</span>
            <span className="text-[#DFB967] font-semibold">About Us</span>
          </nav>

          <div className="relative z-10 py-10 sm:py-12 max-w-xl">
            {/* <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#DFB967]">
              Established 2024 · Kolkata, India
            </p> */}
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
              About <span className="italic text-[#DFB967]">Trophy Mart</span>
            </h1>
            <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-white/70">
              Corporate trophies and awards designed, crafted and delivered under one
              roof - from our Kolkata workshop to boardrooms across India.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="relative overflow-hidden bg-[#FAF9F5] border-b border-[#E8E4DA]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 w-[34rem] h-[34rem] rounded-full bg-[#C59B27]/5 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center py-16 sm:py-20 lg:py-24">
            {/* Copy */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10 bg-[#C59B27]" />
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.26em] text-[#0E233E]">
                  Who We Are
                </p>
              </div>

              <h2 className="mt-6 font-serif text-[2.6rem] sm:text-5xl lg:text-[3.85rem] font-bold text-[#0E233E] leading-[0.98] tracking-tight">
                From moments
                <br className="hidden sm:block" /> to{' '}
                <span className="italic text-[#C5222A]">memories</span>
              </h2>

              <p className="mt-7 max-w-xl font-serif text-lg sm:text-xl lg:text-[1.3rem] leading-[1.55] text-[#1E293B]">
                Established in the year 2024,{' '}
                <strong className="font-semibold text-[#0E233E]">
                  Trophy Junction Pvt. Ltd.
                </strong>{' '}
                is your premier destination for high-quality corporate trophies and
                awards.
              </p>

              <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-[#475569]">
                From the house of the Trophy Junction Kolkata brand, we bring years of
                expertise and a commitment to excellence, ensuring that every award we
                create is a masterpiece. Design, engraving, packaging and dispatch stay
                with one team, so you deal with a single point of contact from the first
                brief to the moment the box is opened on stage.
              </p>

              <div className="mt-9 max-w-xl border-t border-[#D9D3C5] pt-5">
                <p className="flex flex-col gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#64748B] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
                  <span>Trophy Junction Pvt. Ltd.</span>
                  <span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-[#C59B27]" />
                  <span>Beliaghata, Kolkata</span>
                  <span aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-[#C59B27]" />
                  <span>Pan-India dispatch</span>
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 lg:col-start-8">
              <figure className="group">
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-4 -top-4 right-0 bottom-0 hidden border-l border-t border-[#C59B27]/60 sm:block"
                  />
                  <div className="relative overflow-hidden aspect-[4/5] bg-[#0E233E]">
                    <img
                      src="/about.png"
                      alt="Trophy Mart crystal award photographed under stage lighting in Kolkata"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E233E]/45 via-transparent to-[#0E233E]/10" />
                  </div>
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                    Trophy Mart - Kolkata
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C59B27]">
                    Est. 2024
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="relative bg-[#0E233E] overflow-hidden border-b border-[#0E233E]">
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#DFB967]/10 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#DFB967]">
                What Drives Us
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight">
                Vision &amp; <span className="italic text-[#DFB967]">Mission</span>
              </h2>
            </div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
              Two statements, one standard
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-10 md:gap-0 md:divide-x md:divide-white/15">
            <div className="md:pr-10 lg:pr-14">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#DFB967]" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#DFB967]">
                  Vision
                </h3>
              </div>
              <p className="mt-4 font-serif text-lg sm:text-xl lg:text-[1.4rem] leading-[1.55] text-white/85">
                To be the premier provider of trophies and awards, recognised for our
                commitment to quality, innovation and customer satisfaction - thereby
                setting new standards in the industry.
              </p>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/55">
                We strive to deliver unparalleled customisation and prompt service,
                leveraging our extensive industry experience and direct sourcing to
                provide exceptional value to our clients.
              </p>
            </div>

            <div className="md:pl-10 lg:pl-14">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#DFB967]" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#DFB967]">
                  Mission
                </h3>
              </div>
              <p className="mt-4 font-serif text-lg sm:text-xl lg:text-[1.4rem] leading-[1.55] text-white/85">
                To celebrate and honour excellence through quality trophies and awards.
              </p>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/55">
                By continuously enhancing our product range and fostering sustainable
                practices, we aim to build lasting relationships with our customers and
                contribute positively to their achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#C5222A]">
              Why Choose Us
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E233E] leading-[1.05] tracking-tight">
              Why choose <span className="italic text-[#C5222A]">Trophy Mart</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569]">
              Choosing Trophy Mart means opting for unparalleled quality, exceptional
              service and innovative designs.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-[#E5E0D4] border border-[#E5E0D4]">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="group bg-white p-6 sm:p-7 flex flex-col transition-colors hover:bg-[#FAF9F5]"
                >
                  <Icon
                    className="w-5 h-5 text-[#C59B27] transition-colors group-hover:text-[#C5222A]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#0E233E] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#475569]">
                    {pillar.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Enquiry Band ── */}
      <section className="bg-[#FAF9F5] border-t border-[#E5E0D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#C5222A]">
                Bespoke Commissions
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E233E] leading-[1.05] tracking-tight">
                Tell us the occasion.
                <br />
                <span className="italic text-[#C5222A]">We&rsquo;ll make the award.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#475569]">
                Share your brief, quantity and deadline - our team will come back with
                options, pricing and a delivery date.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
              <a
                type="button"
              href='/contact'
                className="group inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#0E233E] text-white text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#1A365D]"
              >
                Request a Quote
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <Link
                to="/collection/trophies"
                className="inline-flex items-center justify-center h-12 px-6 border border-[#0E233E]/25 text-[#0E233E] text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#0E233E] hover:text-white"
              >
                Browse Trophies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
