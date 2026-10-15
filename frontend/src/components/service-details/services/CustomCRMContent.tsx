import { Layers, Zap, Search, RefreshCcw, Users, Boxes, Database, Receipt, Target, Truck, FileBarChart, KeyRound, ShieldCheck, History, HardDrive, Server, Cloud } from 'lucide-react';
import { Section, Heading, BlockGrid, Explorer, FeatureBand, Steps, CtaBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * CustomCRMContent Component
 * Custom content section for Custom CRM/ERP Solutions service
 */
interface CustomCRMContentProps {
  onOpenModal: () => void;
}

export const CustomCRMContent = ({ onOpenModal }: CustomCRMContentProps) => {
  return (
    <>
      {/* Core CRM/ERP Values */}
      <Section tone="white">
        <Heading
          eyebrow="Performance Engineering"
          title={<>The Power of Custom Integration</>}
          image={svcPhotos.crm.a}
        >
          <p>
            Why settle for "Off-the-Shelf" when your business is anything but generic? Platforms like Salesforce or SAP often fail small-to-mid-sized businesses by being overly complex and prohibitively expensive. We build tools that fit your business, not the other way around.
          </p>
          <ul className="grid sm:grid-cols-3 gap-2 mt-8">
            {['100% Intellectual Property Ownership', 'Zero "Per-User" Monthly Fees', 'Seamless Legacy System Extraction'].map((t) => (
              <li key={t} className="rounded-lg bg-grey-light px-4 py-3 text-sm font-semibold text-navy">{t}</li>
            ))}
          </ul>
        </Heading>
        <BlockGrid
          cols={4}
          items={[
            { icon: Users, num: '01', title: 'CRM', desc: 'Every lead, deal and follow-up tracked in one customer lifecycle view.' },
            { icon: Boxes, num: '02', title: 'ERP', desc: 'Inventory, HR and order processing unified into a single resource engine.' },
            { icon: Database, num: '03', title: 'Data Labs', desc: 'One single source of truth, feeding every report and dashboard you run.' },
            { icon: Receipt, num: '04', title: 'Fiscal Sync', desc: <>Automated invoicing and real-time P&amp;L, synced straight from operations.</> },
          ]}
        />
      </Section>

      <PhotoBand photo={svcPhotos.crm.b} />

      {/* Pillars */}
      <Section tone="grey">
        <Explorer
          items={[
            {
              num: '', icon: Users, title: 'I. Tailored CRM', sub: 'Own Your Customer Journey',
              desc: "Generic CRMs are cluttered with features you don't use. We build lean, high-velocity CRM systems that track exactly what matters to your sales cycle—from initial lead capture to automated follow-ups and long-term retention analytics.",
              points: ['Lead Scoring Engine', 'Sales Pipeline Visuals', 'Automated Lead Triage'],
            },
            {
              num: '', icon: Boxes, title: 'II. Precision ERP', sub: 'The Engine of Your Business',
              desc: 'Manage your resources, not just your data. Our custom ERPs integrate your core business processes—including Inventory Management, Human Resources, Order Processing, and Supply Chain Logistics—into one seamless dashboard.',
              points: ['Inventory Forecasting', 'Resource Allocation', 'Logistics Tracking'],
            },
            {
              num: '', icon: Receipt, title: 'III. Fiscal Sync', sub: 'Real-time Financial Integration',
              desc: 'Connect your operational data directly to your financial reporting. We build systems that automate invoicing, track project-based expenses, and provide real-time P&L visibility so you can make data-driven decisions instantly.',
              points: ['Automated Invoicing', 'Expense Attribution', 'Live P&L Analytics'],
            },
          ]}
        />
      </Section>

      {/* Specialized Features for Scaling */}
      <Section tone="white">
        <Heading title="Specialized Features for Scaling" sub="Built for high-growth enterprise operations" />
        <BlockGrid
          cols={4}
          items={[
            { icon: Target, title: 'Automated Lead Scoring', desc: 'Use AI-driven logic to prioritize high-value prospects and optimize your sales conversion funnel.' },
            { icon: Truck, title: 'Inventory & Logistics', desc: <>Real-time visibility of stock levels across multiple locations (ideal for companies like <Hl>Bloom Logistics</Hl>).</> },
            { icon: FileBarChart, title: 'Custom Reporting Engines', desc: 'Generate one-click executive summaries, audit logs, and compliance reports tailored to your requirements.' },
            { icon: KeyRound, title: 'Advanced RBAC Security', desc: 'Ensure sensitive financial or client data is only visible to authorized personnel with mission-critical security.' },
          ]}
        />
      </Section>

      {/* The Tech Stack: Scalable Architecture */}
      <Section tone="grey">
        <Heading title="The Tech Stack: Scalable Architecture" sub="Battle-tested foundations for zero-downtime operations" />
        <BlockGrid
          items={[
            {
              icon: Server,
              image: { src: '/images/hero-server-racks.webp', alt: 'Server racks with structured cabling' },
              title: 'Built to Last',
              points: [
                <><strong>Built to handle your growth</strong> — Powered by Python, Node.js, or Go</>,
                <><strong>Your data, organized and safe</strong> — Industry-standard databases under the hood</>,
                <><strong>Fast, reliable hosting</strong> — Dedicated servers or secure cloud — your choice</>,
              ],
            },
            {
              icon: Cloud,
              image: { src: '/images/services/crm-b.webp', alt: 'Business dashboard on a laptop' },
              title: 'Connected & Protected',
              sub: 'Connects With Tools You Already Use',
              stack: ['Shopify', 'QuickBooks', 'Stripe', 'Twilio', 'Custom APIs'],
              points: [
                <><strong>Your Data Is Protected</strong></>,
                'Your data is encrypted, always',
                'Extra login protection built in',
                'Every change is tracked and logged',
              ],
            },
          ]}
        />
      </Section>

      {/* The "CISA-Certified" Integrity Layer */}
      <FeatureBand
        eyebrow="CISA-Certified Integrity Layer"
        title={<>Secure Data. <br />Audit-Ready Architecture.</>}
        text="As a CISA-certified professional, I don't just build for functionality; I build for security and accountability. Every architecture we deploy adheres to institutional-grade integrity standards."
        points={[
          { icon: ShieldCheck, title: 'Data Integrity Protocol', desc: 'We implement strict multi-layer validation rules to prevent "dirty data" from polluting your operational system.' },
          { icon: History, title: 'Granular Audit Trails', desc: 'Every change, edit, or deletion is logged with a permanent timestamp and user ID, providing a bulletproof record for audits.' },
          { icon: HardDrive, title: 'Institutional Disaster Recovery', desc: 'Automated redundant backups ensure your business data is never more than a few minutes away from total recovery.' },
        ]}
        badge={{ big: 'CISA', small: 'ISC2', caption: 'Certified Information Systems Auditor' }}
      />

      {/* Case Study */}
      <Section tone="white">
        <Heading title={<>Case Study: Logistics & Entity Management</>} />
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8">
            <BlockGrid
              items={[
                { num: '01', title: 'The Challenge', desc: 'Managing a complex transition of ownership and international logistics across multiple corporate entities.' },
                { num: '02', title: 'The Solution', desc: 'A bespoke ERP module that centralizes asset transfers, legal documentation silos, and cross-border logistics in a unified "Single Source of Truth."' },
              ]}
            />
          </div>
          <div className="lg:col-span-4 rounded-xl bg-navy p-7">
            <h3 className="text-xl font-extrabold text-white mb-6">The Result</h3>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[{ v: '100%', l: 'Visibility into Transfer Process' }, { v: '50%', l: 'Reduction in Admin Overhead' }].map((r) => (
                <div key={r.l} className="py-5">
                  <p className="text-4xl font-extrabold text-white">{r.v}</p>
                  <p className="text-sm text-white/60 mt-1">{r.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Our 4-Stage "Business-First" Process */}
      <Section tone="grey">
        <Heading title={<>Our 4-Stage "Business-First" Process</>} sub="Designing architecture that mimics your team's natural workflow for zero-friction adoption." />
        <Steps
          items={[
            { title: 'Workflow Mapping', desc: 'We map your current manual processes (the "Excel-and-Email" chaos) to identify high-velocity opportunities.', icon: Search },
            { title: 'Architecture Design', desc: 'We design a database schema and UI that reflects your natural organizational structure.', icon: Layers },
            { title: 'Iterative Development', desc: 'We build in sprints, providing staging environment access to test features with your team in real-time.', icon: RefreshCcw },
            { title: 'Deployment & Training', desc: 'We handle the automated data migration and provide full staff training for a day-one smooth rollout.', icon: Zap },
          ]}
        />
      </Section>

      {/* Final Call to Action */}
      <CtaBand
        title={<>Ready to Retire the Spreadsheets?</>}
        text={<>Your business is unique. Your software should be, too. Let's build the <Hl>last system you'll ever need.</Hl></>}
        cardTitle="40+ Enterprises"
        cardText="Successfully Deployed"
        button="Start Your Custom Build"
        onClick={onOpenModal}
      />
    </>
  );
};
