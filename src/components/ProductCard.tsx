import { Link } from '../router';
import { Cart, Star } from './Icons';
import { LIME } from './Layout';
import type { Product } from '../data';

export default function ProductCard({ p, className = '' }: { p: Product; className?: string }) {
  return (
    <Link
      to={`/produit/${p.id}`}
      className={`group bg-white overflow-hidden cursor-pointer shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${className}`}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-[#f0f0ea]">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
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
        <span
          aria-hidden
          className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          style={{ backgroundColor: LIME }}
        >
          <Cart size={16} className="text-dark" />
        </span>
      </div>
      <div className="p-4">
        <p className="font-condensed text-[10px] tracking-widest text-gray-400 uppercase mb-1">{p.brand}</p>
        <h3 className="font-condensed font-700 text-dark text-base leading-tight mb-2 truncate">{p.name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} filled={i < Math.floor(p.rating)} className={i < Math.floor(p.rating) ? 'text-lime' : 'text-gray-300'} />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({p.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-condensed font-800 text-dark text-xl">{p.price} €</span>
          {p.oldPrice && <span className="font-condensed text-gray-400 text-sm line-through">{p.oldPrice} €</span>}
        </div>
      </div>
    </Link>
  );
}
