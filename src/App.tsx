import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import {
  Bolt, Search, User, Cart, Menu, Close,
  ArrowRight, ChevronRight,
  Truck, Card, Headset, Shield, Leaf, Clock, Pin, Star, Play,
  Instagram, Youtube, Facebook, TikTok,
  Scooter, Bike, Skate, Wheel, Helmet,
} from './components/Icons';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const LIME = '#c5f50a';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const navItems = [
  { label: 'TROTTINETTES', href: '#trottinettes' },
  { label: 'VÉLOS', href: '#velos' },
  { label: 'SKATES', href: '#skates' },
  { label: 'ROUES', href: '#roues' },
  { label: 'À PROPOS', href: '#about' },
];

const IMG = {
  heroBg: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80',
  heroSide: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&q=80',
  scooter: 'https://images.unsplash.com/photo-1556316384-12c35d30afa4?w=900&q=80',
  bike: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=900&q=80',
  bikeAlt: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900&q=80',
  skate: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=900&q=80',
  skater: 'https://images.unsplash.com/photo-1572776685600-aca8c3456337?w=900&q=80',
  wheel: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900&q=80',
  urbanNight: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80',
  community: 'https://images.unsplash.com/photo-1572776685600-aca8c3456337?w=1200&q=80',
};

const categories = [
  {
    id: 'trottinettes',
    label: 'TROTTINETTES\nÉLECTRIQUES',
    tag: 'Bestseller',
    icon: Scooter,
    image: IMG.scooter,
    href: '#trottinettes',
  },
  {
    id: 'velos',
    label: 'VÉLOS\nÉLECTRIQUES',
    tag: 'Nouveau',
    icon: Bike,
    image: IMG.bike,
    href: '#velos',
  },
  {
    id: 'skates',
    label: 'SKATES\nÉLECTRIQUES',
    tag: 'Tendance',
    icon: Skate,
    image: IMG.skate,
    href: '#skates',
  },
  {
    id: 'roues',
    label: 'ROUES\nÉLECTRIQUES',
    tag: 'Premium',
    icon: Wheel,
    image: IMG.wheel,
    href: '#roues',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Trottinette Pro X12',
    brand: 'Xiaomi',
    price: 649,
    oldPrice: 799,
    rating: 4.8,
    reviews: 124,
    badge: 'Nouveau',
    image: IMG.scooter,
    category: 'trottinettes',
  },
  {
    id: 2,
    name: 'Vélo Urbain S7',
    brand: 'Canyon',
    price: 1299,
    oldPrice: null,
    rating: 4.9,
    reviews: 87,
    badge: 'Bestseller',
    image: IMG.bikeAlt,
    category: 'velos',
  },
  {
    id: 3,
    name: 'Skateboard Électrique V3',
    brand: 'Evolve',
    price: 899,
    oldPrice: 1050,
    rating: 4.7,
    reviews: 56,
    badge: 'Promo',
    image: IMG.skate,
    category: 'skates',
  },
  {
    id: 4,
    name: 'Roue Électrique OneWheel',
    brand: 'Future Motion',
    price: 1190,
    oldPrice: null,
    rating: 4.6,
    reviews: 43,
    badge: null,
    image: IMG.wheel,
    category: 'roues',
  },
];

const brands = ['XIAOMI', 'SEGWAY', 'CANYON', 'EVOLVE', 'KINGSONG', 'NINEBOT', 'DUALTRON', 'INMOTION'];

const trustItems = [
  { icon: Truck, title: 'Livraison rapide', sub: '1-3 jours ouvrés' },
  { icon: Card, title: 'Paiement sécurisé', sub: '3x sans frais' },
  { icon: Headset, title: 'SAV réactif', sub: 'À votre écoute' },
  { icon: Shield, title: 'Garantie 2 ans', sub: 'Sur tous les produits' },
];

const valueItems = [
  { icon: Leaf, title: 'ÉCOLOGIQUE', desc: 'Des solutions propres pour réduire votre empreinte carbone.' },
  { icon: Clock, title: 'PRATIQUE', desc: 'Gagnez du temps et simplifiez vos déplacements quotidiens.' },
  { icon: Pin, title: 'URBAIN', desc: 'Des produits pensés pour s\'adapter à votre quotidien en ville.' },
];

