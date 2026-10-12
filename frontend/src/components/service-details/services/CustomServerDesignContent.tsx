import { motion } from 'framer-motion';
import {
  Cpu, HardDrive, MemoryStick, Server, TestTube2, Wrench,
  Gauge, CheckCircle2, Layers, Thermometer
} from 'lucide-react';
import { ServiceBenefitsSidebar } from '../ServiceBenefitsSidebar';

/**
 * CustomServerDesignContent Component
 * Custom content section for Custom Server Design & Deployment service
 */
interface CustomServerDesignContentProps {
  onOpenModal: () => void;
}

const benefits = ['Maximum Price-to-Performance Ratio', 'Workload-specific Optimization', 'Extended Hardware Lifespan', 'Enterprise-Grade Components Only'];

const buildSteps = [
  { icon: Gauge, title: 'Workload Profiling', desc: 'We analyze what the server actually needs to do.' },
  { icon: Cpu, title: 'Component Selection', desc: 'CPU, memory, storage matched to the job.' },
  { icon: TestTube2, title: 'Stress Testing', desc: 'Extended load and thermal burn-in before it ships.' },
  { icon: Wrench, title: 'On-Site Deployment', desc: 'Installed, cabled, and configured, production-ready.' }
];

const specSheet = [
  { icon: Cpu, label: 'Compute Platforms', value: 'AMD EPYC 8004/9004 Series, Intel Xeon Scalable' },
  { icon: HardDrive, label: 'Storage', value: 'NVMe SSDs, SAS arrays, hardware RAID controllers' },
  { icon: MemoryStick, label: 'Memory', value: 'ECC DDR5, sized to workload demand' },
  { icon: Layers, label: 'Virtualization', value: 'VMware, Proxmox VE, Microsoft Hyper-V' },
  { icon: Thermometer, label: 'Cooling & Power', value: 'Redundant 1+1 PSUs, server-grade thermal management' },
  { icon: Server, label: 'Chassis & Form Factor', value: 'Rackmount 1U-4U, tower, or edge deployments' }
];

export const CustomServerDesignContent = (_props: CustomServerDesignContentProps) => {
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
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Purpose-built server configurations optimized specifically for your workload, whether it be intensive AI rendering, database hosting, virtualization, or high-traffic web applications. Every build is sourced, assembled, stress-tested, and deployed on-site by our team.
            </p>

            {/* Horizontal build process */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200">
              {buildSteps.map((step, idx) => (
                <div key={step.title} className="bg-white p-5 relative">
                  <span className="text-xs font-bold text-gray-300 tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                  <step.icon size={20} className="text-[#ff6b00] my-2.5" />
                  <h4 className="text-sm font-bold text-[#101D36] mb-1 leading-snug">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <ServiceBenefitsSidebar benefits={benefits} />
          </div>
        </motion.div>

        {/* Spec sheet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-2 bg-[#101D36] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#101D36] tracking-tight">
              What We Build With
              <span className="block text-lg lg:text-xl text-gray-500 font-medium mt-2 tracking-normal">Enterprise-grade components, matched to the job</span>
            </h2>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {specSheet.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_2fr] ${idx % 2 === 1 ? 'bg-[#F5F6F8]' : 'bg-white'} ${idx !== specSheet.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="px-6 py-5 flex items-center gap-3">
                  <row.icon size={18} className="text-[#ff6b00] shrink-0" />
                  <span className="font-bold text-[#101D36] text-sm uppercase tracking-wide">{row.label}</span>
                </div>
                <div className="px-6 py-5 sm:pl-0 flex items-center">
                  <p className="text-gray-700 font-medium">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits — inline stat row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-gray-200"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[#101D36] mb-1.5">Maximum Price-to-Performance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">You pay for the hardware your workload needs, not a generic tier built for someone else's use case.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[#101D36] mb-1.5">Workload-Specific Optimization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every build is tuned for its actual job, whether that's database IOPS or GPU render throughput.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-[#ff6b00] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-[#101D36] mb-1.5">Extended Hardware Lifespan</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Quality enterprise components and rigorous burn-in testing mean fewer failures and longer service life.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
