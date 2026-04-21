import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin, Network, Layout } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c1a36] text-white py-24 px-6">
      <div className="max-w-[1550px] mx-auto px-6 xl:px-12 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
            <img src="/bloomtech-logo.png" alt="BloomTech Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-4xl font-black tracking-tighter">BloomTech<span className="text-[#ff6b00]">USA</span></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center md:text-left w-full border-y border-white/10 py-16 mb-12">
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Solutions</h5>
            <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
              <li><Link to="/services/ai-machine-learning" className="hover:text-[#ff6b00] transition-colors">AI & ML</Link></li>
              <li><Link to="/services/it-network-infrastructure" className="hover:text-[#ff6b00] transition-colors">Infrastructure</Link></li>
              <li><Link to="/services/custom-crm-erp-solutions" className="hover:text-[#ff6b00] transition-colors">Business Apps</Link></li>
              <li><Link to="/services/custom-websites-design" className="hover:text-[#ff6b00] transition-colors">Web Design</Link></li>
              <li><Link to="/services/professional-it-consulting" className="hover:text-[#ff6b00] transition-colors">IT Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Services</h5>
            <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
              <li><Link to="/services/professional-it-consulting" className="hover:text-[#ff6b00] transition-colors">Consulting</Link></li>
              <li><Link to="/services/security-data-protection" className="hover:text-[#ff6b00] transition-colors">Security</Link></li>
              <li><Link to="/services/cloud-hosting-deployment" className="hover:text-[#ff6b00] transition-colors">Cloud Hosting</Link></li>
              <li><Link to="/services/managed-av-services" className="hover:text-[#ff6b00] transition-colors">Managed AV</Link></li>
              <li><Link to="/services/asset-lifecycle-management" className="hover:text-[#ff6b00] transition-colors">Asset Lifecycle</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Company</h5>
            <ul className="space-y-4 text-sm font-bold opacity-60 uppercase">
              <li><Link to="/company" className="hover:text-[#ff6b00] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff6b00] transition-colors">Contact</Link></li>
              <li><Link to="/company#mission" className="hover:text-[#ff6b00] transition-colors">Our Mission</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Find Us On</h5>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-black text-xs uppercase tracking-widest text-[#5b6e8a] mb-8">Contact Us Directly</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-sm opacity-60">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <a href="tel:+17373298158" className="font-bold hover:text-[#ff6b00] transition-colors">
                  (737) 329-8158
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm opacity-60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
                <span className="font-bold">
                  11801 Domain Blvd, Austin, TX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#5b6e8a] items-center">
            <span>© 2026 BloomTechUSA</span>
            <a 
              href="https://bloomtech.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#ff6b00] transition-colors"
            >
              <span className="text-lg">🇱🇰</span>
              <span>BloomTech.lk</span>
            </a>
          </div>
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-[#ff6b00] transition-all cursor-pointer">
              <Network size={14} />
            </div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-[#ff6b00] transition-all cursor-pointer">
              <Layout size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