/* ─────────────────────────────────────────────
   APP
   ───────────────────────────────────────────── */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  /* Navbar shadow + smooth anchors */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* GSAP animations + parallax */
  useGSAP(
    () => {
      /* Parallax hero image */
      gsap.to('.hero-bg-img', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-side-img', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      /* Section reveal */
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      /* Stagger cards */
      gsap.utils.toArray<HTMLElement>('.stagger-parent').forEach((parent) => {
        const children = parent.querySelectorAll<HTMLElement>('.stagger-item');
        gsap.from(children, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: parent, start: 'top 80%' },
        });
      });

      /* Section image parallax */
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
        gsap.to(img, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      /* Big 3X bg number parallax */
      gsap.to('.paral-3x', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: { trigger: '.payment-section', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      /* Brands marquee */
      const marquee = gsap.utils.toArray<HTMLElement>('.marquee-track');
      marquee.forEach((track) => {
        const distance = track.scrollWidth / 2;
        gsap.to(track, {
          x: -distance,
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
      });
    },
    { scope: mainRef }
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSent(true);
      setEmail('');
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo(0, top);
        setMenuOpen(false);
      }
    }
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-surface text-dark">

      {/* ── TOPBAR ───────────────────────────────────────── */}
      <div className="bg-dark text-white text-[10px] sm:text-xs text-center py-2 tracking-[0.2em] font-condensed font-600">
        <span className="hidden sm:inline">LIVRAISON GRATUITE DÈS 150€ · 3X SANS FRAIS · RETOURS SOUS 30 JOURS</span>
        <span className="sm:hidden">LIVRAISON OFFERTE · 3X SANS FRAIS · 30J RETOURS</span>
      </div>

      {/* ── NAVBAR ───────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#top" onClick={(e) => handleAnchorClick(e, '#top')} className="flex items-center gap-1 select-none">
            <span className="font-condensed font-900 text-xl sm:text-2xl tracking-tighter text-dark uppercase leading-none">
              URBX
            </span>
            <Bolt size={12} className="text-lime -mt-2" />
            <span className="font-condensed text-[9px] tracking-widest text-gray-500 ml-1 hidden md:block self-end mb-0.5">
              MOBILITÉ URBAINE
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="nav-link font-condensed font-600 text-[13px] tracking-widest text-dark uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button aria-label="Recherche" className="hidden sm:block text-dark hover:text-lime transition-colors p-1">
              <Search size={20} />
            </button>
            <button aria-label="Compte" className="hidden sm:block text-dark hover:text-lime transition-colors p-1">
              <User size={20} />
            </button>
            <button aria-label="Panier" className="relative text-dark hover:text-lime transition-colors p-1">
              <Cart size={20} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold text-dark"
                  style={{ backgroundColor: LIME }}
                >
                  {cartCount}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              className="lg:hidden text-dark p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <Close size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            menuOpen ? 'max-h-[420px]' : 'max-h-0'
          } bg-white border-t border-gray-100`}
        >
          <nav className="px-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="flex items-center justify-between font-condensed font-600 text-sm tracking-widest py-3.5 border-b border-gray-100 uppercase text-dark"
              >
                {item.label}
                <ChevronRight size={16} className="text-gray-400" />
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 font-condensed text-xs tracking-widest uppercase">
                <Search size={15} /> Recherche
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-200 font-condensed text-xs tracking-widest uppercase">
                <User size={15} /> Compte
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div id="top" />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero relative bg-dark overflow-hidden min-h-[88vh] sm:min-h-[90vh] flex items-center">
        {/* Background image (parallax) */}
        <div className="absolute inset-0 -z-0">
          <img
            src={IMG.heroBg}
            alt=""
            aria-hidden
            className="hero-bg-img w-full h-[120%] object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        </div>

        {/* Lime triangle */}
        <div
          className="absolute right-0 top-0 w-1/2 lg:w-1/3 h-full opacity-90 hidden md:block z-0"
          style={{
            background: LIME,
            clipPath: 'polygon(38% 0, 100% 0, 100% 100%, 10% 100%)',
          }}
        />

        {/* Hero side image on lime */}
        <div className="absolute right-0 top-0 w-1/2 lg:w-1/3 h-full hidden md:flex items-stretch justify-end z-[1] overflow-hidden">
          <img
            src={IMG.heroSide}
            alt="Mobilité urbaine électrique"
            className="hero-side-img w-full h-[115%] object-cover mix-blend-multiply"
            style={{ clipPath: 'polygon(38% 0, 100% 0, 100% 100%, 10% 100%)' }}
          />
        </div>

        {/* Rotating badge */}
        <div className="absolute right-[calc(33%-56px)] top-20 z-20 hidden lg:block">
          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center border-2 border-dark"
            style={{ backgroundColor: LIME }}
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full badge-rotate">
              <path
                id="circle-text"
                d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text className="fill-dark">
                <textPath
                  href="#circle-text"
                  style={{
                    fontSize: 7,
                    fontFamily: 'Barlow Condensed',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                  }}
                >
                  LIBERTÉ · MOBILITÉ · ÉLECTRIQUE · URBAIN ·
                </textPath>
              </text>
            </svg>
            <Bolt size={22} className="text-dark" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
          <div className="max-w-2xl">
            <div
              className="hero-eyebrow inline-block px-3 py-1 text-[10px] font-condensed font-700 tracking-[0.22em] uppercase mb-5 sm:mb-6"
              style={{ backgroundColor: LIME, color: '#0a0a0a' }}
            >
              LA BOUTIQUE DE LA MOBILITÉ URBAINE
            </div>
            <h1
              className="hero-title font-condensed font-900 text-white uppercase leading-[0.85] mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(54px, 11vw, 120px)' }}
            >
              BOUGEZ<br />AUTREMENT.
            </h1>
            <p className="hero-sub text-gray-300 text-sm sm:text-lg max-w-md mb-8 sm:mb-10 leading-relaxed">
              Trottinettes électriques, vélos, skates et roues électriques — des solutions propres pour des déplacements plus libres, plus verts, plus urbains.
            </p>
            <div className="hero-cta flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#categories"
                onClick={(e) => handleAnchorClick(e, '#categories')}
                className="group flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 font-condensed font-700 text-xs sm:text-sm tracking-widest uppercase text-dark transition-all duration-200 hover:gap-4"
                style={{ backgroundColor: LIME }}
              >
                DÉCOUVRIR
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#marques"
                onClick={(e) => handleAnchorClick(e, '#marques')}
                className="flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 font-condensed font-700 text-xs sm:text-sm tracking-widest uppercase text-white border border-white/40 hover:border-white hover:bg-white/5 transition-colors duration-200"
              >
                NOS MARQUES
              </a>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-dark/80 backdrop-blur-sm border-t border-white/10 hidden md:block z-20">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-4 gap-4 hero-trust">
            {trustItems.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon size={20} className="text-lime flex-shrink-0" />
                <div>
                  <p className="font-condensed font-700 text-white text-xs tracking-wide uppercase">{title}</p>
                  <p className="text-gray-400 text-[11px]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────── */}
      <section id="categories" className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-4 reveal">
            <div>
              <p className="font-condensed text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">Explorer</p>
              <h2 className="font-condensed font-900 text-dark uppercase text-4xl sm:text-6xl leading-[0.9]">
                NOTRE<br />SÉLECTION
              </h2>
            </div>
            <a
              href="#boutique"
              onClick={(e) => handleAnchorClick(e, '#boutique')}
              className="self-start sm:self-end flex items-center gap-2 font-condensed font-700 text-xs tracking-widest uppercase border-b-2 border-dark hover:border-lime hover:text-lime transition-colors pb-1"
            >
              VOIR LA BOUTIQUE
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-parent">
            {categories.map((c) => (
              <a
                key={c.id}
                href={c.href}
                onClick={(e) => handleAnchorClick(e, c.href)}
                className="stagger-item product-card group relative overflow-hidden bg-[#e8e8e2] aspect-[4/5] sm:aspect-[3/4] flex flex-col justify-end cursor-pointer"
              >
                <img
                  src={c.image}
                  alt={c.label.replace('\n', ' ')}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                <div className="absolute top-3 left-3 z-10">
                  <c.icon size={26} className="text-white opacity-80" />
                </div>
                <div className="relative z-10 p-4 sm:p-5 flex items-end justify-between">
                  <div>
                    <span
                      className="inline-block text-[9px] font-condensed font-700 tracking-widest uppercase px-2 py-0.5 mb-2"
                      style={{ backgroundColor: LIME, color: '#0a0a0a' }}
                    >
                      {c.tag}
                    </span>
                    <h3 className="font-condensed font-800 text-white text-lg sm:text-xl leading-tight whitespace-pre-line">
                      {c.label}
                    </h3>
                  </div>
                  <div
                    className="product-arrow w-9 h-9 flex items-center justify-center flex-shrink-0 ml-2 transition-transform"
                    style={{ backgroundColor: LIME }}
                  >
                    <ArrowRight size={16} className="text-dark" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ───────────────────────────────── */}
      <section id="marques" className="py-12 sm:py-14 bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-7">
          <p className="font-condensed text-xs tracking-[0.25em] text-gray-500 uppercase text-center">
            Nos marques partenaires
          </p>
        </div>
        <div className="relative">
          <div className="marquee-track flex gap-12 sm:gap-16 items-center whitespace-nowrap will-change-transform">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="font-condensed font-900 text-2xl sm:text-3xl tracking-widest uppercase flex-shrink-0 text-gray-600 hover:text-lime transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────── */}
      <section id="boutique" className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10 gap-4 reveal">
            <div>
              <p className="font-condensed text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">Sélection</p>
              <h2 className="font-condensed font-900 text-dark uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.9]">
                COUPS DE<br />COEUR
              </h2>
            </div>
            <a
              href="#categories"
              onClick={(e) => handleAnchorClick(e, '#categories')}
              className="self-start sm:self-end flex items-center gap-2 font-condensed font-700 text-xs tracking-widest uppercase border-b-2 border-dark hover:border-lime hover:text-lime transition-colors pb-1"
            >
              TOUS LES PRODUITS
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 stagger-parent">
            {featuredProducts.map((p) => (
              <a
                key={p.id}
                href={`#${p.category}`}
                onClick={(e) => handleAnchorClick(e, `#${p.category}`)}
                className="stagger-item group bg-white overflow-hidden cursor-pointer shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="relative overflow-hidden aspect-square bg-[#f0f0ea]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {p.badge && (
                    <span
                      className="absolute top-3 left-3 text-[9px] font-condensed font-700 tracking-widest uppercase px-2 py-0.5"
                      style={{ backgroundColor: LIME, color: '#0a0a0a' }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <button
                    aria-label="Ajouter au panier"
                    className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    style={{ backgroundColor: LIME }}
                  >
                    <Cart size={16} className="text-dark" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="font-condensed text-[10px] tracking-widest text-gray-400 uppercase mb-1">{p.brand}</p>
                  <h3 className="font-condensed font-700 text-dark text-base leading-tight mb-2 truncate">{p.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        filled={i < Math.floor(p.rating)}
                        className={i < Math.floor(p.rating) ? 'text-lime' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-[10px] text-gray-400 ml-1">({p.reviews})</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-condensed font-800 text-dark text-xl">{p.price} €</span>
                    {p.oldPrice && (
                      <span className="font-condensed text-gray-400 text-sm line-through">{p.oldPrice} €</span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS (anchors for nav links) ───── */}
      {categories.map((c, idx) => (
        <section
          key={c.id}
          id={c.id}
          className={`py-16 sm:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[4/5] sm:aspect-[5/4] overflow-hidden reveal">
                <img
                  src={c.image}
                  alt={c.label.replace('\n', ' ')}
                  className="parallax-img absolute inset-0 w-full h-[115%] object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center" style={{ backgroundColor: LIME }}>
                  <c.icon size={24} className="text-dark" />
                </div>
              </div>
              <div className="reveal">
                <p className="font-condensed text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">Catégorie</p>
                <h2 className="font-condensed font-900 text-dark uppercase text-4xl sm:text-5xl leading-[0.9] mb-5 whitespace-pre-line">
                  {c.label}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                  Découvrez notre sélection {c.id === 'trottinettes' ? 'de trottinettes' : c.id === 'velos' ? 'de vélos' : c.id === 'skates' ? 'de skates' : 'de roues'} électriques — performances, autonomie et design urbain réunis.
                </p>
                <a
                  href="#boutique"
                  onClick={(e) => handleAnchorClick(e, '#boutique')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 font-condensed font-700 text-xs tracking-widest uppercase text-dark transition-all hover:gap-4"
                  style={{ backgroundColor: LIME }}
                >
                  EXPLORER
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── ABOUT / VALUES ───────────────────────────────── */}
      <section id="about" className="bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px] sm:min-h-[520px]">
          <div className="relative overflow-hidden min-h-[280px] sm:min-h-[360px] order-2 lg:order-1">
            <img
              src={IMG.bikeAlt}
              alt="Vélo électrique urbain"
              className="parallax-img absolute inset-0 w-full h-[115%] object-cover grayscale"
            />
            <div className="absolute inset-0 bg-dark/20" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: LIME }}>
                <Bolt size={18} className="text-dark" />
              </div>
              <p className="font-condensed font-700 text-white text-xs tracking-widest uppercase">
                Engagés pour la mobilité durable
              </p>
            </div>
          </div>

          <div className="bg-surface p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2 reveal">
            <div className="w-8 h-0.5 mb-5 sm:mb-6" style={{ backgroundColor: LIME }} />
            <h2 className="font-condensed font-900 text-dark uppercase leading-[0.9] mb-8 text-4xl sm:text-5xl lg:text-6xl">
              POUR UNE<br />VILLE PLUS<br />FLUIDE.
            </h2>

            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {valueItems.map(({ icon: Icon, title, desc }) => (
                <div key={title}>
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-3"
                    style={{ border: `1px solid ${LIME}` }}
                  >
                    <Icon size={20} className="text-dark" />
                  </div>
                  <h4 className="font-condensed font-800 text-xs tracking-widest uppercase mb-2 text-dark">
                    {title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT + COMMUNITY ──────────────────────────── */}
      <section className="payment-section grid md:grid-cols-2">
        <div className="bg-dark p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] relative overflow-hidden">
          <div className="paral-3x absolute right-4 bottom-0 font-condensed font-900 text-[120px] sm:text-[160px] leading-none select-none opacity-10 text-white">
            3X
          </div>
          <div className="relative z-10 reveal">
            <h3 className="font-condensed font-900 text-white uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.9] mb-3 sm:mb-4">
              PAYEZ EN 3X<br />SANS FRAIS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Pour tous vos achats à partir de 150€. Profitez de votre mobilité tout de suite.
            </p>
          </div>
          <a
            href="#boutique"
            onClick={(e) => handleAnchorClick(e, '#boutique')}
            className="relative z-10 mt-6 sm:mt-8 inline-flex items-center gap-2 font-condensed font-700 text-xs tracking-widest uppercase border-b border-gray-500 hover:border-lime transition-colors pb-1 self-start"
            style={{ color: LIME }}
          >
            EN SAVOIR PLUS
            <ArrowRight size={13} />
          </a>
        </div>

        <div className="relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
          <img
            src={IMG.community}
            alt="Communauté urbaine"
            className="parallax-img absolute inset-0 w-full h-[115%] object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: `${LIME}D9` }} />
          <div className="relative z-10 p-8 sm:p-12 lg:p-14 flex flex-col justify-between h-full min-h-[280px] sm:min-h-[320px]">
            <div className="reveal">
              <h3 className="font-condensed font-900 text-dark uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.9] mb-3">
                REJOIGNEZ<br />LA COMMUNAUTÉ
              </h3>
              <p className="text-dark/70 text-sm">
                Conseils, actus, bons plans… roulez avec nous !
              </p>
            </div>
            <div className="flex gap-3 mt-6 sm:mt-8">
              {[
                { I: Instagram, label: 'Instagram' },
                { I: Youtube, label: 'YouTube' },
                { I: TikTok, label: 'TikTok' },
                { I: Facebook, label: 'Facebook' },
              ].map(({ I, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-dark flex items-center justify-center hover:bg-white transition-colors"
                >
                  <I size={16} className="text-lime" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center reveal">
          <p className="font-condensed text-xs tracking-[0.25em] text-gray-400 uppercase mb-3">Newsletter</p>
          <h2 className="font-condensed font-900 text-dark uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.9] mb-4">
            RESTEZ<br />CONNECTÉ.
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Recevez nos nouveautés, offres exclusives et conseils mobilité directement dans votre boîte mail.
          </p>
          {emailSent ? (
            <div
              className="inline-flex items-center gap-2 px-8 py-4 font-condensed font-700 text-sm tracking-widest uppercase"
              style={{ backgroundColor: LIME }}
            >
              <Bolt size={16} className="text-dark" />
              MERCI, VOUS ÊTES INSCRIT !
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 min-w-0 px-4 sm:px-5 py-3.5 sm:py-4 text-sm border border-gray-300 bg-white focus:outline-none focus:border-lime transition-colors"
              />
              <button
                type="submit"
                aria-label="S'inscrire"
                className="px-5 sm:px-6 py-3.5 sm:py-4 font-condensed font-700 text-sm tracking-widest uppercase text-dark transition-all hover:brightness-110 flex-shrink-0"
                style={{ backgroundColor: LIME }}
              >
                <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {[
              { icon: Truck, title: 'Livraison rapide', sub: 'Partout en France' },
              { icon: Helmet, title: 'Sécurité', sub: 'Équipements certifiés' },
              { icon: Card, title: 'Paiement sécurisé', sub: 'CB, PayPal, 3x sans frais' },
              { icon: Headset, title: 'Service client', sub: 'Réponse sous 24h' },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                  style={{ border: `1.5px solid ${LIME}` }}
                >
                  <Icon size={18} className="text-dark" />
                </div>
                <div className="min-w-0">
                  <p className="font-condensed font-700 text-sm uppercase tracking-wide text-dark truncate">{title}</p>
                  <p className="text-gray-400 text-xs truncate">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-dark text-white pt-14 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-14">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                <span className="font-condensed font-900 text-2xl tracking-tighter uppercase leading-none">URBX</span>
                <Bolt size={13} className="text-lime -mt-2" />
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">
                Votre boutique spécialisée dans la mobilité urbaine électrique et les accessoires nouvelle génération.
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { I: Instagram, label: 'Instagram' },
                  { I: Youtube, label: 'YouTube' },
                  { I: TikTok, label: 'TikTok' },
                  { I: Facebook, label: 'Facebook' },
                ].map(({ I, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 bg-white/5 flex items-center justify-center hover:bg-lime hover:text-dark transition-colors group"
                  >
                    <I size={15} className="text-lime group-hover:text-dark transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: 'BOUTIQUE',
                links: [
                  { label: 'Trottinettes électriques', href: '#trottinettes' },
                  { label: 'Vélos électriques', href: '#velos' },
                  { label: 'Skates électriques', href: '#skates' },
                  { label: 'Roues électriques', href: '#roues' },
                  { label: 'Coups de cœur', href: '#boutique' },
                ],
              },
              {
                title: 'AIDE & INFOS',
                links: [
                  { label: 'Livraison', href: '#' },
                  { label: 'Retours & remboursements', href: '#' },
                  { label: 'Garantie', href: '#' },
                  { label: 'FAQ', href: '#' },
                  { label: 'Nous contacter', href: '#' },
                ],
              },
              {
                title: 'À PROPOS',
                links: [
                  { label: 'Notre mission', href: '#about' },
                  { label: 'Journal', href: '#' },
                  { label: 'Revendeurs', href: '#' },
                  { label: 'Recrutement', href: '#' },
                ],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h5 className="font-condensed font-700 text-xs tracking-[0.2em] uppercase mb-5 text-white">{title}</h5>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => link.href.startsWith('#') && link.href.length > 1 ? handleAnchorClick(e, link.href) : undefined}
                        className="text-gray-400 text-xs hover:text-lime transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="font-condensed font-700 text-xs tracking-[0.2em] uppercase mb-5 text-white">NEWSLETTER</h5>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                Recevez nos nouveautés et offres exclusives.
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Votre e-mail"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-lime transition-colors"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire"
                  className="w-10 flex items-center justify-center flex-shrink-0 transition-all hover:brightness-110"
                  style={{ backgroundColor: LIME }}
                >
                  <ArrowRight size={14} className="text-dark" />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-500 text-[11px]">
              © URBX – Tous droits réservés 2026
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Mentions légales', 'CGV', 'Politique de confidentialité', 'FR'].map((item) => (
                <a key={item} href="#" className="text-gray-500 text-[11px] hover:text-lime transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Play button decorative element — used in a corner */}
      <button
        aria-label="Retour en haut"
        onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#top')}
        className="fixed bottom-5 right-5 w-11 h-11 z-40 hidden sm:flex items-center justify-center text-dark transition-all hover:scale-110 shadow-lg"
        style={{ backgroundColor: LIME }}
      >
        <Play size={14} className="rotate-[-90deg]" />
      </button>
    </div>
  );
}
