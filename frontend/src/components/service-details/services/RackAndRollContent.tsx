import { Truck, PackageCheck, Layout, Cable, ClipboardCheck, Server, Zap, Wind, Cpu, Network, Timer } from 'lucide-react';
import { Overview, Section, Heading, BlockGrid, StepList, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

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
    <>
      <Overview benefits={benefits} image={svcPhotos.rack.a}>
        <p>
          Efficiently scaling your data center or on-site server room requires more than just unboxing hardware. We provide comprehensive Rack &amp; Roll services &mdash; a turnkey solution for businesses that need high-density server deployments executed with precision, speed, and professional organization, from the moment equipment arrives at the dock to the second the first "ping" is sent.
        </p>
      </Overview>

      {/* Core Specializations */}
      <Section tone="grey">
        <Heading
          title="From the Loading Dock to the First Ping"
          sub="Turnkey physical and logical integration for your server room or data center"
        />
        <BlockGrid
          items={[
            { icon: Truck, title: 'Logistics & Receiving', desc: <>Inspection, inventory verification, and asset tagging the moment equipment arrives &mdash; so nothing is lost, damaged, or unaccounted for before installation begins.</> },
            { icon: Server, title: 'Precision Rack Integration', desc: 'Strategic U-space placement, rail kit installation, and PDU/UPS integration planned for airflow, weight balance, and room to grow.' },
            { icon: Cable, title: 'Professional Structured Cabling', desc: <>Color-coded patching, Velcro cable management, and end-to-end labeling &mdash; built to Cat6/Cat6a and fiber optic standards, not zip-tied chaos.</> },
            { icon: Zap, title: 'Configuration & Burn-In', desc: 'POST verification, firmware updates, and IPMI/out-of-band management setup, so every device checks in healthy before go-live.' },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.rack.b} />

      {/* 7-Step Process */}
      <Section tone="white">
        <Heading
          title={<>Our Deployment Process</>}
          sub={'Seven steps from "equipment arrives" to "fully live," executed with precision and speed'}
        />
        <StepList items={processSteps} />
      </Section>

      {/* Standards & Benefits */}
      <Section tone="dark">
        <BlockGrid
          dark
          cols={4}
          items={[
            { icon: Wind, title: 'ASHRAE-Compliant Airflow', desc: 'Hot/cold aisle layouts designed to keep equipment running cool under full load.' },
            { icon: Cpu, title: 'High-Density Expertise', desc: 'Specialized cooling and power planning for AMD EPYC and other high-density deployments.' },
            { icon: Network, title: 'Network+ Certified Integration', desc: 'Cabling and configuration meeting Cat6 and fiber optic standards, every time.' },
            { icon: Timer, title: 'Up to 40% Faster Deployment', desc: 'A dedicated, process-driven team gets your rack live faster than ad-hoc internal deployment.' },
          ]}
        />
      </Section>
    </>
  );
};
