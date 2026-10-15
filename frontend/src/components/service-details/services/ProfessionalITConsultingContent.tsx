import { UserCheck, FileCheck, Landmark, RefreshCcw, Search, Layers, Lock, LineChart, ShieldCheck, Repeat, Eye, Scale, Workflow, Globe, Gavel, BadgeCheck } from 'lucide-react';
import { Section, Heading, BlockGrid, StackTable, Steps, FeatureBand, CtaBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * ProfessionalITConsultingContent Component
 * Custom content section for Professional IT Consulting service
 */
interface ProfessionalITConsultingContentProps {
  onOpenModal: () => void;
}

export const ProfessionalITConsultingContent = ({ onOpenModal }: ProfessionalITConsultingContentProps) => {
  return (
    <>
      {/* Core Professional Pillars */}
      <Section tone="white">
        <Heading
          title="Core Professional Pillars"
          sub="High-level expertise across three distinct consultancy buckets"
          image={svcPhotos.consulting.a}
        />
        <BlockGrid
          cols={3}
          items={[
            { num: '01', icon: Scale, title: 'IT Governance & Risk Management (CISA-Led)', desc: <>Leveraging our <Hl>CISA certification</Hl>, we provide independent, high-level audits of your IT infrastructure and internal controls, then design the remediation roadmap to make your organization resilient, compliant, and audit-ready.</> },
            { num: '02', icon: Workflow, title: 'Business Process Optimization', desc: <>We analyze your "as-is" workflows to identify bottlenecks in supply chain, financial reporting, or team productivity, then re-engineer processes using our <Hl>Custom ERP and CRM</Hl> expertise for maximum efficiency.</> },
            { num: '03', icon: Globe, title: 'International Operations & Entity Management', desc: <>Managing cross-border business is complex. We provide strategic support for <Hl>entity management, ownership transfers, and international logistics</Hl> across multiple jurisdictions.</> },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.consulting.b} />

      {/* Specialized Advisory Services */}
      <Section tone="grey">
        <Heading title="Specialized Advisory Services" sub="Executive-level leadership & strategic oversight" />
        <BlockGrid
          cols={4}
          items={[
            { title: 'Fractional CTO/CISO Services', desc: 'High-level technology leadership for firms that need executive-grade strategy without the full-time overhead.', icon: UserCheck },
            { title: 'Compliance Framework Alignment', desc: 'Mapping your business to SOC2, ISO 27001, HIPAA, or PCI-DSS standards with surgical precision.', icon: FileCheck },
            { title: 'Vendor & Contract Management', desc: 'Professional oversight of third-party technology providers to ensure SLA compliance and cost-efficiency.', icon: Landmark },
            { title: 'Business Continuity Planning (BCP)', desc: 'Designing the "What If" scenarios for disaster recovery, data protection, and operational resilience.', icon: RefreshCcw },
          ]}
        />
      </Section>

      {/* The "CISA & ISACA" Advantage */}
      <FeatureBand
        eyebrow="CISA Certified Authority Layer"
        title={<>Certified Integrity. <br />Evidence-Based Advice.</>}
        text={<>Professional services are built on trust. As an active member of the <Hl>ISACA Austin Chapter</Hl> and a holder of the <Hl>CISA (Certified Information Systems Auditor)</Hl> designation, my advisory is grounded in globally recognized standards of excellence.</>}
        points={[
          { icon: Search, title: 'Objective Analysis', desc: 'We provide unbiased, third-party evaluations of your technology and teams.' },
          { icon: Gavel, title: 'Regulatory Fluency', desc: 'We speak the language of auditors, lawyers, and stakeholders fluently.' },
          { icon: BadgeCheck, title: 'Ethical Standards', desc: 'Our work is governed by a strict code of professional ethics and continuous professional education (CPE).' },
        ]}
        badge={{ big: 'ISACA', small: 'MEMBER', caption: 'Austin Chapter' }}
      />

      {/* Service Delivery Stack */}
      <Section tone="white">
        <Heading title="Service Delivery Stack" sub="The frameworks and tools that keep your strategy on track" />
        <StackTable
          head={['Category', 'Frameworks & Methodology']}
          rows={[
            { label: 'Audit Standard', value: 'COBIT, NIST Cybersecurity Framework, ITIL', icon: Search },
            { label: 'Project Mgmt', value: 'Agile, Waterfall, and Lean Six Sigma Principles', icon: Layers },
            { label: 'Communication', value: 'Secure, Encrypted Portals & Professional Documentation', icon: Lock },
            { label: 'Analysis', value: 'Data-driven ROI modeling and Risk Heat Mapping', icon: LineChart },
          ]}
        />
      </Section>

      {/* The 4-Phase Engagement Lifecycle */}
      <Section tone="grey">
        <Heading title="The 4-Phase Engagement Lifecycle" />
        <Steps
          items={[
            { title: 'Strategic Discovery', desc: 'We define the scope, identify key stakeholders, and establish success metrics.', icon: Search },
            { title: 'Gap Analysis & Audit', desc: 'A deep-dive into your current state vs. your desired "Future State" or regulatory requirement.', icon: FileCheck },
            { title: 'Strategy Implementation', desc: 'We execute the plan, whether it\'s an infrastructure overhaul, a compliance push, or an entity transfer.', icon: Layers },
            { title: 'Governance & Handover', desc: 'Final documentation, training, and established monitoring to ensure long-term success.', icon: ShieldCheck },
          ]}
        />
      </Section>

      {/* Global Logistics & Supply Chain Expertise */}
      <FeatureBand
        tone="dark"
        eyebrow="Logistics Consultancy"
        title={<>From Austin <br />to the World.</>}
        text={<>With deep roots in international logistics through <Hl>Bloom Logistics</Hl>, we provide specialized consultancy for firms navigating the complexities of global supply chains. We handle the "hard parts"—regulatory compliance, transfer logistics, and operational oversight—so you can focus on growth.</>}
        points={[
          { title: 'Regulatory Compliance', icon: ShieldCheck },
          { title: 'Transfer Logistics', icon: Repeat },
          { title: 'Operational Oversight', icon: Eye },
        ]}
      />

      {/* Final Call to Action */}
      <CtaBand
        eyebrow="Executive Engagement"
        title={<>Ready for a Higher Standard of Service?</>}
        text="Don't settle for generic advice. Partner with a professional who understands the intersection of technology, finance, and global operations."
        cardTitle="Expert Network"
        cardText="Direct Access"
        button="Book a Professional Consultation"
        onClick={onOpenModal}
      />
    </>
  );
};
