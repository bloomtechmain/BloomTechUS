import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { megaMenuData } from '../data/servicesData';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || activeMenu
          ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 py-2.5 shadow-lg shadow-black/5'
          : 'bg-white py-5 border-b border-gray-100 shadow-md'
      }`}
    >
      <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex justify-between items-center h-[64px]">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer group shrink-0">
          <div className="w-9 h-9 rounded-[8px] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-all duration-500 overflow-hidden">
             <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-[22px] font-black tracking-tighter transition-all group-hover:tracking-normal text-navy">
            BloomTech<span className="text-brand-orange">USA</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-9">
          <Link to="/" className="font-bold transition-colors text-[13px] uppercase tracking-wide text-navy hover:text-brand-orange">Home</Link>

          <div
            className="group relative h-[64px] flex items-center"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => {setActiveMenu(null);}}
          >
            <button className={`flex items-center gap-1.5 font-bold transition-all text-[13px] uppercase tracking-wide ${activeMenu === 'services' ? 'text-brand-orange' : 'text-navy hover:text-brand-orange'}`}>
              Services & Solutions <span className={`text-[9px] transition-transform duration-300 ${activeMenu === 'services' ? '-rotate-180' : ''}`}>▾</span>
            </button>
            <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange transition-all duration-300 transform rounded-t-full ${activeMenu === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
          </div>

          <Link 
            to="/company"
            className="font-bold transition-colors text-[13px] uppercase tracking-wide text-navy hover:text-brand-orange"
          >
            About Us
          </Link>

          <Link 
            to="/contact"
            className="font-bold transition-colors text-[13px] uppercase tracking-wide text-navy hover:text-brand-orange"
          >
            Contact Us
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link to="/contact" className="rounded-lg font-semibold text-[13px] uppercase tracking-widest transition-all active:scale-95 px-7 py-3 bg-brand-orange text-white hover:bg-brand-orange-dark shadow-sm shadow-orange-500/20">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden px-3 py-2 focus:outline-none text-navy text-xs font-bold uppercase tracking-widest">
          {isOpen ? 'Close' : 'Menu'}
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
            onMouseLeave={() => {setActiveMenu(null);}}
          >
            <div className="max-w-[1550px] mx-auto px-6 xl:px-12">

              {/* Mega-Menu Navigation Links */}
              <div className="py-6 grid grid-cols-4 gap-8">
                 {megaMenuData.map((col, idx) => (
                   <div key={idx} className="flex flex-col gap-3">
                     <h4 className="text-navy font-black text-[11px] uppercase tracking-[0.15em] border-b border-gray-100 pb-2 flex items-center justify-between">
                       {col.title}
                       <span className="text-[10px] text-gray-300">▸</span>
                     </h4>
                     <ul className="flex flex-col gap-0.5">
                       {col.items.map((item, i) => (
                         <li
                           key={i}
                           className="group/item relative -ml-2 px-2 py-1.5 rounded-xl transition-all hover:bg-grey-light cursor-pointer"
                         >
                           <div className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                              <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[13.5px] font-medium text-gray-600 group-hover/item:text-brand-orange group-hover/item:font-semibold transition-all tracking-tight w-full block text-left">
                                {item.name}
                              </Link>
                           </div>
                         </li>
                       ))}
                     </ul>
                     
                     {/* Render secondary section if it exists */}
                     {col.secondarySection && (
                       <div className="flex flex-col gap-3 mt-4">
                         <h4 className="text-navy font-black text-[11px] uppercase tracking-[0.15em] border-b border-gray-100 pb-2 flex items-center justify-between">
                           {col.secondarySection.title}
                           <span className="text-[10px] text-gray-300">▸</span>
                         </h4>
                         <ul className="flex flex-col gap-0.5">
                           {col.secondarySection.items.map((item, i) => (
                             <li
                               key={i}
                               className="group/item relative -ml-2 px-2 py-1.5 rounded-xl transition-all hover:bg-grey-light cursor-pointer"
                             >
                               <div className="flex items-center gap-2">
                                  <div className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                                  <Link to={`/services/${item.slug}`} onClick={() => setActiveMenu(null)} className="text-[13.5px] font-medium text-gray-600 group-hover/item:text-brand-orange group-hover/item:font-semibold transition-all tracking-tight w-full block text-left">
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
               <span className="text-2xl font-black text-navy tracking-tighter">BloomTech<span className="text-brand-orange">USA</span></span>
               <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="px-4 py-3 bg-gray-50 rounded-full border border-gray-100 text-xs font-bold uppercase tracking-widest text-navy">Close</button>
            </div>
            <div className="flex flex-col gap-8">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-4xl font-black text-navy hover:text-brand-orange transition-colors">Home</Link>
              
              {/* Services with Expandable Submenu */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                  className="text-4xl font-black text-navy hover:text-brand-orange transition-colors text-left flex items-center justify-between"
                >
                  Services
                  <span className={`text-2xl transition-transform duration-300 ${mobileServicesOpen ? '-rotate-180' : ''}`}>▾</span>
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-3 mt-6 ml-6 max-h-[400px] overflow-y-auto">
                        {megaMenuData.map((column, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-2">
                            <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest mb-1">
                              {column.title}
                            </h4>
                            {column.items.map((service, idx) => (
                              <Link
                                key={idx}
                                to={`/services/${service.slug}`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="text-lg font-bold text-gray-700 hover:text-brand-orange transition-colors pl-4 border-l-2 border-gray-200 hover:border-brand-orange"
                              >
                                {service.name}
                              </Link>
                            ))}
                            {column.secondarySection && (
                              <>
                                <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest mb-1 mt-3">
                                  {column.secondarySection.title}
                                </h4>
                                {column.secondarySection.items.map((service, idx) => (
                                  <Link
                                    key={idx}
                                    to={`/services/${service.slug}`}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className="text-lg font-bold text-gray-700 hover:text-brand-orange transition-colors pl-4 border-l-2 border-gray-200 hover:border-brand-orange"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/company" onClick={() => setIsOpen(false)} className="text-4xl font-black text-navy hover:text-brand-orange transition-colors">About Us</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-black text-navy hover:text-brand-orange transition-colors">Contact Us</Link>
            </div>
            <div className="mt-auto grid grid-cols-1 gap-4">
               <Link to="/contact" onClick={() => setIsOpen(false)} className="py-5 bg-brand-orange text-white font-black rounded-[20px] shadow-xl shadow-orange-200 text-center">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
