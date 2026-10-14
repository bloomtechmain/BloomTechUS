import { motion } from 'framer-motion';
/**
 * NetworkInfrastructureContent Component
 * Custom content section for IT Network Infrastructure service
 */
interface NetworkInfrastructureContentProps {
  onOpenModal: () => void;
}
export const NetworkInfrastructureContent = ({ onOpenModal }: NetworkInfrastructureContentProps) => {
  return (
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        {/* Core Networking Specializations */}
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
              Core Networking Specializations
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">End-to-end infrastructure solutions for modern enterprises</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Enterprise Architecture Design */}
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8">
              <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-navy">Enterprise Architecture Design</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                We don't just plug in hardware; we design ecosystems. Our certified engineers map out your entire network topology to eliminate single points of failure.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">LAN/WAN:</strong> High-performance networks designed for low latency</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">SD-WAN:</strong> Optimized traffic routing across locations</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">VLAN Segmentation:</strong> Logically separated networks for security</span></li>
              </ul>
            </div>
            {/* Wireless Networking & Mobility */}
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8">
              <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-navy">Wireless Networking & Mobility</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Modern work requires seamless connectivity. We design enterprise-grade Wi-Fi solutions that provide blanket coverage without "dead zones."
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Heat Mapping:</strong> Advanced tools for optimal Access Point placement</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Secure Guest Access:</strong> Isolated environments protecting corporate data</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Mesh Networking:</strong> Resilient wireless for large facilities</span></li>
              </ul>
            </div>
            {/* Network Security & Perimeter Defense */}
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8">
              <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-navy">Network Security & Perimeter Defense</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                With the threat landscape constantly evolving, your network must be your first line of defense.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Next-Gen Firewalls:</strong> NGFW with Deep Packet Inspection</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">VPN & Remote Access:</strong> Secure encrypted tunnels (IPsec/SSL)</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">IDS/IPS:</strong> Real-time monitoring and threat neutralization</span></li>
              </ul>
            </div>
            {/* Infrastructure Hardware Management */}
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8">
              <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-navy">Infrastructure Hardware Management</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                We partner with leading vendors to provide the most reliable hardware on the market.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Switching & Routing:</strong> High-speed backbone infrastructure</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Structured Cabling:</strong> Cat6, Cat6a, and Fiber Optic installation</span></li>
                <li className="flex items-start gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> <span><strong className="text-navy">Rack Design:</strong> Clean layouts for airflow and maintenance</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* The Network+ Advantage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-navy-wash z-0"></div>
          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-2/3">
                              <h3 className="text-brand-orange font-black uppercase tracking-widest text-sm mb-4">Certified Excellence</h3>
               <h2 className="text-4xl lg:text-6xl font-black text-navy tracking-tighter leading-[1.1] mb-8">
                  The Network+ Advantage
                  <span className="block text-2xl lg:text-3xl text-gray-500 font-medium tracking-normal italic">CompTIA Certified Engineering Team</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
                  Choosing a <span className="text-navy font-bold">CompTIA Network+ Certified</span> partner like BloomTech means your infrastructure is handled by experts who have mastered the seven layers of the OSI model.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-navy-wash border border-gray-200 p-6 rounded-2xl group/item hover:shadow-sm transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-bold text-navy">Hardware Neutrality</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Understanding Cisco, Juniper, Ubiquiti interaction for perfect integration</p>
                  </div>
                  <div className="bg-navy-wash border border-gray-200 p-6 rounded-2xl group/item hover:shadow-sm transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-bold text-navy">Troubleshooting Excellence</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Systematic approach to identify and resolve connectivity issues</p>
                  </div>
                  <div className="bg-navy-wash border border-gray-200 p-6 rounded-2xl group/item hover:shadow-sm transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-bold text-navy">Security-First Mindset</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Security baked into every configuration and protocol</p>
                  </div>
                </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-navy-wash border border-gray-200 rounded-[32px] p-12 flex flex-col items-center text-center w-full max-w-sm">
                <span className="text-navy font-black text-3xl tracking-tight">Network+</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">CompTIA Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Network Health Check & Support */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              Network Health Check & Support
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Comprehensive audits and proactive monitoring</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-split-navy rounded-[40px] p-6 md:p-10">
            {/* Performance Optimization */}
            <div className="bg-navy-wash border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-navy">Performance Optimization</h3>
                </div>
                <p className="text-gray-600 text-lg mb-8">Tuning your hardware to handle 10G or higher speeds with minimal latency.</p>
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> Maximum Throughput
                </div>
              </div>
            </div>
            {/* 24/7 Monitoring */}
            <div className="bg-navy-wash border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-navy">24/7 Monitoring</h3>
                </div>
                <p className="text-gray-600 text-lg mb-8">Proactive oversight of switches, routers, and firewalls to catch issues early.</p>
                <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> Always Protected
                </div>
              </div>
            </div>
            {/* Scalability Planning */}
            <div className="bg-navy-wash border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-navy">Scalability Planning</h3>
                </div>
                <p className="text-gray-600 text-lg mb-8">Ensuring your network can double in capacity without complete overhauls.</p>
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span> Future-Proof Growth
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Network Infrastructure CTA */}
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
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Network Engineers On Standby</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Ready to Build a Faster, Safer Network?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                Connect with our certified network engineers in Austin to discuss your infrastructure needs and get a free network audit.
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
                  <h3 className="text-2xl font-black text-navy mb-2">Free Network Audit</h3>
                  <p className="text-gray-600 text-sm">Let's identify bottlenecks and security vulnerabilities</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Office</p>
                      <p className="text-navy font-medium text-sm">11801 Domain Blvd, Austin, TX 78758</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Phone</p>
                      <p className="text-navy font-medium text-sm">(737) 329-8158</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Email</p>
                      <p className="text-navy font-medium text-sm">networking@bloomtechus.com</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={onOpenModal}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                >
                  Request Network Audit 
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
