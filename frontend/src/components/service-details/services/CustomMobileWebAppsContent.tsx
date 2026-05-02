import { motion } from 'framer-motion';
import { 
  Smartphone, Code, ShoppingCart, Lock, Database, Zap, 
  CheckCircle2, ArrowRight, ChevronRight, Cpu, Cloud, Globe,
  Target, Workflow, FileSearch, Palette, Rocket, Boxes
} from 'lucide-react';

/**
 * CustomMobileWebAppsContent Component
 * Custom content section for Custom Mobile & Web Applications service
 */
interface CustomMobileWebAppsContentProps {
  onOpenModal: () => void;
}

export const CustomMobileWebAppsContent = ({ onOpenModal }: CustomMobileWebAppsContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        
        {/* Why Choose Custom Solutions? */}
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
              Why Choose Custom Solutions?
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Breaking free from "off-the-shelf" limitations</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 lg:p-12 mb-12">
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-medium mb-8">
              Generic, <span className="text-[#ff6b00] font-bold">"off-the-shelf"</span> platforms often create <span className="text-white font-bold">"Excel-and-Email" chaos</span>, cluttered with features you don't use while lacking the specific integrations needed to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tailored Workflows */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Workflow size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Tailored Workflows</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  We design systems that <span className="text-white font-bold">mimic your team's natural processes</span>, eliminating friction and accelerating adoption.
                </p>
              </div>
            </div>

            {/* Conversion-First Design */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Conversion-First Design</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Every pixel and interaction is engineered to serve a <span className="text-white font-bold">specific business purpose and user intent</span>.
                </p>
              </div>
            </div>

            {/* Proprietary Logic */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00]">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Proprietary Logic</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  You own the <span className="text-white font-bold">logic layer and data</span>, eliminating fluctuating "per-user" licensing fees.
                </p>
              </div>
            </div>

            {/* Performance-Driven Engineering */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden group hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">Performance-Driven Engineering</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed">
                  Apps are built on <span className="text-white font-bold">clean code optimized for sub-second load times</span> and flawless responsiveness.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specialized Development Pillars */}
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
              Specialized Development Pillars
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Bespoke engines tailored to solve operational bottlenecks</span>
            </h2>
          </div>
          
          <div className="relative border-l-2 border-white/10 ml-8 lg:ml-12 pl-12 lg:pl-16 flex flex-col gap-16">
            
            {/* I. Enterprise Ecosystems (CRM & ERP) */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                I
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Database size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Ecosystems (CRM & ERP)</h3>
                </div>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Manage resources and customers in one seamless dashboard.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Precision ERP:</span> Integrate inventory, HR, order processing, and supply chain logistics</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Tailored CRM:</span> Track lead capture and automated retention analytics specific to your sales cycle</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Financial Sync:</span> Automate invoicing with real-time P&L visibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* II. High-Performance Commerce & Portals */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.2)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                II
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                    <ShoppingCart size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">High-Performance Commerce & Portals</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">E-Commerce Powerhouses:</span> Custom storefronts designed for high-volume transactions and seamless checkout flows</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Secure Client Portals:</span> Professional, multi-page architectures featuring Role-Based Access Control (RBAC) and audit-ready logging</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Custom Web Portals:</span> Bespoke internal tools built to solve specific operational bottlenecks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* III. Intelligent Automation & Proximity */}
            <div className="relative group">
              <div className="absolute -left-[75px] lg:-left-[91px] top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.3)] flex items-center justify-center font-black text-white text-xl z-10 group-hover:scale-110 transition-transform">
                III
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#ff6b00]/20 rounded-xl flex items-center justify-center text-[#ff6b00]">
                    <Smartphone size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Intelligent Automation & Proximity</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Data & Document Intelligence:</span> Systems that "read" unstructured data (PDFs, emails) and utilize predictive algorithms for inventory and lead forecasting</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
                    <span><span className="font-bold text-white">Proximity-Based Apps:</span> Specialized mobile applications utilizing QR and NFC technology for secure asset tracking</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>

        {/* The Infrastructure Advantage */}
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
              The Infrastructure Advantage
              <span className="block text-xl lg:text-2xl text-white/50 font-medium mt-2 tracking-normal">Enterprise-grade infrastructure for maximum uptime and security</span>
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative group">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff6b00]/10 to-transparent rounded-bl-full pointer-events-none"></div>
            
            {/* Header */}
            <div className="hidden lg:grid grid-cols-2 border-b border-white/10 bg-black/20 relative z-10">
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Category</div>
              <div className="p-6 lg:p-8 font-black text-white/50 uppercase tracking-widest text-sm">Our Technical Selection</div>
            </div>

            {/* Backend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Code className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Backend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Python (Django/FastAPI), Node.js, or Go</p>
              </div>
            </div>

            {/* Frontend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Palette className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Frontend</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">React.js, Next.js, or Tailwind CSS</p>
              </div>
            </div>

            {/* Database */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Database className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Database</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">PostgreSQL, MySQL, or MongoDB</p>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Cloud className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Infrastructure</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">AWS, Google Cloud, Azure, or On-Premise AMD EPYC clusters</p>
              </div>
            </div>

            {/* Security */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/5 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Lock className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Security</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">End-to-End Encryption and Multi-Factor Authentication (MFA)</p>
              </div>
            </div>

            {/* Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 hover:bg-white/10 transition-colors relative z-10">
              <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 border-b lg:border-b-0 border-white/5 bg-black/10 lg:bg-transparent">
                <Rocket className="text-[#ff6b00]" size={24} />
                <span className="text-xl font-bold text-white tracking-wide">Automation</span>
              </div>
              <div className="p-6 lg:px-8 lg:py-8 flex items-center">
                <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-medium">Custom CI/CD pipelines for "zero-downtime" updates</p>
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
          className="mt-20 lg:mt-32 mb-10"
        >
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-6">
              Our Unified <span className="text-[#ff6b00]">Development Roadmap</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium tracking-tight">
              A 4-stage <span className="text-white font-bold">"Business-First"</span> process to ensure a smooth transition from concept to launch
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
              <div key={idx} className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] border-2 border-white/10 rounded-2xl flex items-center justify-center text-[#ff6b00] font-black text-2xl z-10 shadow-xl shadow-black/50">
                  {item.step}
                </div>
                <div className="mb-10 text-white/30 group-hover:text-[#ff6b00] transition-colors">
                  <item.icon size={44} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-black text-white mb-6 tracking-tight leading-none">{item.title}</h4>
                <p className="text-white/50 text-[15px] leading-relaxed font-medium">{item.desc}</p>
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
          className="mt-20 lg:mt-32 mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a305c] to-[#0c1a36] z-0"></div>
          <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff6b00]/20 to-transparent pointer-events-none z-0 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Custom Development</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
                Ready to Build Your <span className="text-[#ff6b00]">Custom Application?</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed font-medium mb-10 max-w-xl">
                Let's create a high-performance mobile or web application that doesn't just meet your needs—it transforms how your business operates.
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
                  <h3 className="text-2xl font-black text-white mb-2">Start Your Custom Build</h3>
                  <p className="text-white/60 text-sm">Transform your business operations</p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium" />
                  </div>
                  
                  <div>
                    <label className="text-white/60 font-bold text-[10px] mb-2 block uppercase tracking-widest">Application Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#ff6b00]/50 focus:bg-black/60 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Type...</option>
                        <option value="crm-erp" className="text-gray-900 bg-white">CRM/ERP System</option>
                        <option value="ecommerce" className="text-gray-900 bg-white">E-Commerce Platform</option>
                        <option value="portal" className="text-gray-900 bg-white">Client Portal</option>
                        <option value="mobile" className="text-gray-900 bg-white">Mobile Application</option>
                        <option value="automation" className="text-gray-900 bg-white">Automation Tool</option>
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
                  Request Development Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
