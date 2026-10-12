import { motion } from 'framer-motion';
import { 
  PenTool, Zap, Search, Sparkles, ShoppingCart, Building2,
  Code, Target, Globe, Shield, Server, ArrowRight, ChevronRight
} from 'lucide-react';

/**
 * CustomWebsitesDesignContent Component
 * Custom content section for Custom Website Design service
 */
interface CustomWebsitesDesignContentProps {
  onOpenModal: () => void;
}

export const CustomWebsitesDesignContent = ({ onOpenModal }: CustomWebsitesDesignContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Our Design Philosophy: The Three Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 mt-10"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Our Design Philosophy: The Three Pillars
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Art, Science, and Strategy</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* High-Fidelity UI/UX Design */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
              <span className="text-5xl font-black text-[#101D36]/[0.08] leading-none mb-4 select-none">01</span>
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm mb-5">
                <PenTool size={20} className="text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-bold text-[#101D36] mb-3 leading-snug">High-Fidelity UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Utilizing industry-leading creative stacks &mdash; including <span className="text-[#101D36] font-bold">Canva Enterprise</span> and <span className="text-[#101D36] font-bold">Freepik Premium</span> &mdash; we craft visual identities focused on "User Intent," ensuring every pixel serves a purpose.
              </p>
            </div>

            {/* Performance-Driven Engineering */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
              <span className="text-5xl font-black text-[#101D36]/[0.08] leading-none mb-4 select-none">02</span>
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm mb-5">
                <Zap size={20} className="text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-bold text-[#101D36] mb-3 leading-snug">Performance-Driven Engineering</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A beautiful site is useless if it's slow. We build on clean, bloat-free code optimized for <span className="text-[#101D36] font-bold">Core Web Vitals</span>, ensuring sub-second load times and flawless mobile responsiveness.
              </p>
            </div>

            {/* SEO & Content Strategy */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
              <span className="text-5xl font-black text-[#101D36]/[0.08] leading-none mb-4 select-none">03</span>
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm mb-5">
                <Search size={20} className="text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-bold text-[#101D36] mb-3 leading-snug">SEO & Content Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We bake SEO into the foundation of your site &mdash; schema markup, metadata architecture &mdash; and use AI tools like <span className="text-[#101D36] font-bold">Anthropic Claude</span> to refine messaging for your audience.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Specialized Web Solutions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#101D36] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Specialized Web Solutions
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">The specific engines your business needs to grow</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* E-Commerce Powerhouses */}
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <ShoppingCart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">E-Commerce Powerhouses</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Custom <span className="text-[#101D36] font-bold">Shopify</span> and <span className="text-[#101D36] font-bold">WooCommerce</span> integrations designed for high-volume transactions and seamless checkout flows.
                </p>
              </div>
            </div>

            {/* Corporate Identity Hubs */}
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#101D36]/10 rounded-2xl flex items-center justify-center text-[#101D36]">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">Corporate Identity Hubs</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Professional, multi-page architectures for firms that need to project <span className="text-[#101D36] font-bold">authority and trust</span>.
                </p>
              </div>
            </div>

            {/* Custom Web Applications */}
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">Custom Web Applications</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bespoke portals, member areas, and internal tools built to solve specific <span className="text-[#101D36] font-bold">operational bottlenecks</span>.
                </p>
              </div>
            </div>

            {/* Landing Page Optimization */}
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#101D36]/10 rounded-2xl flex items-center justify-center text-[#101D36]">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">Landing Page Optimization</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  High-converting <span className="text-[#101D36] font-bold">"Lead Gen"</span> pages designed for specific ad campaigns (PPC/Social).
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Infrastructure Advantage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="bg-white border border-gray-200 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#101D36]/5 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10 text-pretty">
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                  <Server size={40} />
                </div>
                <h3 className="text-3xl font-black text-[#101D36] mb-6 leading-tight">
                  The <span className="text-[#ff6b00]">Infrastructure</span> Advantage
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
                  Most designers leave you to figure out hosting on your own. Because we specialize in <span className="text-[#101D36] font-bold">IT Infrastructure and Network Design</span>, your website is hosted on enterprise-grade server environments.
                </p>
                
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-1 bg-[#ff6b00] rounded-full"></div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <Shield size={14} /> Enterprise Infrastructure
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0 group-hover/item:scale-110 transition-transform">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#101D36] mb-1">DNS Management</h4>
                      <p className="text-gray-600 text-sm">Complete domain configuration and DNS optimization for maximum performance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#101D36]/10 rounded-xl flex items-center justify-center text-[#101D36] shrink-0 group-hover/item:scale-110 transition-transform">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#101D36] mb-1">SSL Certificates</h4>
                      <p className="text-gray-600 text-sm">Enterprise-grade security certificates ensuring encrypted, trusted connections.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0 group-hover/item:scale-110 transition-transform">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#101D36] mb-1">Server-Side Caching</h4>
                      <p className="text-gray-600 text-sm">Advanced caching strategies delivering instant page loads and superior UX.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Technical Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-32 pb-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              The Technical Tech Stack
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Professional toolset for scalable, secure sites</span>
            </h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-gray-200 bg-[#F5F6F8] relative z-10">
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-1">Category</div>
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-2">Our Toolset</div>
            </div>

            {/* Platforms */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Sparkles className="text-[#101D36]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Platforms</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Shopify Plus, WordPress (Headless), Webflow</p>
              </div>
            </div>

            {/* Frontend */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Code className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Frontend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">React.js, Next.js, Tailwind CSS</p>
              </div>
            </div>

            {/* Creative */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <PenTool className="text-[#101D36]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Creative</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Canva, Adobe Suite, Freepik Assets</p>
              </div>
            </div>

            {/* Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Sparkles className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Intelligence</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">AI-Driven Copywriting & Optimization (Claude/GPT-4)</p>
              </div>
            </div>

            {/* Hosting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Globe className="text-[#101D36]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Hosting</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">High-Performance Cloud (AWS / Google Cloud / Vercel)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-[#101D36] z-0"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Design Excellence</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Ready to Build a <span className="text-[#ff6b00]">Digital Masterpiece?</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                Let's design a website that doesn't just look beautiful—but converts visitors into customers and projects the authority your brand deserves.
              </p>
              
              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-[45%] w-full bg-white border border-gray-200 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-[#101D36] mb-2">Start Your Project</h3>
                  <p className="text-gray-600 text-sm">Let's build something extraordinary</p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-[#F5F6F8] border border-gray-200 rounded-xl px-5 py-4 text-[#101D36] placeholder-gray-400 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Project Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-[#F5F6F8] border border-gray-200 rounded-xl px-5 py-4 text-[#101D36] focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Type...</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Platform</option>
                        <option value="corporate" className="text-gray-900 bg-white">Corporate Website</option>
                        <option value="webapp" className="text-gray-900 bg-white">Web Application</option>
                        <option value="landing" className="text-gray-900 bg-white">Landing Page</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <ChevronRight size={18} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={onOpenModal}
                  className="mt-2 w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                >
                  Request Project Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
