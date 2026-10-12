import { motion } from 'framer-motion';
import { 
  ShieldAlert, Zap, Globe, UserCheck, FileCheck, Landmark, RefreshCcw,
  Shield, Database, CheckCircle2, Search, Layers, Lock, LineChart,
  Truck, ShieldCheck, Repeat, Eye, ArrowRight, ChevronRight
} from 'lucide-react';

/**
 * ProfessionalITConsultingContent Component
 * Custom content section for Professional IT Consulting service
 */
interface ProfessionalITConsultingContentProps {
  onOpenModal: () => void;
}

export const ProfessionalITConsultingContent = ({ onOpenModal }: ProfessionalITConsultingContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Core Professional Pillars */}
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
              Core Professional Pillars
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">High-level expertise across three distinct consultancy buckets</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* IT Governance & Risk Management */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
              <span className="text-5xl font-black text-[#101D36]/[0.08] leading-none mb-4 select-none">01</span>
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm mb-5">
                <ShieldAlert size={20} className="text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-bold text-[#101D36] mb-3 leading-snug">IT Governance & Risk Management (CISA-Led)</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Leveraging our <span className="text-[#101D36] font-bold">CISA certification</span>, we provide independent, high-level audits of your IT infrastructure and internal controls, then design the remediation roadmap to make your organization resilient, compliant, and audit-ready.
              </p>
            </div>

            {/* Business Process Optimization */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
              <span className="text-5xl font-black text-[#101D36]/[0.08] leading-none mb-4 select-none">02</span>
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm mb-5">
                <Zap size={20} className="text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-bold text-[#101D36] mb-3 leading-snug">Business Process Optimization</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We analyze your "as-is" workflows to identify bottlenecks in supply chain, financial reporting, or team productivity, then re-engineer processes using our <span className="text-[#101D36] font-bold">Custom ERP and CRM</span> expertise for maximum efficiency.
              </p>
            </div>

            {/* International Operations & Entity Management */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
              <span className="text-5xl font-black text-[#101D36]/[0.08] leading-none mb-4 select-none">03</span>
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm mb-5">
                <Globe size={20} className="text-[#ff6b00]" />
              </div>
              <h3 className="text-lg font-bold text-[#101D36] mb-3 leading-snug">International Operations & Entity Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Managing cross-border business is complex. We provide strategic support for <span className="text-[#101D36] font-bold">entity management, ownership transfers, and international logistics</span> across multiple jurisdictions.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Specialized Advisory Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 mt-32"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-[#101D36] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Specialized Advisory Services
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal capitalize font-sans leading-none">Executive-level leadership & strategic oversight</span>
            </h2>
          </div>

          <div className="border border-gray-200 rounded-2xl divide-y divide-gray-200">
            {[
              { title: 'Fractional CTO/CISO Services', desc: 'High-level technology leadership for firms that need executive-grade strategy without the full-time overhead.', icon: UserCheck },
              { title: 'Compliance Framework Alignment', desc: 'Mapping your business to SOC2, ISO 27001, HIPAA, or PCI-DSS standards with surgical precision.', icon: FileCheck },
              { title: 'Vendor & Contract Management', desc: 'Professional oversight of third-party technology providers to ensure SLA compliance and cost-efficiency.', icon: Landmark },
              { title: 'Business Continuity Planning (BCP)', desc: 'Designing the "What If" scenarios for disaster recovery, data protection, and operational resilience.', icon: RefreshCcw }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-5 p-6 ${idx % 2 === 1 ? 'bg-[#F5F6F8]' : 'bg-white'}`}>
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shrink-0 shadow-sm">
                  <item.icon size={20} className="text-[#ff6b00]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#101D36]">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The "CISA & ISACA" Advantage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-[#F5F6F8] border border-gray-200 rounded-[50px] p-10 lg:p-20 relative overflow-hidden group">
            <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
              <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full mb-10">
                  <Shield size={18} className="text-[#ff6b00]" />
                  <span className="text-[#101D36] text-[11px] uppercase font-black tracking-[0.2em]">CISA Certified Authority Layer</span>
                </div>
                <h2 className="text-5xl lg:text-7xl font-black text-[#101D36] tracking-tighter leading-[1] mb-10">
                  Certified Integrity. <br />
                  <span className="text-[#101D36]">Evidence-Based</span> Advice.
                </h2>
                <p className="text-2xl text-gray-600 leading-relaxed font-medium mb-12 max-w-2xl">
                  Professional services are built on trust. As an active member of the <span className="text-[#101D36] font-bold italic underline decoration-[#ff6b00]/50 underline-offset-8">ISACA Austin Chapter</span> and a holder of the <span className="text-[#101D36] font-bold italic">CISA (Certified Information Systems Auditor)</span> designation, my advisory is grounded in globally recognized standards of excellence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="flex items-start gap-5 group/point">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#101D36] shrink-0 mt-1 transition-all group-hover/point:bg-[#101D36] group-hover/point:text-white">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="text-[#101D36] font-black text-xl mb-2 tracking-tight">Objective Analysis</h5>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">We provide unbiased, third-party evaluations of your technology and teams.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group/point">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#101D36] shrink-0 mt-1 transition-all group-hover/point:bg-[#101D36] group-hover/point:text-white">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="text-[#101D36] font-black text-xl mb-2 tracking-tight">Regulatory Fluency</h5>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">We speak the language of auditors, lawyers, and stakeholders fluently.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group/point">
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#101D36] shrink-0 mt-1 transition-all group-hover/point:bg-[#101D36] group-hover/point:text-white">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="text-[#101D36] font-black text-xl mb-2 tracking-tight">Ethical Standards</h5>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Our work is governed by a strict code of professional ethics and continuous professional education (CPE).</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative group/isaca scale-110">
                  <Shield size={380} className="text-gray-300 relative z-10 transform group-hover/isaca:scale-105 group-hover/isaca:rotate-1 transition-all duration-700" strokeWidth={1} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <Database size={100} className="text-[#101D36] mb-6" />
                    <span className="text-gray-300 font-black text-8xl tracking-tighter select-none">ISACA</span>
                    <span className="text-[#101D36]/40 font-black text-[10px] tracking-[0.5em] uppercase mt-4 border-t border-gray-300 pt-4">Austin Chapter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Delivery Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Service Delivery Stack
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal capitalize">The frameworks and tools that keep your strategy on track</span>
            </h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-[50px] overflow-hidden shadow-2xl relative group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#101D36]/5 to-transparent rounded-bl-full pointer-events-none"></div>
            
            <div className="hidden lg:grid grid-cols-3 border-b border-gray-200 bg-[#F5F6F8] relative z-10">
              <div className="p-8 lg:p-10 font-black text-gray-500 tracking-[0.15em] text-xs col-span-1">Category</div>
              <div className="p-8 lg:p-10 font-black text-gray-500 tracking-[0.15em] text-xs col-span-2">Frameworks & Methodology</div>
            </div>

            {[
              { category: 'Audit Standard', info: 'COBIT, NIST Cybersecurity Framework, ITIL', icon: Search },
              { category: 'Project Mgmt', info: 'Agile, Waterfall, and Lean Six Sigma Principles', icon: Layers },
              { category: 'Communication', info: 'Secure, Encrypted Portals & Professional Documentation', icon: Lock },
              { category: 'Analysis', info: 'Data-driven ROI modeling and Risk Heat Mapping', icon: LineChart }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 border-b border-gray-100 hover:shadow-sm transition-all relative z-10">
                <div className="p-8 lg:px-10 lg:py-12 flex items-center gap-6 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-[#F5F6F8] lg:bg-transparent">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <item.icon size={28} />
                  </div>
                  <span className="text-2xl font-black text-[#101D36] tracking-tight leading-none">{item.category}</span>
                </div>
                <div className="p-8 lg:px-10 lg:py-12 flex items-center lg:col-span-2">
                  <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed font-bold tracking-tight">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The 4-Phase Engagement Lifecycle */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32 mt-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              The 4-Phase Engagement Lifecycle
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-[28px] left-8 w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-[#ff6b00] to-[#101D36] z-0"></div>
            
            {[
              { phase: '1', title: 'Strategic Discovery', desc: 'We define the scope, identify key stakeholders, and establish success metrics.' },
              { phase: '2', title: 'Gap Analysis & Audit', desc: 'A deep-dive into your current state vs. your desired "Future State" or regulatory requirement.' },
              { phase: '3', title: 'Strategy Implementation', desc: 'We execute the plan, whether it\'s an infrastructure overhaul, a compliance push, or an entity transfer.' },
              { phase: '4', title: 'Governance & Handover', desc: 'Final documentation, training, and established monitoring to ensure long-term success.' }
            ].map((p) => (
              <div key={p.phase} className="relative z-10 flex flex-col items-start gap-6 bg-[#F5F6F8] md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-gray-100 md:border-transparent mt-4 md:mt-0 group">
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

        {/* Global Logistics & Supply Chain Expertise */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-[#F5F6F8] border border-gray-200 rounded-[40px] p-10 lg:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-8 group-hover:rotate-3 transition-transform">
                    <Truck size={40} />
                 </div>
                 <h3 className="text-[#ff6b00] font-black uppercase tracking-widest text-sm mb-4">Logistics Consultancy</h3>
                 <h2 className="text-4xl lg:text-6xl font-black text-[#101D36] tracking-tighter leading-[1.1] mb-8">
                    From Austin <br />
                    <span className="text-[#ff6b00]">to the World.</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    With deep roots in international logistics through <span className="text-[#101D36] font-bold">Bloom Logistics</span>, we provide specialized consultancy for firms navigating the complexities of global supply chains. We handle the "hard parts"—regulatory compliance, transfer logistics, and operational oversight—so you can focus on growth.
                  </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                 {[
                   { label: 'Regulatory Compliance', icon: ShieldCheck },
                   { label: 'Transfer Logistics', icon: Repeat },
                   { label: 'Operational Oversight', icon: Eye }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-6 hover:shadow-sm transition-colors">
                      <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                         <item.icon size={24} />
                      </div>
                      <span className="text-[#101D36] text-xl font-bold tracking-tight">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-[#101D36] z-0"></div>

          <div className="relative z-10 p-10 lg:p-16 xl:p-20 flex flex-col lg:flex-row gap-16 xl:gap-20 items-center">
            <div className="lg:w-[50%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Executive Engagement</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] mb-8">
                Ready for a <span className="text-[#ff6b00]">Higher Standard</span> of Service?
              </h2>
              <p className="text-2xl text-white/70 leading-relaxed font-medium mb-12 max-w-xl">
                Don't settle for generic advice. Partner with a professional who understands the intersection of technology, finance, and global operations.
              </p>

              <div className="flex gap-12 items-center">
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-[#ff6b00] bg-[#1a305c] flex items-center justify-center font-black text-white text-xs z-10">B</div>
                    ))}
                 </div>
                 <p className="text-white/50 text-sm font-bold uppercase tracking-widest">Expert Network <br/> Direct Access</p>
              </div>
            </div>

            <div className="lg:w-[50%] w-full bg-white border border-gray-200 rounded-[40px] p-8 lg:p-12 shadow-2xl relative">
              <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => { e.preventDefault(); onOpenModal(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-gray-400 font-black text-[11px] mb-3 block uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="Executive Name" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-[#101D36] placeholder-gray-300 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-bold text-lg" required />
                  </div>
                  
                  <div>
                    <label className="text-gray-400 font-black text-[11px] mb-3 block uppercase tracking-widest">Industry</label>
                    <input type="text" placeholder="Technology / Logistics" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-[#101D36] placeholder-gray-300 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-bold text-lg" required />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-gray-400 font-black text-[11px] mb-3 block uppercase tracking-widest">Primary Need</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5 text-[#101D36] focus:outline-none focus:border-[#ff6b00]/50 focus:bg-gray-100 transition-all font-bold text-lg appearance-none cursor-pointer" required>
                        <option value="" disabled className="text-gray-900 bg-white">Select a Requirement...</option>
                        <option value="audit" className="text-gray-900 bg-white">IT Audit & Governance</option>
                        <option value="strategy" className="text-gray-900 bg-white">Operational Strategy</option>
                        <option value="logistics" className="text-gray-900 bg-white">International Logistics</option>
                        <option value="fractional" className="text-gray-900 bg-white">Fractional Leadership (CTO/CISO)</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#ff6b00]">
                        <ChevronRight size={24} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-[#ff6b00] to-[#cc4400] hover:from-[#e65c00] hover:to-[#b33c00] text-white text-lg font-black uppercase tracking-widest py-6 rounded-[24px] shadow-[0_15px_40px_rgba(255,107,0,0.4)] transition-all active:scale-[0.98] flex justify-center items-center gap-4 group">
                  Book a Professional Consultation <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
