import { Code, Lock, Zap, Target, Workflow, FileSearch, Palette, Rocket, Boxes, ShoppingCart, ScanLine } from 'lucide-react';
import { Section, Heading, BlockGrid, StackTable, Steps, CtaBand, Explorer, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * CustomMobileWebAppsContent Component
 * Custom content section for Custom Mobile & Web Applications service
 */
interface CustomMobileWebAppsContentProps {
  onOpenModal: () => void;
}

export const CustomMobileWebAppsContent = ({ onOpenModal }: CustomMobileWebAppsContentProps) => {
  return (
    <>
      {/* Why Choose Custom Solutions? */}
      <Section tone="white">
        <Heading title="Why Choose Custom Solutions?" sub={'Breaking free from "off-the-shelf" limitations'} image={svcPhotos.mobile.a}>
          <p>
            Generic, <Hl>"off-the-shelf"</Hl> platforms often create <Hl>"Excel-and-Email" chaos</Hl>, cluttered with features you don't use while lacking the specific integrations needed to scale.
          </p>
        </Heading>
        <BlockGrid
          cols={4}
          items={[
            { icon: Workflow, title: 'Tailored Workflows', desc: <>We design systems that <Hl>mimic your team's natural processes</Hl>, eliminating friction and accelerating adoption.</> },
            { icon: Target, title: 'Conversion-First Design', desc: <>Every pixel and interaction is engineered to serve a <Hl>specific business purpose and user intent</Hl>.</> },
            { icon: Lock, title: 'Proprietary Logic', desc: <>You own the <Hl>logic layer and data</Hl>, eliminating fluctuating "per-user" licensing fees.</> },
            { icon: Zap, title: 'Performance-Driven Engineering', desc: <>Apps are built on <Hl>clean code optimized for sub-second load times</Hl> and flawless responsiveness.</> },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.mobile.b} />

      {/* Specialized Development Pillars */}
      <Section tone="grey">
        <Heading title="Specialized Development Pillars" sub="Bespoke engines tailored to solve operational bottlenecks" />
        <Explorer
          items={[
            {
              icon: Boxes, title: 'Enterprise Ecosystems (CRM & ERP)', desc: 'Manage resources and customers in one seamless dashboard.',
              points: [
                <><strong>Precision ERP:</strong> Inventory, HR, order processing, supply chain</>,
                <><strong>Tailored CRM:</strong> Lead capture and retention analytics</>,
                <><strong>Financial Sync:</strong> Automated invoicing, real-time P&amp;L</>,
              ],
            },
            {
              icon: ShoppingCart, title: 'High-Performance Commerce & Portals', desc: 'Custom storefronts and secure client portals.',
              points: [
                <><strong>E-Commerce:</strong> High-volume transactions, seamless checkout</>,
                <><strong>Client Portals:</strong> RBAC and audit-ready logging</>,
                <><strong>Web Portals:</strong> Bespoke tools for operational bottlenecks</>,
              ],
            },
            {
              icon: ScanLine, title: 'Intelligent Automation & Proximity', desc: 'Document intelligence and proximity-based mobile tools.',
              points: [
                <><strong>Document Intelligence:</strong> Reads unstructured data, predictive forecasting</>,
                <><strong>Proximity Apps:</strong> QR and NFC for secure asset tracking</>,
              ],
            },
          ]}
        />
      </Section>

      {/* The Infrastructure Advantage */}
      <Section tone="white">
        <Heading title="The Infrastructure Advantage" sub="Enterprise-grade infrastructure for maximum uptime and security" />
        <StackTable
          head={['Category', 'Our Technical Selection']}
          rows={[
            { label: 'Backend', value: 'Python (Django/FastAPI), Node.js, or Go' },
            { label: 'Frontend', value: 'React.js, Next.js, or Tailwind CSS' },
            { label: 'Database', value: 'PostgreSQL, MySQL, or MongoDB' },
            { label: 'Infrastructure', value: 'AWS, Google Cloud, Azure, or On-Premise AMD EPYC clusters' },
            { label: 'Security', value: 'End-to-End Encryption and Multi-Factor Authentication (MFA)' },
            { label: 'Automation', value: 'Custom CI/CD pipelines for "zero-downtime" updates' },
          ]}
        />
      </Section>

      {/* Unified Development Roadmap */}
      <Section tone="grey">
        <Heading title={<>Our Unified Development Roadmap</>} sub={'A 4-stage "Business-First" process to ensure a smooth transition from concept to launch'} />
        <Steps
          items={[
            { title: 'Strategy & Workflow Mapping', desc: 'We map your current manual processes and user journeys before writing code.', icon: FileSearch },
            { title: 'Creative Architecture', desc: 'We deliver high-fidelity mockups and technical blueprints that bring your brand\'s personality to life.', icon: Palette },
            { title: 'Iterative Development', desc: 'We build in "Sprints," integrating essential APIs and giving you access to staging environments for real-time testing.', icon: Code },
            { title: 'Launch & Optimization', desc: 'We handle data migration and staff training, followed by continuous post-launch performance tuning.', icon: Rocket },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <CtaBand
        eyebrow="Custom Development"
        title={<>Ready to Build Your Custom Application?</>}
        text="Let's create a high-performance mobile or web application that doesn't just meet your needs—it transforms how your business operates."
        cardTitle="Start Your Custom Build"
        cardText="Transform your business operations"
        button="Request Development Quote"
        onClick={onOpenModal}
      />
    </>
  );
};
