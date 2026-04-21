import { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, ChevronDown, User, ShieldCheck, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { megaMenuData, ServiceItem } from '../data/servicesData';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Debounced scroll handler for better performance
  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
    setShowUserMenu(false);
  }, [logout, navigate]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || activeMenu
          ? 'bg-white/70 backdrop-blur-2xl border-b border-gray-200/50 py-2.5 shadow-lg shadow-black/5'
          : 'bg-white/5 backdrop-blur-md py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex justify-between items-center h-[64px]">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer group shrink-0">
          <div className="w-9 h-9 rounded-[8px] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all duration-500 overflow-hidden">
             <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className={`text-[22px] font-black tracking-tighter transition-all group-hover:tracking-normal ${scrolled || activeMenu ? 'text-[#0c1a36]' : 'text-white'}`}>
            BloomTech<span className="text-[#ff6b00]">USA</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-9">
          <Link to="/" className={`font-bold transition-colors text-[13px] uppercase tracking-wide ${scrolled || activeMenu ? 'text-[#0c1a36] hover:text-[#ff6b00]' : 'text-white/90 hover:text-white'}`}>Home</Link>

          <div
            className="group relative h-[64px] flex items-center"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => {setActiveMenu(null); setHoveredService(null);}}
          >
            <button className={`flex items-center gap-1 font-bold transition-all text-[13px] uppercase tracking-wide ${activeMenu === 'services' || scrolled ? 'text-[#ff6b00]' : 'text-white/90 hover:text-white'}`}>
              Services & Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff6b00] to-[#cc4400] transition-all duration-300 transform rounded-t-full ${activeMenu === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </div>

          <Link 
            to="/company"
            className={`font-bold transition-colors text-[13px] uppercase tracking-wide ${scrolled || activeMenu ? 'text-[#0c1a36] hover:text-[#ff6b00]' : 'text-white/90 hover:text-white'}`}
          >
            About Us
          </Link>

          <Link 
            to="/contact"
            className={`font-bold transition-colors text-[13px] uppercase tracking-wide ${scrolled || activeMenu ? 'text-[#0c1a36] hover:text-[#ff6b00]' : 'text-white/90 hover:text-white'}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Action Buttons / User Menu */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          {!user ? (
            <>
              <Link to="/login" className={`font-bold transition-all text-[13px] uppercase tracking-widest px-3 ${scrolled || activeMenu ? 'text-[#0c1a36] hover:text-[#ff6b00]' : 'text-white hover:text-[#ff6b00]'}`}>
                Login
              </Link>
              <Link to="/register" className={`border-[2.5px] rounded-xl font-black text-[13px] uppercase tracking-widest transition-all active:scale-95 px-8 py-2.5 ${scrolled || activeMenu ? 'border-[#0c1a36] text-[#0c1a36] hover:bg-[#0c1a36] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#0c1a36]'}`}>
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all border-2 ${scrolled || activeMenu ? 'bg-gray-50 border-gray-100' : 'bg-white/10 border-white/20'}`}
              >
                <User size={20} className={scrolled || activeMenu ? 'text-[#0c1a36]' : 'text-white'} />
              </button>

              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-4"
                  >
                    <div className="px-6 py-4 border-b border-gray-50 mb-2">
                       <p className="text-[10px] font-black text-[#ff6b00] uppercase tracking-widest mb-1">Authenticated</p>
                       <p className="text-sm font-black text-[#0c1a36] truncate">{user.name}</p>
                       <p className="text-[11px] font-medium text-gray-500 truncate">{user.email}</p>
                    </div>
                    <button className="w-full text-left px-6 py-3 text-[12px] font-bold text-[#0c1a36] hover:bg-gray-50 flex items-center gap-3 transition-colors">
                       <User size={16} className="text-gray-400" /> Account Settings
                    </button>
                    <Link to="/dashboard" onClick={() => setShowUserMenu(false)} className="w-full text-left px-6 py-3 text-[12px] font-bold text-[#0c1a36] hover:bg-gray-50 flex items-center gap-3 transition-colors">
                       <ShieldCheck size={16} className="text-gray-400" /> Identity Hub
                    </Link>
                    <div className="mx-6 my-2 border-t border-gray-50"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-6 py-3 text-[12px] font-bold text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors"
                    >
                       <LogOut size={16} /> Secure Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 focus:outline-none ${scrolled || activeMenu ? 'text-[#0c1a36]' : 'text-white'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Unique Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => {setActiveMenu(null); setHoveredService(null);}}
          >
            <div className="max-w-[1550px] mx-auto px-6 xl:px-12">

              {/* Mega-Menu Navigation Links */}
              <div className="py-6 grid grid-cols-4 gap-8">
                 {megaMenuData.map((col, idx) => (
                   <div key={idx} className="flex flex-col gap-3">
                     <h4 className="text-[#0c1a36] font-black text-[11px] uppercase tracking-[0.15em] border-b border-gray-100 pb-2 flex items-center justify-between">
                       {col.title}
                       <ChevronDown className="w-3 h-3 text-gray-300 -rotate-90" />
                     </h4>
                     <ul className="flex flex-col gap-0.5">
                       {col.items.map((item, i) => (
                         <li
                           key={i}
                           className="group/item relative -ml-2 px-2 py-1.5 rounded-xl transition-all hover:bg-blue-50/50 cursor-pointer"
                           onMouseEnter={() => setHoveredService(item)}
                         >
                           <div className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-[#ff6b00] opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                              <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[12px] font-semibold text-gray-500 group-hover/item:text-[#ff6b00] group-hover/item:font-bold transition-all tracking-tight w-full block text-left">
                                {item.name}
                              </Link>
                           </div>
                         </li>
                       ))}
                     </ul>
                     
                     {/* Render secondary section if it exists */}
                     {col.secondarySection && (
                       <div className="flex flex-col gap-3 mt-4">
                         <h4 className="text-[#0c1a36] font-black text-[11px] uppercase tracking-[0.15em] border-b border-gray-100 pb-2 flex items-center justify-between">
                           {col.secondarySection.title}
                           <ChevronDown className="w-3 h-3 text-gray-300 -rotate-90" />
                         </h4>
                         <ul className="flex flex-col gap-0.5">
                           {col.secondarySection.items.map((item, i) => (
                             <li
                               key={i}
                               className="group/item relative -ml-2 px-2 py-1.5 rounded-xl transition-all hover:bg-blue-50/50 cursor-pointer"
                               onMouseEnter={() => setHoveredService(item)}
                             >
                               <div className="flex items-center gap-2">
                                  <div className="w-1 h-1 rounded-full bg-[#ff6b00] opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                                  <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[12px] font-semibold text-gray-500 group-hover/item:text-[#ff6b00] group-hover/item:font-bold transition-all tracking-tight w-full block text-left">
                                    {item.name}
                                  </Link>
                               </div>
                             </li>
                           ))}
                         </ul>
                       </div>
                     )}
                   </div>
                 ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[70] lg:hidden p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-2xl font-black text-[#0c1a36] tracking-tighter">BloomTech<span className="text-blue-600">USA</span></span>
               <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-50 rounded-full border border-gray-100"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['Home', 'Services', 'Solutions', 'About Us', 'Careers'].map(link => (
                <a key={link} className="text-4xl font-black text-[#0c1a36] hover:text-blue-600 transition-colors">{link}</a>
              ))}
            </div>
            {!user ? (
               <div className="mt-auto grid grid-cols-1 gap-4">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="py-5 bg-gray-50 font-bold rounded-[20px] text-gray-700 text-center">Login</Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="py-5 bg-[#ff6b00] text-white font-black rounded-[20px] shadow-xl shadow-orange-200 text-center">Get Start</Link>
               </div>
            ) : (
               <div className="mt-auto flex flex-col gap-4">
                  <div className="p-6 bg-gray-50 rounded-[24px]">
                     <p className="text-xs font-black text-[#ff6b00] uppercase mb-1">Authenticated</p>
                     <p className="text-xl font-black text-[#0c1a36]">{user.name}</p>
                  </div>
                  <button onClick={handleLogout} className="py-5 bg-red-50 text-red-600 font-black rounded-[20px]">Secure Sign Out</button>
               </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
