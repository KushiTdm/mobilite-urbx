import { usePath, useScrollOnNavigate } from './router';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import { CATEGORIES } from './data';

export default function App() {
  const path = usePath().replace(/\/+$/, '') || '/';
  useScrollOnNavigate(path);

  if (path === '/') return <Home />;
  if (path === '/produits') return <CategoryPage />;

  const category = CATEGORIES.find((c) => `/${c.id}` === path);
  if (category) return <CategoryPage key={category.id} categoryId={category.id} />;

  if (path.startsWith('/produit/')) return <ProductPage id={decodeURIComponent(path.slice('/produit/'.length))} />;

  return <NotFound />;
}
