import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Users, Network, Activity } from 'lucide-react';

// Hero background images
import heroBg1 from '../assets/hero_bg_1.jpg';
import heroBg2 from '../assets/hero_bg_2.jpg';
import heroBg3 from '../assets/hero_bg_3.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroBg1, heroBg2, heroBg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { label: 'Fortune 500 Clients', val: '250+' },
    { label: 'Uptime Reliability', val: '99.9%' },
    { label: 'Automated Secrets', val: '1.2B' },
    { label: 'Global Offices', val: '40+' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Redesigned with Smooth Image Slideshow */}
      <section className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden">

        {/* Background Image Slideshow Layer */}
        <div className="absolute inset-0 w-full h-full z-0 bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sophisticated UI Overlays for High-End Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a36]/90 via-[#0c1a36]/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_transparent_0%,_rgba(12,26,54,0.4)_100%)] z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-15"></div>

        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col items-start relative z-20 w-full text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-8 text-[12px] font-bold tracking-[0.3em] text-white uppercase bg-[#ff6b00]/20 backdrop-blur-md border border-[#ff6b00]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse shadow-[0_0_12px_#ff6b00]"></span>
              2026 Enterprise Innovation
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[115px] font-black mb-8 leading-[0.85] tracking-tighter text-white">
              Securing the <br />
              <span className="text-[#ff6b00] underline decoration-[#ff6b00]/30 underline-offset-[12px]">Future Hub</span>
            </h1>

            <p className="max-w-2xl text-gray-200 text-lg md:text-2xl mb-14 leading-relaxed font-medium">
               Orchestrating complex IT infrastructure with human-centric AI.
               Where deep security meets limitless automation.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="w-full sm:w-auto px-12 py-5 bg-[#ff6b00] text-white rounded-2xl font-black text-lg hover:bg-[#e65c00] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] transition-all flex items-center justify-center gap-3 group active:scale-95">
              Launch Identity Hub <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 rounded-2xl font-black text-lg hover:bg-white hover:text-[#0c1a36] transition-all shadow-xl">
              Our Methodology
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="px-6 py-20 border-y border-gray-100 bg-white">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex flex-col gap-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#5b6e8a]">Enterprise Integrity</span>
              <h3 className="text-3xl font-black text-[#0c1a36]">Proven Global Impact</h3>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full flex-1 md:max-w-4xl">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-extrabold text-[#ff6b00] mb-1">{stat.val}</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#5b6e8a]">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-[#0c1a36] mb-10">
                 A Unified Platform for <br/><span className="text-[#ff6b00]">Total Visibility.</span>
               </h2>
               <div className="space-y-10">
                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#ff6b00] transition-all duration-300">
                        <Users className="text-[#ff6b00] group-hover:text-white" size={32} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2 text-[#0c1a36]">Automate Access Requests</h4>
                        <p className="text-[#5b6e8a] leading-relaxed max-w-md font-medium text-[15px]">Use AI to automatically suggest and grant the right access to the right users at the right time.</p>
                     </div>
                  </div>
                  <div className="flex gap-6 group">
                     <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#ff6b00] transition-all duration-300">
                        <Globe className="text-[#ff6b00] group-hover:text-white" size={32} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2 text-[#0c1a36]">Monitor Identity Risk</h4>
                        <p className="text-[#5b6e8a] leading-relaxed max-w-md font-medium text-[15px]">Continuously monitor your entire footprint to detect and mitigate non-compliant behavior instantly.</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="aspect-square bg-[#0c1a36] rounded-[48px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(12,26,54,0.3)] flex items-center justify-center p-12">
                   <div className="relative">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff6b00]/20 blur-3xl animate-pulse"></div>
                      <div className="grid grid-cols-3 gap-6 relative z-10">
                         {Array.from({length: 9}).map((_, i) => (
                           <motion.div
                            key={i}
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                            className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl"
                           />
                         ))}
                      </div>
                      <div className="mt-12 text-center text-white/40 font-black text-sm uppercase tracking-[0.3em]">Processing Secure ID...</div>
                   </div>
               </div>
            </motion.div>
        </div>
      </section>

      {/* Footer System */}
      <footer className="bg-[#0c1a36] text-white py-24 px-6">
        <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-16">
               <div className="w-12 h-12 bg-[#ff6b00] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-2xl">B</span>
               </div>
               <span className="text-4xl font-black tracking-tighter">BloomTechUS</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left w-full border-y border-white/10 py-16 mb-12">
               <div>
                  <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Platform</h5>
                  <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Security</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Automation</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Connectivity</li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Ecosystem</h5>
                  <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Developers</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Partners</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">API Keys</li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Support</h5>
                  <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Documentation</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Training</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Cloud Status</li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Legal</h5>
                  <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Trust Center</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">Privacy Policy</li>
                    <li className="hover:text-[#ff6b00] cursor-pointer transition-colors">GDPR Hub</li>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
               <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#5b6e8a]">
                  <span>© 2026 BloomTech Global</span>
                  <span>Trust Center</span>
                  <span>Sustainability</span>
               </div>
               <div className="flex gap-6">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-[#ff6b00] transition-all cursor-pointer">
                    <Network size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-[#ff6b00] transition-all cursor-pointer">
                    <Activity size={14} />
                  </div>
               </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
