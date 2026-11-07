import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Truck,
} from 'lucide-react';

const REGISTERED_OFFICE =
  '100 A & B, Kabi Sukanta Sarani, Koley Biscuit Compound, Beliaghata, Kolkata 700085';
const SHOWROOM =
  'Trophy Junction, 7B, M.G. Road, College Square, Kolkata, West Bengal 700009';
const EMAIL = 'trophymartindia@gmail.com';
const PHONE_PRIMARY = '+91 79806 20672';
const PHONE_SECONDARY = '+91 96741 63446';
const WHATSAPP_NUMBER = '917980620672';

const MAP_QUERY = encodeURIComponent(SHOWROOM);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const fieldClass =
  'mt-2 w-full bg-transparent border-b border-[#D9D3C5] pb-2 text-sm text-[#0E233E] placeholder:text-[#A8A29A] rounded-none focus:outline-none focus:border-[#0E233E] transition-colors';

const labelClass =
  'block text-[10px] font-bold uppercase tracking-[0.18em] text-[#64748B]';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const EMPTY_FORM: ContactForm = { name: '', phone: '', email: '', message: '' };

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const update = (key: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Please tell us your name.';
    if (!form.phone.trim()) {
      nextErrors.phone = 'Please add a contact number.';
    } else if (form.phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'That number looks too short.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Please add an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please check this email address.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#161C24] font-sans">
      {/* ── Hero Banner ── */}
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
          <nav
            aria-label="Breadcrumb"
            className="py-4 border-b border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/60"
          >
            <Link to="/" className="hover:text-[#DFB967] transition-colors">
              Home
            </Link>
            <span className="mx-2.5 text-white/30">/</span>
            <span className="text-[#DFB967] font-semibold">Contact Us</span>
          </nav>

          <div className="relative z-10 py-10 sm:py-12 max-w-xl">
            {/* <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#DFB967]">
              Kolkata · Pan-India
            </p> */}
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
              Contact <span className="italic text-[#DFB967]">Us</span>
            </h1>
            <p className="mt-3 max-w-lg text-xs sm:text-sm leading-relaxed text-white/70">
              Share the occasion, the quantity and the date. Our Kolkata team handles
              every enquiry directly - call, write or message us on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Contact details ── */}
      <section className="bg-[#FAF9F5] border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Form panel */}
            <div className="lg:col-span-7">
              <div className="h-full bg-white border border-[#E5E0D4] border-t-2 border-t-[#C59B27] p-6 sm:p-8 lg:p-10">
                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 sm:py-16">
                    <div className="w-14 h-14 flex items-center justify-center border border-[#C59B27]/60 text-[#C59B27]">
                      <Check className="w-6 h-6" strokeWidth={1.6} />
                    </div>

                    <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-[#0E233E] leading-tight">
                      Thank you
                      {form.name.trim() ? `, ${form.name.trim().split(' ')[0]}` : ''}
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#475569]">
                      Your message has reached our Kolkata team. We&rsquo;ll get back to
                      you
                      {form.email.trim() ? ` at ${form.email.trim()}` : ''} shortly.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <Link
                        to="/"
                        className="inline-flex items-center justify-center h-12 px-6 bg-[#0E233E] text-white text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#1A365D]"
                      >
                        Back to Home
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setForm(EMPTY_FORM);
                          setSent(false);
                        }}
                        className="inline-flex items-center justify-center h-12 px-6 border border-[#0E233E]/25 text-[#0E233E] text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#0E233E] hover:text-white"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-px w-10 bg-[#C59B27]" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0E233E]">
                        Get in Touch
                      </p>
                    </div>

                    <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-[#0E233E] leading-[1.05] tracking-tight">
                      Tell us what you&rsquo;re
                      <br className="hidden sm:block" />{' '}
                      <span className="italic text-[#C5222A]">celebrating</span>
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                      A short note is enough - we&rsquo;ll help with the shortlist,
                      engraving and timeline.
                    </p>

                    <div className="mt-8 space-y-6">
                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          Your Name <span className="text-[#C5222A]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Priya Menon"
                          value={form.name}
                          aria-invalid={Boolean(errors.name)}
                          onChange={(e) => update('name', e.target.value)}
                          className={fieldClass}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-[10px] text-[#C5222A]">{errors.name}</p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="contact-phone" className={labelClass}>
                            Your Phone <span className="text-[#C5222A]">*</span>
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="+91 00000 00000"
                            value={form.phone}
                            aria-invalid={Boolean(errors.phone)}
                            onChange={(e) => update('phone', e.target.value)}
                            className={fieldClass}
                          />
                          {errors.phone && (
                            <p className="mt-1.5 text-[10px] text-[#C5222A]">{errors.phone}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="contact-email" className={labelClass}>
                            Your Email <span className="text-[#C5222A]">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@company.com"
                            value={form.email}
                            aria-invalid={Boolean(errors.email)}
                            onChange={(e) => update('email', e.target.value)}
                            className={fieldClass}
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-[10px] text-[#C5222A]">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className={labelClass}>
                          Your Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          placeholder="Occasion, number of awards, engraving notes, delivery city and date…"
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          className={`${fieldClass} resize-none`}
                        />
                      </div>
                    </div>

                    <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 h-12 px-7 bg-[#0E233E] text-white text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#C5222A]"
                      >
                        Send Enquiry
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>

                      {/* <p className="text-[10px] leading-relaxed text-[#94A3B8]">
                        We reply by email or WhatsApp.
                        <br className="hidden sm:block" /> Your details stay with our team.
                      </p> */}
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact details panel */}
            <div className="lg:col-span-5">
              <div className="relative h-full bg-[#0E233E] text-white p-7 sm:p-9 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#DFB967]">
                  Reach Us
                </p>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Trophy Mart, Kolkata
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <MapPin
                      className="w-4 h-4 mt-1 shrink-0 text-[#DFB967]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                        Registered Office
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/80">
                        {REGISTERED_OFFICE}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-white/10 pt-6">
                    <MapPin
                      className="w-4 h-4 mt-1 shrink-0 text-[#DFB967]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                        Our Showroom
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/80">
                        {SHOWROOM}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-white/10 pt-6">
                    <Mail
                      className="w-4 h-4 mt-1 shrink-0 text-[#DFB967]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                        Email Address
                      </h3>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-1.5 inline-block text-[13px] text-white/80 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#DFB967] hover:decoration-[#DFB967]/50"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 border-t border-white/10 pt-6">
                    <Phone
                      className="w-4 h-4 mt-1 shrink-0 text-[#DFB967]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                        Call Us
                      </h3>
                      <div className="mt-1.5 flex flex-col gap-1 text-[13px] text-white/80">
                        <a
                          href="tel:+917980620672"
                          className="tabular-nums transition-colors hover:text-[#DFB967]"
                        >
                          {PHONE_PRIMARY}
                        </a>
                        <a
                          href="tel:+919674163446"
                          className="tabular-nums transition-colors hover:text-[#DFB967]"
                        >
                          {PHONE_SECONDARY}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 h-11 px-5 border border-[#DFB967]/60 text-[#DFB967] text-[10px] font-bold uppercase tracking-[0.18em] transition-colors hover:bg-[#DFB967] hover:text-[#0E233E]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assurance strip ── */}
      <section className="bg-white border-b border-[#E8E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid sm:grid-cols-3 gap-px bg-[#E5E0D4] border border-[#E5E0D4]">
            {[
              {
                icon: Truck,
                title: 'Pan-India dispatch',
                body: 'Tracked delivery to corporate addresses across the country.',
              },
              {
                icon: Factory,
                title: 'Direct importers',
                body: 'Sourced from Taiwan, Hong Kong and across India.',
              },
              {
                icon: PackageCheck,
                title: 'One point of contact',
                body: 'Design, engraving, packaging and delivery with one team.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white px-6 py-6 flex gap-4">
                  <Icon
                    className="w-5 h-5 shrink-0 text-[#C59B27]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#0E233E] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Showroom map ── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#C5222A]">
                Visit Us
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E233E] leading-[1.05] tracking-tight">
                The <span className="italic text-[#C5222A]">showroom</span>
              </h2>
            </div>

            <a
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start sm:self-auto text-[10px] font-bold uppercase tracking-[0.18em] text-[#0E233E] transition-colors hover:text-[#C5222A]"
            >
              Get Directions
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="relative mt-7 border border-[#E5E0D4] bg-[#F4F1EA] overflow-hidden">
            {/* Fallback shown if the map embed cannot load */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <MapPin className="w-6 h-6 text-[#0E233E]/35" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E233E]/45">
                Trophy Junction · College Square
              </p>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5222A] underline underline-offset-4"
              >
                Open in Google Maps
                <ArrowUpRight size={13} />
              </a>
            </div>

            <iframe
              title="Trophy Mart showroom location map"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative w-full h-[320px] sm:h-[420px] block grayscale-[30%] contrast-[1.05]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6 flex justify-start">
              <div className="pointer-events-auto bg-white/95 backdrop-blur border border-[#E5E0D4] p-5 max-w-xs shadow-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C59B27]">
                  Trophy Junction
                </p>
                <p className="mt-2 font-serif text-base font-bold text-[#0E233E] leading-snug">
                  7B, M.G. Road, College Square
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#64748B]">
                  Kolkata, West Bengal 700009
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
