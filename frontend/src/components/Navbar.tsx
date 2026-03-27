import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, User, ShieldCheck, Sparkles, LogOut, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { megaMenuData, ServiceItem } from '../data/servicesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<ServiceItem | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setShowUserMenu(false);
  };

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
          <div className="w-9 h-9 bg-gradient-to-br from-[#0c1a36] to-[#ff6b00] rounded-[8px] flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-all duration-500">
             <span className="text-white font-black text-lg tracking-tighter">B</span>
          </div>
          <span className={`text-[22px] font-black tracking-tighter transition-all group-hover:tracking-normal ${scrolled || activeMenu ? 'text-[#0c1a36]' : 'text-white'}`}>
            BloomTech<span className="text-[#ff6b00]">US</span>
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

          <div
            className="group relative h-[64px] flex items-center"
            onMouseEnter={() => setActiveMenu('company')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center gap-1 font-bold transition-all text-[13px] uppercase tracking-wide ${activeMenu === 'company' || scrolled ? 'text-[#ff6b00]' : 'text-white/90 hover:text-white'}`}>
              Company <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#ff6b00] transition-all duration-300 transform rounded-t-full ${activeMenu === 'company' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </div>

          <a href="#" className={`font-bold transition-colors text-[13px] uppercase tracking-wide ${scrolled || activeMenu ? 'text-[#0c1a36] hover:text-[#ff6b00]' : 'text-white/90 hover:text-white'}`}>Contact Us</a>
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
                    <button className="w-full text-left px-6 py-3 text-[12px] font-bold text-[#0c1a36] hover:bg-gray-50 flex items-center gap-3 transition-colors">
                       <ShieldCheck size={16} className="text-gray-400" /> Identity Hub
                    </button>
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
          <button className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-3 rounded-xl font-black text-[13px] uppercase tracking-widest transition-all shadow-lg shadow-orange-200/50 active:scale-95">
            Get a demo
          </button>
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
            <div className="max-w-[1550px] mx-auto px-6 xl:px-12 grid grid-cols-12 min-h-[480px]">

              {/* Refined Left Preview Card (3 cols) */}
              <div className="col-span-3 py-10 pr-10 border-r border-gray-50 flex flex-col justify-start">
                 <div className="relative h-full w-full overflow-hidden rounded-[32px] group/card">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/20 transition-transform duration-700 group-hover/card:scale-110"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/10 blur-[60px] rounded-full"></div>

                    <div className="relative h-full p-10 flex flex-col items-start z-10">
                       <AnimatePresence mode="wait">
                         {hoveredService ? (
                           <motion.div
                             key={hoveredService.name}
                             initial={{ opacity: 0, scale: 0.95 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 1.05 }}
                             className="flex flex-col h-full"
                           >
                              <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-[18px] flex items-center justify-center mb-8 border border-white/20">
                                <Sparkles className="text-white w-7 h-7" />
                              </div>
                              <h5 className="text-[26px] font-black text-white leading-tight mb-4 tracking-tighter">{hoveredService.name}</h5>
                              <p className="text-blue-100/70 text-[15px] font-medium leading-relaxed mb-auto">{hoveredService.desc}</p>
                              <Link to={`/services/${hoveredService.slug}`} onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 text-white font-black text-sm uppercase tracking-widest group/btn mt-10">
                                Explore Solution <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                              </Link>
                           </motion.div>
                         ) : (
                           <div className="flex flex-col h-full">
                              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-8">Featured Resource</span>
                              <h5 className="text-[28px] font-black text-white leading-tight tracking-tighter mb-6">Free Strategy <br/>Consulation</h5>
                              <p className="text-blue-100/70 text-[14px] font-medium leading-relaxed">Book a session with our lead architects to optimize your 2026 digital roadmap.</p>
                              <button className="mt-auto bg-white text-[#0c1a36] font-black py-4 px-8 rounded-2xl hover:bg-blue-50 transition-all text-xs uppercase tracking-widest shadow-xl flex items-center gap-2">
                                Book Now <Activity size={16} />
                              </button>
                           </div>
                         )}
                       </AnimatePresence>
                    </div>
                 </div>
              </div>

              {/* Mega-Menu Navigation Links (9 cols) */}
              <div className="col-span-9 py-12 pl-12 grid grid-cols-4 gap-12">
                 {megaMenuData.map((col, idx) => (
                   <div key={idx} className="flex flex-col gap-6">
                      <h4 className="text-[#0c1a36] font-black text-[12px] uppercase tracking-[0.15em] border-b border-gray-100 pb-4 flex items-center justify-between">
                        {col.title}
                        <ChevronDown className="w-3 h-3 text-gray-300 -rotate-90" />
                      </h4>
                      <ul className="flex flex-col gap-1">
                        {col.items.map((item, i) => (
                          <li
                            key={i}
                            className="group/item relative -ml-3 px-3 py-2 rounded-xl transition-all hover:bg-blue-50/50 cursor-pointer"
                            onMouseEnter={() => setHoveredService(item)}
                          >
                            <div className="flex items-center gap-2.5">
                               <div className="w-1 h-1 rounded-full bg-[#ff6b00] opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                               <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[13px] font-semibold text-gray-500 group-hover/item:text-[#ff6b00] group-hover/item:font-bold transition-all tracking-tight w-full block text-left">
                                 {item.name}
                               </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                   </div>
                 ))}
              </div>

            </div>

            {/* Bottom Footer Strip */}
            <div className="bg-gray-50/50 border-t border-gray-100 py-6 px-12">
               <div className="max-w-[1550px] mx-auto flex justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  <div className="flex gap-10">
                    <span className="hover:text-blue-600 transition-colors pointer-events-auto cursor-pointer">Security Center</span>
                    <span className="hover:text-blue-600 transition-colors pointer-events-auto cursor-pointer">AI Research Lab</span>
                    <span className="hover:text-blue-600 transition-colors pointer-events-auto cursor-pointer">Partner Portal</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    Discover More Solutions <ArrowRight size={12} />
                  </div>
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
               <span className="text-2xl font-black text-[#0c1a36] tracking-tighter">BloomTech<span className="text-blue-600">US</span></span>
               <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-50 rounded-full border border-gray-100"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['Home', 'Services', 'Solutions', 'Company', 'Careers'].map(link => (
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
};

export default Navbar;
