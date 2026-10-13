import Layout, { LIME } from '../components/Layout';
import { Link } from '../router';

export default function NotFound() {
  return (
    <Layout>
      <section className="py-28 text-center px-4">
        <h1 className="font-condensed font-900 text-dark uppercase text-6xl sm:text-8xl leading-[0.9] mb-4">404</h1>
        <p className="text-gray-500 mb-8">Cette page n’existe pas.</p>
        <Link to="/" className="inline-block px-8 py-4 font-condensed font-700 text-sm tracking-widest uppercase text-dark" style={{ backgroundColor: LIME }}>
          RETOUR À L’ACCUEIL
        </Link>
      </section>
    </Layout>
  );
}
