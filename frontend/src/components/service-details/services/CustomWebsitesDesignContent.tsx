import { motion } from 'framer-motion';
import { 
  PenTool, Zap, Search, Sparkles, TrendingUp, ShoppingCart, Building2, 
  Code, Target, Globe, Shield, Server, CheckCircle2, ArrowRight, ChevronRight
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
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Our Design Philosophy: The Three Pillars
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Art, Science, and Strategy</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. High-Fidelity UI/UX Design */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <PenTool size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">High-Fidelity UI/UX Design</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  Utilizing industry-leading creative stacks—including <span className="text-[#ff6b00] font-bold">Canva Enterprise</span> and <span className="text-[#ff6b00] font-bold">Freepik Premium</span> assets—we craft visual identities that stand out. Our focus is on <span className="text-white font-bold">"User Intent,"</span> ensuring that every pixel serves a purpose and every click leads to a conversion.
                </p>
              </div>
            </div>

            {/* II. Performance-Driven Engineering */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Performance-Driven Engineering</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  A beautiful site is useless if it's slow. We build on clean, bloat-free code optimized for <span className="text-blue-400 font-bold">Core Web Vitals</span>. Whether it is a headless Shopify build or a custom React application, we ensure <span className="text-white font-bold">sub-second load times</span> and flawless mobile responsiveness.
                </p>
              </div>
            </div>

            {/* III. SEO & Content Strategy */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Search size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">SEO & Content Strategy</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg">
                  We bake Search Engine Optimization into the foundation of your site. From <span className="text-[#ff6b00] font-bold">schema markup</span> to metadata architecture, we ensure your site is discoverable. We leverage advanced AI tools like <span className="text-blue-400 font-bold">Anthropic Claude</span> to refine messaging that resonates with your specific target audience.
                </p>
              </div>
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
            <div className="h-10 w-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              Specialized Web Solutions
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">The specific engines your business needs to grow</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* E-Commerce Powerhouses */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <ShoppingCart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">E-Commerce Powerhouses</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Custom <span className="text-white font-bold">Shopify</span> and <span className="text-white font-bold">WooCommerce</span> integrations designed for high-volume transactions and seamless checkout flows.
                </p>
              </div>
            </div>

            {/* Corporate Identity Hubs */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Corporate Identity Hubs</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Professional, multi-page architectures for firms that need to project <span className="text-white font-bold">authority and trust</span>.
                </p>
              </div>
            </div>

            {/* Custom Web Applications */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Custom Web Applications</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Bespoke portals, member areas, and internal tools built to solve specific <span className="text-white font-bold">operational bottlenecks</span>.
                </p>
              </div>
            </div>

            {/* Landing Page Optimization */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Landing Page Optimization</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  High-converting <span className="text-white font-bold">"Lead Gen"</span> pages designed for specific ad campaigns (PPC/Social).
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
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 relative z-10 text-pretty">
              <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-8">
                  <Server size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                  The <span className="text-[#ff6b00]">Infrastructure</span> Advantage
                </h3>
                <p className="text-lg text-white/80 leading-relaxed font-medium mb-8">
                  Most designers leave you to figure out hosting on your own. Because we specialize in <span className="text-white font-bold">IT Infrastructure and Network Design</span>, your website is hosted on enterprise-grade server environments.
                </p>
                
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-1 bg-[#ff6b00] rounded-full"></div>
                  <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                    <Shield size={14} /> Enterprise Infrastructure
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0 group-hover/item:scale-110 transition-transform">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">DNS Management</h4>
                      <p className="text-white/60 text-sm">Complete domain configuration and DNS optimization for maximum performance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover/item:scale-110 transition-transform">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">SSL Certificates</h4>
                      <p className="text-white/60 text-sm">Enterprise-grade security certificates ensuring encrypted, trusted connections.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group/item">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00] shrink-0 group-hover/item:scale-110 transition-transform">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Server-Side Caching</h4>
                      <p className="text-white/60 text-sm">Advanced caching strategies delivering instant page loads and superior UX.</p>
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
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">
              The Technical Tech Stack
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Professional toolset for scalable, secure sites</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-white/10 bg-black/20 relative z-10">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-1">Category</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm col-span-2">Our Toolset</div>
            </div>

            {/* Platforms */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Sparkles className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Platforms</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Shopify Plus, WordPress (Headless), Webflow</p>
              </div>
            </div>

            {/* Frontend */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Code className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Frontend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">React.js, Next.js, Tailwind CSS</p>
              </div>
            </div>

            {/* Creative */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <PenTool className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Creative</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Canva, Adobe Suite, Freepik Assets</p>
              </div>
            </div>

            {/* Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Sparkles className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Intelligence</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">AI-Driven Copywriting & Optimization (Claude/GPT-4)</p>
              </div>
            </div>

            {/* Hosting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Globe className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Hosting</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">High-Performance Cloud (AWS / Google Cloud / Vercel)</p>
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
          className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Design Excellence</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Build a <span className="text-[#ff6b00]">Digital Masterpiece?</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Let's design a website that doesn't just look beautiful—but converts visitors into customers and projects the authority your brand deserves.
              </p>
              
              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-[#ff6b00] rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/50 rounded-full"></div>
                <div className="w-2 h-2 bg-[#ff6b00]/20 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-[45%] w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ff6b00]/20 blur-2xl rounded-full pointer-events-none"></div>
              <div className="flex flex-col gap-6 relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-white mb-2">Start Your Project</h3>
                  <p className="text-white/60 text-sm">Let's build something extraordinary</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Project Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Type...</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Platform</option>
                        <option value="corporate" className="text-gray-900 bg-white">Corporate Website</option>
                        <option value="webapp" className="text-gray-900 bg-white">Web Application</option>
                        <option value="landing" className="text-gray-900 bg-white">Landing Page</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
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
