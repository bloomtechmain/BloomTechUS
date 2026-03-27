import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Cpu, Cloud, Globe } from 'lucide-react';
import { getServiceBySlug, ServiceItem } from '../data/servicesData';
import Navbar from '../components/Navbar';
import ExpertFormModal from '../components/ExpertFormModal';

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when loading a new service page
    window.scrollTo(0, 0);
    
    if (serviceId) {
      const foundService = getServiceBySlug(serviceId);
      if (foundService) {
        setService(foundService);
      } else {
        setService(null);
      }
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/80 flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-black text-white mb-4">Service Not Found</h1>
        <p className="text-white/70 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="flex items-center gap-2 bg-[#ff6b00] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#e65c00] transition-colors shadow-lg">
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1a36] via-[#1a305c] to-[#ff6b00]/30 font-sans selection:bg-[#ff6b00] selection:text-white relative">
      <Navbar />
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b00]/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-[#ff6b00]/15 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start relative z-10"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-[#ff6b00] uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} className="text-white/30" />
                <span className="text-white/60">Services</span>
                <ChevronRight size={14} className="text-white/30" />
                <span className="truncate max-w-[150px] sm:max-w-none text-white">{service.name}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 max-w-4xl drop-shadow-2xl">
                {service.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-50/90 font-medium leading-relaxed max-w-3xl mb-12 drop-shadow-md">
                {service.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#ff6b00] hover:bg-[#e65c00] text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/30 active:scale-95 flex items-center gap-2 group"
                >
                  Talk to an Expert <Zap size={18} className="group-hover:fill-white transition-all" />
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-black text-[14px] uppercase tracking-widest transition-all shadow-sm active:scale-95">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/20 group">
                {service.imageUrl ? (
                  <img 
                    src={service.imageUrl} 
                    alt={service.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gradient-to-br from-[#ff6b00]/20 to-[#0c1a36] flex items-center justify-center">
                    <Cpu size={80} className="text-white/20" />
                  </div>
                )}
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a36]/60 via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Solution Area</p>
                    <p className="text-white font-bold text-sm">{service.name.split(' ')[0]} Intelligence</p>
                  </div>
                  <div className="w-10 h-10 bg-[#ff6b00] rounded-xl flex items-center justify-center text-white">
                    <Shield size={20} />
                  </div>
                </div>
              </div>

              {/* Backglow for the image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff6b00]/30 to-blue-500/30 blur-3xl -z-10 rounded-[40px]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-white mb-8 tracking-tight drop-shadow-sm">Overview</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-16">
                {service.longDesc || `Detailed information about ${service.name} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-black text-white mb-8 tracking-tight drop-shadow-sm">Core Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-xl shadow-lg flex items-center justify-center shrink-0 text-white transform group-hover:scale-110 transition-transform">
                          {idx % 4 === 0 && <Cpu size={20} />}
                          {idx % 4 === 1 && <Cloud size={20} />}
                          {idx % 4 === 2 && <Shield size={20} />}
                          {idx % 4 === 3 && <Globe size={20} />}
                        </div>
                        <div>
                          <h4 className="font-bold text-white tracking-wide">{feature}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Benefits & Sidebar */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 lg:p-10 shadow-2xl shadow-[#ff6b00]/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/20 to-transparent rounded-bl-full pointer-events-none"></div>
                
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight mt-2 drop-shadow-sm">Client Benefits</h3>
                
                {service.benefits && service.benefits.length > 0 ? (
                  <ul className="flex flex-col gap-5 relative z-10">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-0.5 text-[#ff6b00]">
                          <CheckCircle2 size={24} />
                        </div>
                        <span className="text-white/90 text-lg font-medium leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/60">Benefits information is being compiled.</p>
                )}

                <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
                  <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-4">Need a custom approach?</p>
                  <Link to="/" className="text-white font-bold flex items-center gap-2 hover:text-[#ff6b00] transition-colors group/link">
                    Contact Solutions Architect 
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
      
      {/* Simple Footer for the page */}
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-20 relative z-10 py-12">
        <div className="max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg">
               <span className="text-[#0c1a36] font-black text-sm md:text-lg tracking-tighter">B</span>
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
              BloomTech<span className="text-[#ff6b00]">US</span>
            </span>
          </div>
          <p className="text-white/50 font-medium text-sm md:text-base">© 2026 BloomTechUS. All rights reserved.</p>
        </div>
      </footer>

      {service && (
        <ExpertFormModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceName={service.name}
          serviceSlug={service.slug}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
