import { motion } from 'framer-motion';
import { 
  TrendingUp, Zap, PenTool, Target, ShoppingCart, Search, BarChart3,
  CheckCircle2, ArrowRight, ChevronRight, Sparkles, Eye, Globe, Repeat
} from 'lucide-react';

/**
 * OnlineMarketingContent Component
 * Custom content section for Online Marketing Services
 */
interface OnlineMarketingContentProps {
  onOpenModal: () => void;
}

export const OnlineMarketingContent = ({ onOpenModal }: OnlineMarketingContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Our Core Growth Pillars */}
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
              Our Core Growth Pillars
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Balancing technical precision with creative excellence</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Technical SEO & Core Web Vitals */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm">
                  <Zap size={20} className="text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#101D36]">Technical SEO & Core Web Vitals</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Search engines favor performance. Leveraging our <span className="text-[#101D36] font-bold">Custom Server & Infrastructure</span> expertise, we optimize your site's backend for maximum search visibility.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Speed:</strong> Sub-second load times to improve rankings</span></li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Architecture:</strong> Schema markup and flawless mobile indexing</span></li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Stability:</strong> Enterprise-grade server environments</span></li>
              </ul>
            </div>

            {/* Strategic Content Marketing */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm">
                  <PenTool size={20} className="text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#101D36]">Strategic Content Marketing</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                We use <span className="text-[#101D36] font-bold">Advanced AI (Anthropic/Claude)</span> and deep industry research to produce high-authority content that establishes your brand as a thought leader.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Thought Leadership:</strong> Whitepapers, case studies, landing pages</span></li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Human-Centric:</strong> Writing for humans first</span></li>
              </ul>
            </div>

            {/* Precision Paid Acquisition (PPC) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm">
                  <Target size={20} className="text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#101D36]">Precision Paid Acquisition (PPC)</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Stop wasting ad spend on irrelevant traffic. We treat your budget like a <span className="text-[#101D36] font-bold">financial asset</span>, maximizing every dollar invested.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Targeted Campaigns:</strong> Google Ads and Meta with "Negative Keyword" filtering</span></li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">A/B Testing:</strong> Continuous split testing for lowest CPA</span></li>
              </ul>
            </div>

            {/* Specialized E-Commerce Growth */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm">
                  <ShoppingCart size={20} className="text-[#ff6b00]" />
                </div>
                <h3 className="text-xl font-bold text-[#101D36]">Specialized E-Commerce Growth</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Optimized for <span className="text-[#101D36] font-bold">Shopify</span> and high-volume digital storefronts, we build full-funnel strategies that convert browsers into buyers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Full-Funnel Strategy:</strong> Product pages for "Buyer Intent" keywords</span></li>
                <li className="flex items-start gap-2 text-gray-700"><CheckCircle2 size={14} className="text-[#ff6b00] shrink-0 mt-1" /> <span><strong className="text-[#101D36]">Automation:</strong> Abandoned cart recovery, retargeting</span></li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* The 4-Phase Growth Lifecycle */}
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
              The 4-Phase Growth Lifecycle
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Data-driven optimization from audit to scale</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-[#101D36] z-0"></div>
            
            {[
              { phase: '1', title: 'Deep Audit & Baseline', desc: 'Analyzing your current traffic, technical debt, and competitor positioning to establish clear KPIs.' },
              { phase: '2', title: 'Infrastructure Hardening', desc: 'Fixing technical SEO issues and speed bottlenecks before driving new traffic to your site.' },
              { phase: '3', title: 'Campaign Deployment', desc: 'Launching high-authority content and targeted ad sets across search and social platforms.' },
              { phase: '4', title: 'Agile Optimization', desc: 'Reviewing data weekly to double down on what works and cut what doesn\'t for maximum ROI.' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start gap-6 bg-[#F5F6F8] md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-gray-100 md:border-transparent mt-4 md:mt-0 group">
                <div className="w-16 h-16 rounded-2xl bg-[#101D36] border-2 border-white shadow-sm flex items-center justify-center font-black text-white text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  {p.phase}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#101D36] mb-3 tracking-tight">{p.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-medium text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Marketing Stack */}
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
              Technical Marketing Stack
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Professional tools for granular tracking and execution</span>
            </h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-3 border-b border-gray-200 bg-[#F5F6F8] relative z-10">
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-1">Category</div>
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-2">Our Marketing Stack</div>
            </div>

            {/* Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <BarChart3 className="text-[#101D36]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Analytics</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Google Analytics 4 (GA4), GTM, Microsoft Clarity (Heatmaps)</p>
              </div>
            </div>

            {/* SEO Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Search className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">SEO Tools</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Ahrefs, SEMRush, Screaming Frog (Technical Crawling)</p>
              </div>
            </div>

            {/* Content AI */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Sparkles className="text-[#101D36]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Content AI</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Anthropic Claude-3.5-Sonnet for high-fidelity copy</p>
              </div>
            </div>

            {/* Creative */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <Eye className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">Creative</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Canva Enterprise & Freepik Premium for high-res assets</p>
              </div>
            </div>

            {/* E-Commerce */}
            <div className="grid grid-cols-1 lg:grid-cols-3 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                <ShoppingCart className="text-[#101D36]" size={24} />
                <span className="text-xl font-bold text-[#101D36] tracking-wide">E-Commerce</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Shopify Flow & Facebook Conversions API (CAPI)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance-First Approach */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 lg:mt-32 relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-[#F5F6F8] z-0"></div>

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
               <div className="w-20 h-20 bg-[#101D36] rounded-2xl shadow-sm flex items-center justify-center text-white mb-8">
                  <TrendingUp size={40} />
               </div>
               <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Measurable ROI</h3>
               <h2 className="text-4xl lg:text-6xl font-black text-[#101D36] tracking-tighter leading-[1.1] mb-8">
                  Marketing That Pays for Itself.
                  <span className="block text-2xl lg:text-3xl text-gray-500 font-medium mt-4 tracking-normal italic">Data-driven. Performance-led.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  We move beyond vanity metrics to deliver <span className="text-[#101D36] font-bold">measurable ROI</span>. By combining high-level technical SEO with aggressive digital marketing strategies, we ensure your business doesn't just rank—it dominates.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp size={18} className="text-[#101D36]" />
                      <h4 className="text-lg font-bold text-[#101D36]">Scalable Growth</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Campaigns designed to scale with your business ambitions and budget.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe size={18} className="text-[#101D36]" />
                      <h4 className="text-lg font-bold text-[#101D36]">Multi-Channel</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Integrated strategies across SEO, PPC, content, and social media.</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Repeat size={18} className="text-[#101D36]" />
                      <h4 className="text-lg font-bold text-[#101D36]">Continuous Optimization</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Weekly reviews and agile adjustments for maximum campaign efficiency.</p>
                  </div>
                </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
               <div className="relative">
                  <TrendingUp size={200} className="text-gray-200 relative z-10" />
                  <BarChart3 size={60} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#101D36]" />
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Growth Strategy</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Ready to <span className="text-[#ff6b00]">Dominate Your Market?</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                Let's build a marketing engine that drives qualified leads, increases conversions, and delivers measurable ROI—month after month.
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
                  <h3 className="text-2xl font-black text-[#101D36] mb-2">Free Marketing Audit</h3>
                  <p className="text-gray-600 text-sm">Discover untapped growth opportunities</p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="Alex Johnson" className="w-full bg-[#F5F6F8] border border-gray-200 rounded-xl px-5 py-4 text-[#101D36] placeholder-gray-400 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Marketing Focus</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-[#F5F6F8] border border-gray-200 rounded-xl px-5 py-4 text-[#101D36] focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Focus...</option>
                        <option value="seo" className="text-gray-900 bg-white">Technical SEO</option>
                        <option value="ppc" className="text-gray-900 bg-white">Paid Advertising (PPC)</option>
                        <option value="content" className="text-gray-900 bg-white">Content Marketing</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Growth</option>
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
                  Get Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
