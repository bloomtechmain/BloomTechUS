import { motion } from 'framer-motion';
import { Code, Lock, Database, Zap, Cloud, Target, Workflow, FileSearch, Palette, Rocket } from 'lucide-react';
/**
 * CustomMobileWebAppsContent Component
 * Custom content section for Custom Mobile & Web Applications service
 */
interface CustomMobileWebAppsContentProps {
  onOpenModal: () => void;
}

export const CustomMobileWebAppsContent = ({ onOpenModal }: CustomMobileWebAppsContentProps) => {
  return (
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Why Choose Custom Solutions? */}
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
              Why Choose Custom Solutions?
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Breaking free from "off-the-shelf" limitations</span>
            </h2>
          </div>
          
          <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-12 mb-12">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium mb-8">
              Generic, <span className="text-brand-orange font-bold">"off-the-shelf"</span> platforms often create <span className="text-navy font-bold">"Excel-and-Email" chaos</span>, cluttered with features you don't use while lacking the specific integrations needed to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              { icon: Workflow, title: 'Tailored Workflows', desc: <>We design systems that <span className="text-navy font-bold">mimic your team's natural processes</span>, eliminating friction and accelerating adoption.</> },
              { icon: Target, title: 'Conversion-First Design', desc: <>Every pixel and interaction is engineered to serve a <span className="text-navy font-bold">specific business purpose and user intent</span>.</> },
              { icon: Lock, title: 'Proprietary Logic', desc: <>You own the <span className="text-navy font-bold">logic layer and data</span>, eliminating fluctuating "per-user" licensing fees.</> },
              { icon: Zap, title: 'Performance-Driven Engineering', desc: <>Apps are built on <span className="text-navy font-bold">clean code optimized for sub-second load times</span> and flawless responsiveness.</> }
            ].map((item) => (
              <div key={item.title} className="bg-navy-wash p-7">
                <div className="flex items-center gap-3 mb-3">
                  
                  <h3 className="text-base font-bold text-navy">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Development Pillars */}
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
              Specialized Development Pillars
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Bespoke engines tailored to solve operational bottlenecks</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-split-navy rounded-[40px] p-6 md:p-10">

            {/* Enterprise Ecosystems (CRM & ERP) */}
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8">
                            <h3 className="text-lg font-bold text-navy mb-2 leading-snug">Enterprise Ecosystems (CRM & ERP)</h3>
              <p className="text-gray-600 text-sm mb-5">Manage resources and customers in one seamless dashboard.</p>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Precision ERP:</strong> Inventory, HR, order processing, supply chain</span></li>
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Tailored CRM:</strong> Lead capture and retention analytics</span></li>
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Financial Sync:</strong> Automated invoicing, real-time P&amp;L</span></li>
              </ul>
            </div>

            {/* High-Performance Commerce & Portals */}
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8">
                            <h3 className="text-lg font-bold text-navy mb-2 leading-snug">High-Performance Commerce & Portals</h3>
              <p className="text-gray-600 text-sm mb-5">Custom storefronts and secure client portals.</p>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">E-Commerce:</strong> High-volume transactions, seamless checkout</span></li>
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Client Portals:</strong> RBAC and audit-ready logging</span></li>
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Web Portals:</strong> Bespoke tools for operational bottlenecks</span></li>
              </ul>
            </div>

            {/* Intelligent Automation & Proximity */}
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8">
                            <h3 className="text-lg font-bold text-navy mb-2 leading-snug">Intelligent Automation & Proximity</h3>
              <p className="text-gray-600 text-sm mb-5">Document intelligence and proximity-based mobile tools.</p>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Document Intelligence:</strong> Reads unstructured data, predictive forecasting</span></li>
                <li className="flex items-start gap-2 text-gray-600"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Proximity Apps:</strong> QR and NFC for secure asset tracking</span></li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* The Infrastructure Advantage */}
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
              The Infrastructure Advantage
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Enterprise-grade infrastructure for maximum uptime and security</span>
            </h2>
          </div>
          
          <div className="bg-navy-wash border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-2 border-b border-gray-200 bg-grey-light relative z-10">
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm">Category</div>
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm">Our Technical Selection</div>
            </div>

            {/* Backend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                
                <span className="text-xl font-bold text-navy tracking-wide">Backend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Python (Django/FastAPI), Node.js, or Go</p>
              </div>
            </div>

            {/* Frontend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                
                <span className="text-xl font-bold text-navy tracking-wide">Frontend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">React.js, Next.js, or Tailwind CSS</p>
              </div>
            </div>

            {/* Database */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                
                <span className="text-xl font-bold text-navy tracking-wide">Database</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">PostgreSQL, MySQL, or MongoDB</p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                
                <span className="text-xl font-bold text-navy tracking-wide">Infrastructure</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">AWS, Google Cloud, Azure, or On-Premise AMD EPYC clusters</p>
              </div>
            </div>

            {/* Security */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-100 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                
                <span className="text-xl font-bold text-navy tracking-wide">Security</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">End-to-End Encryption and Multi-Factor Authentication (MFA)</p>
              </div>
            </div>

            {/* Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 hover:shadow-sm transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                
                <span className="text-xl font-bold text-navy tracking-wide">Automation</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">Custom CI/CD pipelines for "zero-downtime" updates</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unified Development Roadmap */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-navy tracking-tighter mb-6">
              Our Unified <span className="text-brand-orange">Development Roadmap</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium tracking-tight">
              A 4-stage <span className="text-navy font-bold">"Business-First"</span> process to ensure a smooth transition from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { 
                step: '01', 
                title: 'Strategy & Workflow Mapping', 
                desc: 'We map your current manual processes and user journeys before writing code.', 
                icon: FileSearch 
              },
              { 
                step: '02', 
                title: 'Creative Architecture', 
                desc: 'We deliver high-fidelity mockups and technical blueprints that bring your brand\'s personality to life.', 
                icon: Palette 
              },
              { 
                step: '03', 
                title: 'Iterative Development', 
                desc: 'We build in "Sprints," integrating essential APIs and giving you access to staging environments for real-time testing.', 
                icon: Code 
              },
              { 
                step: '04', 
                title: 'Launch & Optimization', 
                desc: 'We handle data migration and staff training, followed by continuous post-launch performance tuning.', 
                icon: Rocket 
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group p-10 rounded-[40px] bg-gray-50 border border-gray-200 hover:shadow-sm transition-all hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-navy border-2 border-white rounded-2xl flex items-center justify-center text-brand-orange font-black text-2xl z-10 shadow-sm">
                  {item.step}
                </div>
                <div className="mb-10 text-gray-400 group-hover:text-brand-orange transition-colors">
                  
                </div>
                <h4 className="text-2xl font-black text-navy mb-6 tracking-tight leading-none">{item.title}</h4>
                <p className="text-gray-500 text-[15px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Custom Development</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Ready to Build Your <span className="text-brand-orange">Custom Application?</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                Let's create a high-performance mobile or web application that doesn't just meet your needs—it transforms how your business operates.
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
                  <h3 className="text-2xl font-black text-navy mb-2">Start Your Custom Build</h3>
                  <p className="text-gray-600 text-sm">Transform your business operations</p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-grey-light border border-gray-200 rounded-xl px-5 py-4 text-navy placeholder-gray-400 focus:outline-none focus:border-brand-orange/50 focus:bg-gray-100 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Application Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-grey-light border border-gray-200 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-brand-orange/50 focus:bg-gray-100 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Type...</option>
                        <option value="crm-erp" className="text-gray-900 bg-white">CRM/ERP System</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Platform</option>
                        <option value="portal" className="text-gray-900 bg-white">Client Portal</option>
                        <option value="mobile" className="text-gray-900 bg-white">Mobile Application</option>
                        <option value="automation" className="text-gray-900 bg-white">Automation Tool</option>
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
                  Request Development Quote 
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
