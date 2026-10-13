import { useState } from 'react';
import Layout, { LIME } from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Link } from '../router';
import { PRODUCTS, getCategory, getProduct } from '../data';
import { Cart, ChevronRight, Star, Truck, Shield, Card } from '../components/Icons';
import NotFound from './NotFound';

export default function ProductPage({ id }: { id: string }) {
  const product = getProduct(id);
  const [active, setActive] = useState(0);
  const [added, setAdded] = useState(false);
  if (!product) return <NotFound />;

  const category = getCategory(product.category)!;
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <section className="bg-white py-8 sm:py-12" key={product.id}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-1.5 font-condensed text-[11px] tracking-widest uppercase text-gray-400 mb-6">
            <Link to="/" className="hover:text-dark">Accueil</Link>
            <ChevronRight size={12} />
            <Link to={`/${category.id}`} className="hover:text-dark">{category.plural}</Link>
            <ChevronRight size={12} />
            <span className="text-dark">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
            <div>
              <div className="relative aspect-[4/5] sm:aspect-square bg-[#f0f0ea] overflow-hidden">
                <img src={product.gallery[active]} alt={product.name} className="w-full h-full object-cover" />
                {product.badge && (
                  <span
                    className="absolute top-4 left-4 text-[10px] font-condensed font-700 tracking-widest uppercase px-2.5 py-1"
                    style={{ backgroundColor: LIME, color: '#0a0a0a' }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              {product.gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3 mt-3">
                  {product.gallery.slice(0, 4).map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setActive(i)}
                      aria-label={`Photo ${i + 1}`}
                      className={`aspect-square overflow-hidden bg-[#f0f0ea] border-2 transition-colors ${
                        i === active ? 'border-dark' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img src={g} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p className="font-condensed text-xs tracking-[0.25em] text-gray-400 uppercase mb-2">{product.brand}</p>
              <h1 className="font-condensed font-900 text-dark uppercase text-4xl sm:text-5xl leading-[0.95] mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} filled={i < Math.floor(product.rating)} className={i < Math.floor(product.rating) ? 'text-lime' : 'text-gray-300'} />
                ))}
                <span className="text-xs text-gray-500 ml-2">{product.rating} · {product.reviews} avis</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-condensed font-800 text-dark text-4xl">{product.price} €</span>
                {product.oldPrice && <span className="font-condensed text-gray-400 text-xl line-through">{product.oldPrice} €</span>}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">{product.description}</p>

              <button
                onClick={() => setAdded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 font-condensed font-700 text-sm tracking-widest uppercase text-dark transition-all hover:brightness-105 mb-8"
                style={{ backgroundColor: LIME }}
              >
                <Cart size={18} />
                {added ? 'AJOUTÉ AU PANIER' : 'AJOUTER AU PANIER'}
              </button>

              <dl className="border-t border-gray-200 mb-8">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between py-3 border-b border-gray-200 text-sm">
                    <dt className="text-gray-500">{s.label}</dt>
                    <dd className="font-semibold text-dark">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Truck, t: 'Livraison 1-3 j' },
                  { icon: Card, t: '3x sans frais' },
                  { icon: Shield, t: 'Garantie 2 ans' },
                ].map(({ icon: Icon, t }) => (
                  <div key={t} className="flex flex-col items-center text-center gap-2 py-3" style={{ border: `1px solid ${LIME}` }}>
                    <Icon size={18} className="text-dark" />
                    <span className="font-condensed text-[11px] tracking-widest uppercase">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-condensed font-900 text-dark uppercase text-3xl sm:text-4xl mb-8">VOUS AIMEREZ AUSSI</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
