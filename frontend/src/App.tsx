import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Company = lazy(() => import('./pages/Company'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#ff6b00] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 font-black text-xs uppercase tracking-widest">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}>
      <AuthProvider>
        <Router>
          <div className="selection:bg-[#ff6b00] selection:text-white font-sans overflow-x-hidden">
            <Navbar />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services/:serviceId" element={<ServiceDetails />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
