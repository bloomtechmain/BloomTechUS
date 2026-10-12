import { motion } from 'framer-motion';
import {
  Globe, Shuffle, Lock, Gauge, ShieldCheck,
  Building2, Timer
} from 'lucide-react';
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
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Overview & Client Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">Overview</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Deploy secure, lightning-fast enterprise networking solutions such as SD-WAN, multi-site VPNs, and highly redundant routing designed for maximum uptime and reliability. We connect every office, branch, and remote worker into one resilient, zero-downtime network.
            </p>
          </div>
          <div className="lg:col-span-4">
            <ServiceBenefitsSidebar benefits={benefits} />
          </div>
        </motion.div>

        {/* Capabilities — zigzag editorial rows */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              Enterprise Connectivity, Engineered for Zero Downtime
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Connecting every office, site, and remote worker without a single dropped packet</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {capabilities.map((cap, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <motion.div
                  key={cap.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="relative border-b border-gray-200 pb-10 pt-2 last:border-b-0"
                >
                  <div className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${reversed ? 'md:flex-row-reverse' : ''}`}>
                    <div className="shrink-0 w-full md:w-48 flex md:flex-col items-center md:items-start gap-4">
                      <span className="text-6xl font-black text-[#101D36]/[0.06] leading-none select-none tabular-nums">{cap.num}</span>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#101D36] to-[#1B2B4D] flex items-center justify-center shadow-sm shrink-0">
                        <cap.icon size={22} className="text-[#ff6b00]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#101D36] mb-3">{cap.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg mb-5 max-w-2xl">{cap.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {cap.stack.map((s) => (
                          <span key={s} className="px-3 py-1.5 text-xs font-semibold bg-[#F5F6F8] text-gray-600 rounded-md border border-gray-200">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why It Matters — compact strip, not boxy cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-[#F5F6F8] border border-gray-200 rounded-2xl divide-y divide-gray-200 md:divide-y-0 md:grid md:grid-cols-3 md:divide-x"
        >
          {whyItMatters.map((item) => (
            <div key={item.title} className="p-7 flex items-start gap-4">
              <item.icon size={22} className="text-[#ff6b00] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-[#101D36] mb-1.5">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
