import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Layout, { LIME } from '../components/Layout';
import { Link } from '../router';
import { CATEGORIES, FEATURED_IDS, IMG, getProduct } from '../data';
import {
  Bolt, ArrowRight, Cart, Truck, Card, Headset, Shield, Leaf, Clock, Pin, Star,
  Instagram, Youtube, Facebook, TikTok, Scooter, Bike, Skate, Wheel, Helmet,
} from '../components/Icons';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categoryIcons = { trottinettes: Scooter, velos: Bike, skates: Skate, roues: Wheel, accessoires: Helmet };
const categories = CATEGORIES.map((c) => ({ ...c, icon: categoryIcons[c.id] }));
const featuredProducts = FEATURED_IDS.map((id) => getProduct(id)!);

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

export default function Home() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
      gsap.utils.toArray<HTMLElement>('.stagger-parent').forEach((parent) => {
        gsap.from(parent.querySelectorAll<HTMLElement>('.stagger-item'), {
          y: 50, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: parent, start: 'top 80%' },
        });
      });
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
        gsap.to(img, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      gsap.to('.paral-3x', {
        yPercent: -20, ease: 'none',
        scrollTrigger: { trigger: '.payment-section', start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.utils.toArray<HTMLElement>('.marquee-track').forEach((track) => {
        gsap.to(track, { x: -track.scrollWidth / 2, duration: 24, ease: 'none', repeat: -1 });
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

  return (
    <Layout overlayHeader>
      <div ref={mainRef}>
      {/* ── HERO (100vh, vidéo) ─────────────────────────── */}
      <section className="hero relative bg-dark overflow-hidden h-[100svh] min-h-[560px] flex items-center">
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover"
          src={IMG.heroVideo}
          poster={IMG.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-28 sm:pb-32">
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
            <p className="hero-sub text-gray-200 text-sm sm:text-lg max-w-md mb-8 sm:mb-10 leading-relaxed">
              Trottinettes électriques, vélos, skates, roues et accessoires — des solutions propres pour des déplacements plus libres, plus verts, plus urbains.
            </p>
            <div className="hero-cta flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/produits"
                className="group flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 font-condensed font-700 text-xs sm:text-sm tracking-widest uppercase text-dark transition-all duration-200 hover:gap-4"
                style={{ backgroundColor: LIME }}
              >
                DÉCOUVRIR
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/#marques"
                className="flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 font-condensed font-700 text-xs sm:text-sm tracking-widest uppercase text-white border border-white/40 hover:border-white hover:bg-white/5 transition-colors duration-200"
              >
                NOS MARQUES
              </Link>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-dark/70 backdrop-blur-sm border-t border-white/10 hidden md:block z-20">
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
            <Link
              to="/produits"
              className="self-start sm:self-end flex items-center gap-2 font-condensed font-700 text-xs tracking-widest uppercase border-b-2 border-dark hover:border-lime hover:text-lime transition-colors pb-1"
            >
              VOIR LA BOUTIQUE
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-parent">
            {categories.map((c) => (
              <Link
                key={c.id}
                to={`/${c.id}`}
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
              </Link>
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
            <Link
              to="/produits"
              className="self-start sm:self-end flex items-center gap-2 font-condensed font-700 text-xs tracking-widest uppercase border-b-2 border-dark hover:border-lime hover:text-lime transition-colors pb-1"
            >
              TOUS LES PRODUITS
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 stagger-parent">
            {featuredProducts.map((p) => (
              <Link
                key={p.id}
                to={`/produit/${p.id}`}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

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
          <Link
            to="/produits"
            className="relative z-10 mt-6 sm:mt-8 inline-flex items-center gap-2 font-condensed font-700 text-xs tracking-widest uppercase border-b border-gray-500 hover:border-lime transition-colors pb-1 self-start"
            style={{ color: LIME }}
          >
            EN SAVOIR PLUS
            <ArrowRight size={13} />
          </Link>
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
      </div>
    </Layout>
  );
}
