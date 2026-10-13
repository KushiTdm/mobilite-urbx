import { useMemo, useState } from 'react';
import Layout, { LIME } from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Link } from '../router';
import { CATEGORIES, PRODUCTS, type CategoryId } from '../data';
import { ChevronRight } from '../components/Icons';

type Sort = 'featured' | 'price-asc' | 'price-desc' | 'rating';

/** categoryId = undefined → catalogue complet */
export default function CategoryPage({ categoryId }: { categoryId?: CategoryId }) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const [sort, setSort] = useState<Sort>('featured');

  const products = useMemo(() => {
    const list = categoryId ? PRODUCTS.filter((p) => p.category === categoryId) : [...PRODUCTS];
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [categoryId, sort]);

  const title = category ? category.label : 'TOUS LES\nPRODUITS';
  const intro = category ? category.intro : 'Toute la gamme URBX : trottinettes, vélos, skates, roues électriques et accessoires.';
  const cover = category?.image ?? '/mobilite/trotinettes-veloElec.webp';

  return (
    <Layout>
      <section className="relative bg-dark overflow-hidden">
        <img src={cover} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <nav className="flex items-center gap-1.5 font-condensed text-[11px] tracking-widest uppercase text-gray-400 mb-6">
            <Link to="/" className="hover:text-lime">Accueil</Link>
            <ChevronRight size={12} />
            <Link to="/produits" className="hover:text-lime">Boutique</Link>
            {category && (
              <>
                <ChevronRight size={12} />
                <span className="text-white">{category.plural}</span>
              </>
            )}
          </nav>
          <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: LIME }} />
          <h1 className="font-condensed font-900 text-white uppercase leading-[0.9] text-5xl sm:text-7xl whitespace-pre-line mb-4">
            {title}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {[{ id: undefined, plural: 'Tout' }, ...CATEGORIES].map((c) => {
                const active = c.id === categoryId;
                return (
                  <Link
                    key={c.id ?? 'all'}
                    to={c.id ? `/${c.id}` : '/produits'}
                    className={`font-condensed font-700 text-[11px] tracking-widest uppercase px-3.5 py-2 border transition-colors ${
                      active ? 'text-dark border-transparent' : 'text-dark border-gray-300 hover:border-dark'
                    }`}
                    style={active ? { backgroundColor: LIME } : undefined}
                  >
                    {c.plural}
                  </Link>
                );
              })}
            </div>
            <label className="flex items-center gap-2 font-condensed text-xs tracking-widest uppercase text-gray-500">
              Trier
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="bg-white border border-gray-300 px-3 py-2 text-dark text-xs normal-case tracking-normal font-sans focus:outline-none focus:border-lime"
              >
                <option value="featured">Sélection</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="rating">Mieux notés</option>
              </select>
            </label>
          </div>

          <p className="text-xs text-gray-400 mb-4">{products.length} produits</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
