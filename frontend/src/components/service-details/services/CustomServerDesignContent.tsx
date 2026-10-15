import { Cpu, TestTube2, Wrench, Gauge, BadgeDollarSign, SlidersHorizontal, Hourglass } from 'lucide-react';
import { Overview, Section, Heading, StackTable, Steps, BlockGrid, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

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
  { label: 'Compute Platforms', value: 'AMD EPYC 8004/9004 Series, Intel Xeon Scalable' },
  { label: 'Storage', value: 'NVMe SSDs, SAS arrays, hardware RAID controllers' },
  { label: 'Memory', value: 'ECC DDR5, sized to workload demand' },
  { label: 'Virtualization', value: 'VMware, Proxmox VE, Microsoft Hyper-V' },
  { label: 'Cooling & Power', value: 'Redundant 1+1 PSUs, server-grade thermal management' },
  { label: 'Chassis & Form Factor', value: 'Rackmount 1U-4U, tower, or edge deployments' }
];

const closing = [
  { icon: BadgeDollarSign, title: 'Maximum Price-to-Performance', desc: "You pay for the hardware your workload needs, not a generic tier built for someone else's use case." },
  { icon: SlidersHorizontal, title: 'Workload-Specific Optimization', desc: "Every build is tuned for its actual job, whether that's database IOPS or GPU render throughput." },
  { icon: Hourglass, title: 'Extended Hardware Lifespan', desc: 'Quality enterprise components and rigorous burn-in testing mean fewer failures and longer service life.' }
];

export const CustomServerDesignContent = (_props: CustomServerDesignContentProps) => {
  return (
    <>
      <Overview benefits={benefits} image={svcPhotos.server.a}>
        <p>
          Purpose-built server configurations optimized specifically for your workload, whether it be intensive AI rendering, database hosting, virtualization, or high-traffic web applications. Every build is sourced, assembled, stress-tested, and deployed on-site by our team.
        </p>
      </Overview>

      <Section tone="grey">
        <Steps items={buildSteps} />
      </Section>

      <PhotoBand photo={svcPhotos.server.b} />

      <Section tone="white">
        <Heading title="What We Build With" sub="Enterprise-grade components, matched to the job" />
        <StackTable rows={specSheet} />
      </Section>

      <Section tone="dark">
        <BlockGrid dark cols={3} items={closing} />
      </Section>
    </>
  );
};
