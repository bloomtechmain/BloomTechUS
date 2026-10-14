import { motion } from 'framer-motion';
/**
 * CustomWebsitesDesignContent Component
 * Custom content section for Custom Website Design service
 */
interface CustomWebsitesDesignContentProps {
  onOpenModal: () => void;
}
export const CustomWebsitesDesignContent = ({ onOpenModal }: CustomWebsitesDesignContentProps) => {
  return (
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        {/* Our Design Philosophy: The Three Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              Our Design Philosophy: The Three Pillars
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Art, Science, and Strategy</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-split-navy rounded-[40px] p-6 md:p-10">
            {/* High-Fidelity UI/UX Design */}
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8 flex flex-col">
              <span className="text-5xl font-black text-navy/[0.08] leading-none mb-4 select-none">01</span>
                            <h3 className="text-lg font-bold text-navy mb-3 leading-snug">High-Fidelity UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Utilizing industry-leading creative stacks &mdash; including <span className="text-navy font-bold">Canva Enterprise</span> and <span className="text-navy font-bold">Freepik Premium</span> &mdash; we craft visual identities focused on "User Intent," ensuring every pixel serves a purpose.
              </p>
            </div>
            {/* Performance-Driven Engineering */}
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8 flex flex-col">
              <span className="text-5xl font-black text-navy/[0.08] leading-none mb-4 select-none">02</span>
                            <h3 className="text-lg font-bold text-navy mb-3 leading-snug">Performance-Driven Engineering</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A beautiful site is useless if it's slow. We build on clean, bloat-free code optimized for <span className="text-navy font-bold">Core Web Vitals</span>, ensuring sub-second load times and flawless mobile responsiveness.
              </p>
            </div>
            {/* SEO & Content Strategy */}
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8 flex flex-col">
              <span className="text-5xl font-black text-navy/[0.08] leading-none mb-4 select-none">03</span>
                            <h3 className="text-lg font-bold text-navy mb-3 leading-snug">SEO & Content Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We bake SEO into the foundation of your site &mdash; schema markup, metadata architecture &mdash; and use AI tools like <span className="text-navy font-bold">Anthropic Claude</span> to refine messaging for your audience.
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
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-navy rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              Specialized Web Solutions
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">The specific engines your business needs to grow</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-split-navy rounded-[40px] p-6 md:p-10">
            {[
              { title: 'E-Commerce Powerhouses', tag: 'Commerce', shape: 'card-shape-a', tagClass: 'bg-brand-orange/10 text-brand-orange-dark', desc: <>Custom <span className="text-navy font-bold">Shopify</span> and <span className="text-navy font-bold">WooCommerce</span> integrations designed for high-volume transactions and seamless checkout flows.</> },
              { title: 'Corporate Identity Hubs', tag: 'Branding', shape: 'card-shape-b', tagClass: 'bg-teal-wash text-teal-dark', desc: <>Professional, multi-page architectures for firms that need to project <span className="text-navy font-bold">authority and trust</span>.</> },
              { title: 'Custom Web Applications', tag: 'Software', shape: 'card-shape-c', tagClass: 'bg-violet-wash text-violet-dark', desc: <>Bespoke portals, member areas, and internal tools built to solve specific <span className="text-navy font-bold">operational bottlenecks</span>.</> },
              { title: 'Landing Page Optimization', tag: 'Conversion', shape: 'card-shape-d', tagClass: 'bg-gold-wash text-gold-dark', desc: <>High-converting <span className="text-navy font-bold">"Lead Gen"</span> pages designed for specific ad campaigns (PPC/Social).</> },
            ].map((item) => (
              <div key={item.title} className={`bg-white border border-gray-200 ${item.shape} overflow-hidden group hover:shadow-md transition-all hover:-translate-y-1`}>
                <div className="p-8 lg:p-10">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${item.tagClass}`}>{item.tag}</span>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* The Infrastructure Advantage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-12 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row gap-12 relative z-10 text-pretty">
              <div className="lg:w-1/2">
                                <h3 className="text-3xl font-black text-navy mb-6 leading-tight">
                  The <span className="text-brand-orange">Infrastructure</span> Advantage
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
                  Most designers leave you to figure out hosting on your own. Because we specialize in <span className="text-navy font-bold">IT Infrastructure and Network Design</span>, your website is hosted on enterprise-grade server environments.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-1 bg-brand-orange rounded-full"></div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                     Enterprise Infrastructure
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 border-l-4 border-l-brand-orange rounded-2xl p-6 hover:shadow-sm transition-colors group/item">
                  <h4 className="text-lg font-bold text-navy mb-1">DNS Management</h4>
                  <p className="text-gray-600 text-sm">Complete domain configuration and DNS optimization for maximum performance.</p>
                </div>
                <div className="bg-white border border-gray-200 border-l-4 border-l-teal rounded-2xl p-6 hover:shadow-sm transition-colors group/item">
                  <h4 className="text-lg font-bold text-navy mb-1">SSL Certificates</h4>
                  <p className="text-gray-600 text-sm">Enterprise-grade security certificates ensuring encrypted, trusted connections.</p>
                </div>
                <div className="bg-white border border-gray-200 border-l-4 border-l-violet rounded-2xl p-6 hover:shadow-sm transition-colors group/item">
                  <h4 className="text-lg font-bold text-navy mb-1">Server-Side Caching</h4>
                  <p className="text-gray-600 text-sm">Advanced caching strategies delivering instant page loads and superior UX.</p>
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
          className="mt-16 pb-10"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              The Technical Tech Stack
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Professional toolset for scalable, secure sites</span>
            </h2>
          </div>
          <div className="bg-navy-wash border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-gray-200 bg-grey-light relative z-10">
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-1">Category</div>
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-2">Our Toolset</div>
            </div>
            {/* Platforms */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <span className="text-xl font-bold text-navy tracking-wide">Platforms</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Shopify Plus, WordPress (Headless), Webflow</p>
              </div>
            </div>
            {/* Frontend */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <span className="text-xl font-bold text-navy tracking-wide">Frontend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">React.js, Next.js, Tailwind CSS</p>
              </div>
            </div>
            {/* Creative */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <span className="text-xl font-bold text-navy tracking-wide">Creative</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Canva, Adobe Suite, Freepik Assets</p>
              </div>
            </div>
            {/* Intelligence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <span className="text-xl font-bold text-navy tracking-wide">Intelligence</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">AI-Driven Copywriting & Optimization (Claude/GPT-4)</p>
              </div>
            </div>
            {/* Hosting */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <span className="text-xl font-bold text-navy tracking-wide">Hosting</span>
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
          className="mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-navy-gradient z-0"></div>
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Design Excellence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Ready to Build a <span className="text-brand-orange">Digital Masterpiece?</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                Let's design a website that doesn't just look beautiful—but converts visitors into customers and projects the authority your brand deserves.
              </p>
              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-brand-orange rounded-full"></div>
                <div className="w-2 h-2 bg-brand-orange/50 rounded-full"></div>
                <div className="w-2 h-2 bg-brand-orange/20 rounded-full"></div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full bg-navy-wash border border-gray-200 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-navy mb-2">Start Your Project</h3>
                  <p className="text-gray-600 text-sm">Let's build something extraordinary</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-grey-light border border-gray-200 rounded-xl px-5 py-4 text-navy placeholder-gray-400 focus:outline-none focus:border-brand-orange/50 focus:bg-gray-100 transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Project Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-grey-light border border-gray-200 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-brand-orange/50 focus:bg-gray-100 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Type...</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Platform</option>
                        <option value="corporate" className="text-gray-900 bg-white">Corporate Website</option>
                        <option value="webapp" className="text-gray-900 bg-white">Web Application</option>
                        <option value="landing" className="text-gray-900 bg-white">Landing Page</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={onOpenModal}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                >
                  Request Project Quote 
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
