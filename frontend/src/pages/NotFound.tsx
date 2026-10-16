import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => (
  <div className="min-h-screen bg-navy flex flex-col items-center justify-center pt-24 px-6 text-center">
    <SEO config={{ title: 'Page Not Found - BloomTechUSA', description: 'The page you are looking for does not exist or has been moved.' }} noindex />
    <h1 className="text-4xl font-black text-white mb-4">Page Not Found</h1>
    <p className="text-white/70 mb-8">The page you're looking for doesn't exist or has been moved.</p>
    <Link to="/" className="flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-orange-dark transition-colors shadow-lg">
      Return Home
    </Link>
  </div>
);

export default NotFound;
