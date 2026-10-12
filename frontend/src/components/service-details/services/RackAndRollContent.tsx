import { motion } from 'framer-motion';
import {
  Truck, PackageCheck, Layout, Cable, ClipboardCheck, Thermometer,
  CheckCircle2, Server, Zap
} from 'lucide-react';
import { ServiceBenefitsSidebar } from '../ServiceBenefitsSidebar';

/**
 * RackAndRollContent Component
 * Custom content section for Rack & Roll Services
 */
interface RackAndRollContentProps {
  onOpenModal: () => void;
}

const benefits = [
  'Optimized Airflow (Hot/Cold Aisle) adhering to ASHRAE standards',
  'AMD EPYC & High-Density Expertise with specialized cooling solutions',
  'Network+ Certified Integration meeting Cat6 and Fiber Optic standards',
  'Reduced Downtime with deployment time reduced by up to 40%'
];

const processSteps = [
  { step: '01', title: 'Delivery & Inspection', desc: 'Equipment is received, inventoried, and inspected for shipping damage before it touches the rack.', icon: Truck },
  { step: '02', title: 'Rack Placement', desc: 'Strategic U-space planning for airflow, weight distribution, and future expansion.', icon: Layout },
  { step: '03', title: 'Physical Integration', desc: 'Rail kits, PDUs, and UPS units are installed and secured to spec.', icon: Server },
  { step: '04', title: 'Structured Cabling', desc: 'Color-coded, labeled patching with proper cable management for clean airflow.', icon: Cable },
  { step: '05', title: 'Power & Burn-In', desc: 'POST verification, firmware updates, and IPMI/out-of-band management setup.', icon: Zap },
  { step: '06', title: 'Documentation', desc: 'Asset tags, port maps, and rack elevation diagrams handed over with the build.', icon: ClipboardCheck },
  { step: '07', title: 'First Ping Handover', desc: 'Final connectivity test confirms every device is live before we walk away.', icon: PackageCheck }
];

export const RackAndRollContent = (_props: RackAndRollContentProps) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Overview & Client Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">Overview</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Efficiently scaling your data center or on-site server room requires more than just unboxing hardware. We provide comprehensive Rack &amp; Roll services &mdash; a turnkey solution for businesses that need high-density server deployments executed with precision, speed, and professional organization, from the moment equipment arrives at the dock to the second the first "ping" is sent.
            </p>
          </div>
          <div className="lg:col-span-4">
            <ServiceBenefitsSidebar benefits={benefits} />
          </div>
        </motion.div>

        {/* Core Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-[#ff6b00] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              From the Loading Dock to the First Ping
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Turnkey physical and logical integration for your server room or data center</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-[32px] p-8 hover:shadow-sm transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <Truck size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#101D36] mb-4">Logistics & Receiving</h3>
              <p className="text-gray-600 leading-relaxed">
                Inspection, inventory verification, and asset tagging the moment equipment arrives &mdash; so nothing is lost, damaged, or unaccounted for before installation begins.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-8 hover:shadow-sm transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <Layout size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#101D36] mb-4">Precision Rack Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic U-space placement, rail kit installation, and PDU/UPS integration planned for airflow, weight balance, and room to grow.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-8 hover:shadow-sm transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <Cable size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#101D36] mb-4">Professional Structured Cabling</h3>
              <p className="text-gray-600 leading-relaxed">
                Color-coded patching, Velcro cable management, and end-to-end labeling &mdash; built to Cat6/Cat6a and fiber optic standards, not zip-tied chaos.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-8 hover:shadow-sm transition-colors group relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#cc4400] rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <ClipboardCheck size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#101D36] mb-4">Configuration & Burn-In</h3>
              <p className="text-gray-600 leading-relaxed">
                POST verification, firmware updates, and IPMI/out-of-band management setup, so every device checks in healthy before go-live.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 7-Step Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-[#101D36] tracking-tighter mb-6">
              Our <span className="text-[#ff6b00]">Deployment Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium tracking-tight">
              Seven steps from "equipment arrives" to "fully live," executed with precision and speed
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-8 rounded-[32px] bg-gray-50 border border-gray-200 hover:shadow-sm transition-all hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#101D36] border-2 border-white rounded-2xl flex items-center justify-center text-[#ff6b00] font-black text-lg z-10 shadow-sm">
                  {item.step}
                </div>
                <div className="mb-8 text-gray-400 group-hover:text-[#ff6b00] transition-colors">
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-black text-[#101D36] mb-3 tracking-tight leading-none">{item.title}</h4>
                <p className="text-gray-500 text-[14px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Standards & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <Thermometer size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">ASHRAE-Compliant Airflow</h3>
                </div>
                <p className="text-gray-600 text-lg">Hot/cold aisle layouts designed to keep equipment running cool under full load.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#101D36]/10 rounded-2xl flex items-center justify-center text-[#101D36] group-hover:scale-110 transition-transform">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">High-Density Expertise</h3>
                </div>
                <p className="text-gray-600 text-lg">Specialized cooling and power planning for AMD EPYC and other high-density deployments.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#ff6b00]/20 rounded-2xl flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">Network+ Certified Integration</h3>
                </div>
                <p className="text-gray-600 text-lg">Cabling and configuration meeting Cat6 and fiber optic standards, every time.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#101D36]/10 rounded-2xl flex items-center justify-center text-[#101D36] group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#101D36]">Up to 40% Faster Deployment</h3>
                </div>
                <p className="text-gray-600 text-lg">A dedicated, process-driven team gets your rack live faster than ad-hoc internal deployment.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
