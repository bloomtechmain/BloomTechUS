import { motion } from 'framer-motion';
import { Layers, Zap, Search, RefreshCcw } from 'lucide-react';
/**
 * CustomCRMContent Component
 * Custom content section for Custom CRM/ERP Solutions service
 */
interface CustomCRMContentProps {
  onOpenModal: () => void;
}

export const CustomCRMContent = ({ onOpenModal }: CustomCRMContentProps) => {
  return (
    <section className="py-20 relative bg-grey-light">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Core CRM/ERP Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 border border-gray-200 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                <span className="text-navy text-[10px] font-black uppercase tracking-widest">Performance Engineering</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-navy tracking-tighter leading-[1.1] mb-8">
                The Power of <span className="text-navy italic font-serif">Custom Integration</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
                Why settle for "Off-the-Shelf" when your business is anything but generic? Platforms like Salesforce or SAP often fail small-to-mid-sized businesses by being overly complex and prohibitively expensive. We build tools that fit your business, not the other way around.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-700 font-bold group">
                  <div className="w-10 h-10 rounded-full bg-navy/5 border border-gray-200 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                  </div>
                  100% Intellectual Property Ownership
                </div>
                <div className="flex items-center gap-4 text-gray-700 font-bold group">
                  <div className="w-10 h-10 rounded-full bg-navy/5 border border-gray-200 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                  </div>
                  Zero "Per-User" Monthly Fees
                </div>
                <div className="flex items-center gap-4 text-gray-700 font-bold group">
                  <div className="w-10 h-10 rounded-full bg-navy/5 border border-gray-200 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                  </div>
                  Seamless Legacy System Extraction
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-brand-orange-wash border border-gray-200 rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-7 flex flex-col justify-between hover:shadow-sm transition-all group">
                <span className="text-3xl font-black text-brand-orange/25 leading-none mb-6">01</span>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">CRM</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Every lead, deal and follow-up tracked in one customer lifecycle view.</p>
                </div>
              </div>
              <div className="bg-teal-wash border border-gray-200 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-lg rounded-br-lg p-7 flex flex-col justify-between hover:shadow-sm transition-all translate-y-8 group">
                <span className="text-3xl font-black text-teal/25 leading-none mb-6">02</span>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">ERP</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Inventory, HR and order processing unified into a single resource engine.</p>
                </div>
              </div>
              <div className="bg-violet-wash border border-gray-200 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-lg rounded-br-lg p-7 flex flex-col justify-between hover:shadow-sm transition-all group">
                <span className="text-3xl font-black text-violet/25 leading-none mb-6">03</span>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">Data Labs</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">One single source of truth, feeding every report and dashboard you run.</p>
                </div>
              </div>
              <div className="bg-gold-wash border border-gray-200 rounded-tl-[40px] rounded-br-[40px] rounded-tr-lg rounded-bl-lg p-7 flex flex-col justify-between hover:shadow-sm transition-all translate-y-8 group">
                <span className="text-3xl font-black text-gold/25 leading-none mb-6">04</span>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">Fiscal Sync</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Automated invoicing and real-time P&amp;L, synced straight from operations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Pillar I: Tailored CRM */}
            <div className="bg-brand-orange-wash border border-gray-200 card-shape-a p-10 relative overflow-hidden group">
              <h3 className="text-2xl font-black text-navy mb-4 tracking-tight">I. Tailored CRM</h3>
              <p className="text-brand-orange-dark font-bold text-sm uppercase tracking-widest mb-6">Own Your Customer Journey</p>
              <p className="text-gray-600 leading-relaxed mb-8 font-medium italic">
                Generic CRMs are cluttered with features you don't use. We build lean, high-velocity CRM systems that track exactly what matters to your sales cycle—from initial lead capture to automated follow-ups and long-term retention analytics.
              </p>
              <ul className="space-y-4">
                {['Lead Scoring Engine', 'Sales Pipeline Visuals', 'Automated Lead Triage'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar II: Precision ERP */}
            <div className="bg-teal-wash border border-gray-200 card-shape-b p-10 relative overflow-hidden group">
              <h3 className="text-2xl font-black text-navy mb-4 tracking-tight">II. Precision ERP</h3>
              <p className="text-teal-dark font-bold text-sm uppercase tracking-widest mb-6">The Engine of Your Business</p>
              <p className="text-gray-600 leading-relaxed mb-8 font-medium italic">
                Manage your resources, not just your data. Our custom ERPs integrate your core business processes—including Inventory Management, Human Resources, Order Processing, and Supply Chain Logistics—into one seamless dashboard.
              </p>
              <ul className="space-y-4">
                {['Inventory Forecasting', 'Resource Allocation', 'Logistics Tracking'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar III: Financial Synchronization */}
            <div className="bg-violet-wash border border-gray-200 card-shape-c p-10 relative overflow-hidden group">
              <h3 className="text-2xl font-black text-navy mb-4 tracking-tight">III. Fiscal Sync</h3>
              <p className="text-violet-dark font-bold text-sm uppercase tracking-widest mb-6">Real-time Financial Integration</p>
              <p className="text-gray-600 leading-relaxed mb-8 font-medium italic">
                Connect your operational data directly to your financial reporting. We build systems that automate invoicing, track project-based expenses, and provide real-time P&L visibility so you can make data-driven decisions instantly.
              </p>
              <ul className="space-y-4">
                {['Automated Invoicing', 'Expense Attribution', 'Live P&L Analytics'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialized Features for Scaling */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
                Specialized Features for Scaling
                <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Built for high-growth enterprise operations</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-split-navy rounded-[40px] p-6 md:p-10">
              <div className="bg-navy-wash border border-gray-200 card-shape-a p-8 hover:shadow-sm transition-all group relative overflow-hidden">
                                <h4 className="text-lg font-bold text-navy mb-3 tracking-wide relative z-10">Automated Lead Scoring</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium italic relative z-10">
                  Use AI-driven logic to prioritize high-value prospects and optimize your sales conversion funnel.
                </p>
              </div>

              <div className="bg-navy-wash border border-gray-200 card-shape-b p-8 hover:shadow-sm transition-all group relative overflow-hidden">
                                <h4 className="text-lg font-bold text-navy mb-3 tracking-wide relative z-10">Inventory & Logistics</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium italic relative z-10">
                  Real-time visibility of stock levels across multiple locations (ideal for companies like <span className="text-brand-orange">Bloom Logistics</span>).
                </p>
              </div>

              <div className="bg-navy-wash border border-gray-200 card-shape-a p-8 hover:shadow-sm transition-all group relative overflow-hidden">
                                <h4 className="text-lg font-bold text-navy mb-3 tracking-wide relative z-10">Custom Reporting Engines</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium italic relative z-10">
                  Generate one-click executive summaries, audit logs, and compliance reports tailored to your requirements.
                </p>
              </div>

              <div className="bg-navy-wash border border-gray-200 card-shape-b p-8 hover:shadow-sm transition-all group relative overflow-hidden">
                                <h4 className="text-lg font-bold text-navy mb-3 tracking-wide relative z-10">Advanced RBAC Security</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium italic relative z-10">
                  Ensure sensitive financial or client data is only visible to authorized personnel with mission-critical security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Tech Stack: Scalable Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-navy rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
                The Tech Stack: Scalable Architecture
                <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Battle-tested foundations for zero-downtime operations</span>
              </h2>
            </div>

            <div className="bg-navy-wash border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
                <div className="lg:col-span-4 bg-grey-light p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 relative overflow-hidden group/layer">
                  <div className="absolute -inset-10 bg-navy/5 blur-3xl opacity-0 group-hover/layer:opacity-100 transition-opacity"></div>
                  <h4 className="text-xl font-black text-navy tracking-wide mb-8 relative z-10">Built to Last</h4>
                  <div className="space-y-5 relative z-10">
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                      <p className="text-navy text-lg font-bold tracking-tight leading-snug">Built to handle your growth</p>
                      <p className="text-gray-500 text-xs mt-1.5">Powered by Python, Node.js, or Go</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                      <p className="text-navy text-lg font-bold tracking-tight leading-snug">Your data, organized and safe</p>
                      <p className="text-gray-500 text-xs mt-1.5">Industry-standard databases under the hood</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                      <p className="text-navy text-lg font-bold tracking-tight leading-snug">Fast, reliable hosting</p>
                      <p className="text-gray-500 text-xs mt-1.5">Dedicated servers or secure cloud — your choice</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-12 relative overflow-hidden group/layer">
                  <div className="absolute -inset-10 bg-brand-orange/5 blur-3xl opacity-0 group-hover/layer:opacity-100 transition-opacity"></div>
                  <h4 className="text-xl font-black text-navy tracking-wide mb-10 relative z-10">Connected & Protected</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                    <div>
                      <p className="text-navy font-black text-[10px] uppercase tracking-[0.2em] mb-6">Connects With Tools You Already Use</p>
                      <div className="flex flex-wrap gap-3">
                        {['Shopify', 'QuickBooks', 'Stripe', 'Twilio', 'Custom APIs'].map((item) => (
                          <span key={item} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 text-sm font-bold hover:shadow-sm transition-colors cursor-default">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-brand-orange font-black text-[10px] uppercase tracking-[0.2em] mb-6">Your Data Is Protected</p>
                      <ul className="space-y-4">
                        {[
                          { label: 'Your data is encrypted, always' },
                          { label: 'Extra login protection built in' },
                          { label: 'Every change is tracked and logged' }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700 font-bold text-[13px] bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The "CISA-Certified" Integrity Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-16 relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-wash border border-gray-200 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span className="text-navy text-[10px] uppercase font-black tracking-widest">CISA-Certified Integrity Layer</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-navy tracking-tighter leading-[1.1] mb-8">
                    Secure Data. <br />
                    <span className="text-navy">Audit-Ready</span> Architecture.
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium mb-12 max-w-xl">
                    As a CISA-certified professional, I don't just build for functionality; I build for security and accountability. Every architecture we deploy adheres to institutional-grade integrity standards.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-navy/10 text-navy">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                       </div>
                       <div>
                          <h4 className="text-navy font-bold text-xl tracking-tight">Data Integrity Protocol</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">We implement strict multi-layer validation rules to prevent "dirty data" from polluting your operational system.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-navy/10 text-navy">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                       </div>
                       <div>
                          <h4 className="text-navy font-bold text-xl tracking-tight">Granular Audit Trails</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">Every change, edit, or deletion is logged with a permanent timestamp and user ID, providing a bulletproof record for audits.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="p-1 rounded-full bg-navy/10 text-navy">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                       </div>
                       <div>
                          <h4 className="text-navy font-bold text-xl tracking-tight">Institutional Disaster Recovery</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">Automated redundant backups ensure your business data is never more than a few minutes away from total recovery.</p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="bg-navy-gradient rounded-[32px] p-10 shadow-xl flex flex-col items-center text-center w-full max-w-sm min-h-[260px] justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-orange/60 flex items-center justify-center mb-6">
                      <span className="text-brand-orange font-black text-lg tracking-tight">ISC2</span>
                    </div>
                    <span className="text-white font-black text-5xl tracking-tight leading-none">CISA</span>
                    <span className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] border-t border-white/15 pt-4">Certified Information Systems Auditor</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study: Logistics & Entity Management */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32 pt-10"
          >
            <div className="flex items-center gap-3 mb-16">
              <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
                Case Study: <span className="text-brand-orange">Logistics & Entity Management</span>
              </h2>
            </div>

            <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-10 lg:p-20 relative overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-brand-orange font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-brand-orange/20 pb-4">The Challenge</h3>
                      <p className="text-xl lg:text-2xl text-navy font-black tracking-tight leading-relaxed">
                        Managing a complex transition of ownership and international logistics across multiple corporate entities.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-navy font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-gray-200 pb-4">The Solution</h3>
                      <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        A bespoke ERP module that centralizes asset transfers, legal documentation silos, and cross-border logistics in a unified "Single Source of Truth."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <div className="h-px flex-1 bg-gray-100"></div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-200 relative overflow-hidden group-hover:shadow-sm transition-all">
                    <h3 className="text-brand-orange font-black text-[10px] uppercase tracking-[0.2em] mb-6">The Result</h3>
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-baseline gap-2">
                           <p className="text-5xl font-black text-navy">100%</p>
                           
                        </div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Visibility into Transfer Process</p>
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                           <p className="text-5xl font-black text-navy">50%</p>
                           
                        </div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Reduction in Admin Overhead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our 4-Stage "Business-First" Process */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black text-navy tracking-tighter mb-6 underline decoration-brand-orange/30 underline-offset-8">Our 4-Stage <br className="md:hidden" /> <span className="text-brand-orange">"Business-First"</span> Process</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium tracking-tight">Designing architecture that mimics your team's natural workflow for zero-friction adoption.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {[
                { step: '01', title: 'Workflow Mapping', desc: 'We map your current manual processes (the "Excel-and-Email" chaos) to identify high-velocity opportunities.', icon: Search },
                { step: '02', title: 'Architecture Design', desc: 'We design a database schema and UI that reflects your natural organizational structure.', icon: Layers },
                { step: '03', title: 'Iterative Development', desc: 'We build in sprints, providing staging environment access to test features with your team in real-time.', icon: RefreshCcw },
                { step: '04', title: 'Deployment & Training', desc: 'We handle the automated data migration and provide full staff training for a day-one smooth rollout.', icon: Zap }
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

          {/* Final Call to Action - Retire the Spreadsheets */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[50px] shadow-2xl border border-gray-200 bg-navy-gradient p-10 lg:p-24"
          >
            <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
                   Ready to <span className="text-brand-orange">Retire</span> the Spreadsheets?
                 </h2>
                 <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-md">
                   Your business is unique. Your software should be, too. Let's build the <span className="text-white italic underline decoration-brand-orange">last system you'll ever need.</span>
                 </p>
                 <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl w-fit">
                    <div className="flex -space-x-4">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="w-14 h-14 rounded-full border-4 border-black overflow-hidden bg-gray-800">
                            <img src={`https://i.pravatar.cc/150?u=crm${i}`} alt="user" className="w-full h-full object-cover" />
                         </div>
                       ))}
                    </div>
                    <div>
                      <p className="text-white font-black text-lg tracking-tight">40+ Enterprises</p>
                      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Successfully Deployed</p>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-navy-wash border border-gray-200 p-8 lg:p-14 rounded-[40px] shadow-2xl">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                         <label className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Company Name</label>
                         <input type="text" placeholder="Bloom Logistics" className="w-full bg-grey-light border border-gray-200 rounded-2xl px-6 py-5 text-navy focus:outline-none focus:border-brand-orange/50 transition-all font-bold placeholder:text-gray-400" />
                       </div>
                       <div className="space-y-3">
                         <label className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Industry</label>
                         <input type="text" placeholder="Int. Supply Chain" className="w-full bg-grey-light border border-gray-200 rounded-2xl px-6 py-5 text-navy focus:outline-none focus:border-brand-orange/50 transition-all font-bold placeholder:text-gray-400" />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Current Software Ecosystem</label>
                       <input type="text" placeholder="Legacy SAP / Excel / Email silos" className="w-full bg-grey-light border border-gray-200 rounded-2xl px-6 py-5 text-navy focus:outline-none focus:border-brand-orange/50 transition-all font-bold placeholder:text-gray-400" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] ml-1">Biggest Operational Bottleneck</label>
                       <textarea placeholder="Tell us what's slowing down your team..." rows={3} className="w-full bg-grey-light border border-gray-200 rounded-2xl px-6 py-5 text-navy focus:outline-none focus:border-brand-orange/50 transition-all font-bold placeholder:text-gray-400"></textarea>
                    </div>
                    <button
                       type="submit"
                       onClick={(e) => {
                         e.preventDefault();
                         onOpenModal();
                       }}
                       className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest transition-all shadow-2xl shadow-orange-500/30 active:scale-95 flex items-center justify-center gap-3 group"
                    >
                       Start Your Custom Build 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
