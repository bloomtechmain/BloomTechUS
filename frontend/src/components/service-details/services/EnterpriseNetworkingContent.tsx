import { motion } from 'framer-motion';
import { Globe, Shuffle, Lock, Gauge, ShieldCheck, Building2, Timer } from 'lucide-react';
import { ServiceBenefitsSidebar } from '../ServiceBenefitsSidebar';

/**
 * EnterpriseNetworkingContent Component
 * Custom content section for Enterprise Networking service
 */
interface EnterpriseNetworkingContentProps {
  onOpenModal: () => void;
}

const benefits = ['Zero-Downtime Reliability', 'Secure Data Transmission', 'Optimized Cloud Application Performance', 'Built for Multi-Site Growth'];

const capabilities = [
  {
    num: '01',
    icon: Globe,
    title: 'SD-WAN & Multi-Site Architecture',
    desc: 'For businesses with multiple offices, branches, or warehouses, we design Software-Defined WAN overlays that dynamically route traffic across the fastest, most reliable path available — automatically shifting between ISPs, MPLS, and broadband without manual intervention.',
    stack: ['Cisco Meraki', 'Fortinet', 'Ubiquiti UniFi', 'pfSense']
  },
  {
    num: '02',
    icon: Shuffle,
    title: 'Redundant Routing & Automatic Failover',
    desc: "A single ISP outage shouldn't take your business offline. We architect dual-WAN and multi-carrier failover configurations with BGP routing where needed, so connectivity switches over in seconds — not hours.",
    stack: ['Dual-WAN', 'BGP Routing', '24/7 Link Monitoring']
  },
  {
    num: '03',
    icon: Lock,
    title: 'Secure Multi-Site VPNs',
    desc: 'Site-to-site IPsec tunnels link your branch offices into one secure private network, while encrypted remote-access VPNs let your team connect safely from anywhere — without exposing internal systems to the public internet.',
    stack: ['IPsec', 'WireGuard', 'OpenVPN']
  },
  {
    num: '04',
    icon: Gauge,
    title: 'Bandwidth Optimization & QoS',
    desc: 'We apply Quality of Service policies that prioritize business-critical traffic — VoIP, video conferencing, cloud applications — over background traffic, so your bandwidth is spent on what actually keeps the business running.',
    stack: ['QoS Policies', 'Traffic Shaping', 'Load Balancing']
  }
];

const whyItMatters = [
  { icon: Timer, title: 'Zero-Downtime Reliability', desc: 'Automatic failover keeps branches and remote teams connected even when a primary link goes down.' },
  { icon: ShieldCheck, title: 'Secure Data Transmission', desc: 'Every connection is encrypted end-to-end, keeping company data private in transit.' },
  { icon: Building2, title: 'Built for Multi-Site Growth', desc: "Add a new branch without redesigning your network — our architecture scales with you." }
];

export const EnterpriseNetworkingContent = (_props: EnterpriseNetworkingContentProps) => {
  return (
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Overview & Client Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">Overview</h2>
            </div>
            <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-10">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                Deploy secure, lightning-fast enterprise networking solutions such as SD-WAN, multi-site VPNs, and highly redundant routing designed for maximum uptime and reliability. We connect every office, branch, and remote worker into one resilient, zero-downtime network.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <ServiceBenefitsSidebar benefits={benefits} />
          </div>
        </motion.div>

        {/* Capabilities — bounded cards on the navy gradient, alternating accent color */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              Enterprise Connectivity, Engineered for Zero Downtime
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Connecting every office, site, and remote worker without a single dropped packet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-split-navy rounded-[40px] p-6 md:p-10">
            {capabilities.map((cap, idx) => {
              const accent = idx % 2 === 0 ? 'brand-orange' : 'teal';
              return (
                <motion.div
                  key={cap.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} p-8 flex flex-col`}
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl text-white font-black text-sm mb-6 ${accent === 'brand-orange' ? 'bg-brand-orange' : 'bg-teal'}`}>
                    {cap.num}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{cap.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-5">{cap.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cap.stack.map((s) => (
                      <span key={s} className={`px-3 py-1.5 text-xs font-semibold rounded-md border ${accent === 'brand-orange' ? 'bg-brand-orange/10 text-brand-orange-dark border-brand-orange/20' : 'bg-teal-wash text-teal-dark border-teal/20'}`}>{s}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why It Matters — real bounded cards with color, not a borderless strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {whyItMatters.map((item, idx) => {
            const accent = idx % 2 === 0 ? 'bg-brand-orange' : 'bg-teal';
            return (
              <div key={item.title} className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} p-7`}>
                <div className={`w-9 h-2.5 rounded-full ${accent} mb-5`}></div>
                <h3 className="text-base font-bold text-navy mb-1.5">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
