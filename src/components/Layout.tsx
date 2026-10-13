import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from '../router';
import {
  Bolt, Search, User, Cart, Menu, Close, ArrowRight, ChevronRight,
  Truck, Card, Headset, Helmet, Instagram, Youtube, Facebook, TikTok, Play,
} from './Icons';

export const LIME = '#c5f50a';

const navItems = [
  { label: 'TROTTINETTES', href: '/trottinettes' },
  { label: 'VÉLOS', href: '/velos' },
  { label: 'SKATES', href: '/skates' },
  { label: 'ROUES', href: '/roues' },
  { label: 'ACCESSOIRES', href: '/accessoires' },
  { label: 'À PROPOS', href: '/#about' },
];

export default function Layout({ children, overlayHeader = false }: { children: ReactNode; overlayHeader?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-dark">
      {/* ── TOPBAR ───────────────────────────────────────── */}
      <div className={overlayHeader ? 'fixed top-0 inset-x-0 z-50' : 'contents'}>
      <div className={`bg-dark text-white text-[10px] sm:text-xs text-center py-2 tracking-[0.2em] font-condensed font-600 ${overlayHeader && scrolled ? 'hidden' : ''}`}>
        <span className="hidden sm:inline">LIVRAISON GRATUITE DÈS 150€ · 3X SANS FRAIS · RETOURS SOUS 30 JOURS</span>
        <span className="sm:hidden">LIVRAISON OFFERTE · 3X SANS FRAIS · 30J RETOURS</span>
      </div>

      {/* ── NAVBAR ───────────────────────────────────────── */}
      <header
        className={`${overlayHeader ? '' : 'sticky top-0 z-50'} transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : overlayHeader ? 'bg-gradient-to-b from-black/60 to-transparent header-overlay' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 select-none">
            <span className="font-condensed font-900 text-xl sm:text-2xl tracking-tighter text-dark uppercase leading-none">
              URBX
            </span>
            <Bolt size={12} className="text-lime -mt-2" />
            <span className="font-condensed text-[9px] tracking-widest text-gray-500 ml-1 hidden md:block self-end mb-0.5">
              MOBILITÉ URBAINE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link font-condensed font-600 text-[13px] tracking-widest text-dark uppercase"
              >
                {item.label}
              </Link>
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
            menuOpen ? 'max-h-[520px]' : 'max-h-0'
          } bg-white border-t border-gray-100`}
        >
          <nav className="px-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center justify-between font-condensed font-600 text-sm tracking-widest py-3.5 border-b border-gray-100 uppercase text-dark"
              >
                {item.label}
                <ChevronRight size={16} className="text-gray-400" />
              </Link>
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
      </div>

{children}

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
                  { label: 'Trottinettes électriques', href: '/trottinettes' },
                  { label: 'Vélos électriques', href: '/velos' },
                  { label: 'Skates électriques', href: '/skates' },
                  { label: 'Roues électriques', href: '/roues' },
                  { label: 'Accessoires & sécurité', href: '/accessoires' },
                  { label: 'Coups de cœur', href: '/#boutique' },
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
                  { label: 'Notre mission', href: '/#about' },
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
                      <Link
                        to={link.href}
                                                className="text-gray-400 text-xs hover:text-lime transition-colors"
                      >
                        {link.label}
                      </Link>
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
                <a key={item} href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 text-[11px] hover:text-lime transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <button
        aria-label="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 w-11 h-11 z-40 hidden sm:flex items-center justify-center text-dark transition-all hover:scale-110 shadow-lg"
        style={{ backgroundColor: LIME }}
      >
        <Play size={14} className="rotate-[-90deg]" />
      </button>
    </div>
  );
}
