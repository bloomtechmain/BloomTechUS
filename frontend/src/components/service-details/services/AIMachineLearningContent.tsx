import { PlugZap, Cloud, Code2, Lock, BrainCircuit, Server, KeyRound, CheckCircle2, Boxes } from 'lucide-react';
import { Section, Heading, StackTable, Steps, CtaBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * AIMachineLearningContent Component
 * Custom content section for AI Platform Integration service
 */
interface AIMachineLearningContentProps {
  onOpenModal: () => void;
}

const flowSteps = [
  {
    icon: PlugZap,
    title: 'Integrate the API',
    desc: "We wire the AI platform's API directly into your app's existing workflows — a chat panel, a document processor, a workflow step — without touching what already works."
  },
  {
    icon: BrainCircuit,
    title: 'Connect to Claude',
    desc: "Direct Anthropic API for the latest model capabilities, or AWS Bedrock when you want Claude access unified under your existing AWS billing and IAM permissions."
  },
  {
    icon: Cloud,
    title: 'Host on AWS',
    desc: "Deployed on Lambda for lightweight calls or ECS/Fargate for always-on services, scaling with the rest of your application instead of a bolted-on stack."
  },
  {
    icon: Code2,
    title: 'Tune the Context',
    desc: 'We tune how the model interprets your data and business logic, so responses are accurate and grounded in how your application actually works.'
  }
];

const stack = [
  { icon: BrainCircuit, label: 'AI Platform', value: 'Anthropic Claude — direct API or AWS Bedrock' },
  { icon: Cloud, label: 'AWS Hosting', value: 'Lambda, ECS/Fargate, API Gateway' },
  { icon: KeyRound, label: 'Security & Access', value: 'API key management, IAM roles, audit logging' },
  { icon: Boxes, label: 'Integration Points', value: 'Chat assistants, document processing, internal tools' }
];

const benefits = [
  { icon: CheckCircle2, title: 'No Rebuild Required', desc: 'AI is added into the application you already have.' },
  { icon: Server, title: 'Enterprise AWS Reliability', desc: 'Hosted on the AWS infrastructure your app already depends on.' },
  { icon: Lock, title: 'Your Data Stays in Your AWS', desc: 'API keys and data handling stay inside your own environment.' }
];

export const AIMachineLearningContent = ({ onOpenModal }: AIMachineLearningContentProps) => {
  return (
    <>
      {/* Overview */}
      <Section tone="white">
        <Heading
          title="AI Added to the App You Already Have"
          sub={<>No rebuild, no new platform to learn &mdash; just AI capability, integrated</>}
          image={svcPhotos.ai.a}
        >
          <p>
            We take the software you already run &mdash; a CRM, an internal tool, a customer portal, a SaaS product &mdash; and integrate a leading AI platform like <Hl>Anthropic's Claude</Hl> into it directly via API. We then deploy and host that integration on <Hl>AWS</Hl>, so it scales alongside the rest of your infrastructure instead of living as a separate, disconnected tool.
          </p>
        </Heading>
      </Section>

      <PhotoBand photo={svcPhotos.ai.b} />

      {/* How the Integration Works */}
      <Section tone="grey">
        <Heading title="How the Integration Works" sub="From your existing codebase to a live AI feature on AWS" />
        <Steps items={flowSteps} />
      </Section>

      {/* Stack + Why It Works */}
      <Section tone="white">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-extrabold text-navy mb-6">Our Stack</h3>
            <StackTable rows={stack} />
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-extrabold text-navy mb-6">Why It Works</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b.title} className="group flex items-start gap-4 rounded-xl bg-grey-light p-5 transition-all hover:bg-white hover:-translate-x-1 hover:-translate-y-1 shadow-[5px_5px_0_0_#D5DAE3] hover:shadow-[8px_8px_0_0_#101D36]">
                  <span className="w-10 h-10 rounded-lg bg-white text-navy-mid flex items-center justify-center shrink-0 transition-colors group-hover:bg-navy group-hover:text-white">
                    <b.icon className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-navy">{b.title}</span>
                    <span className="block text-sm text-gray-600 mt-1">{b.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CtaBand
        eyebrow="AI Integration Engineer On Standby"
        title="Ready to Add AI to Your App?"
        text="Tell us about your application and we'll scope a Claude integration, hosted on AWS, built around it."
        cardTitle="Book an AI Integration Call"
        cardText="Tell us about your existing application"
        button="Book an AI Integration Call"
        onClick={onOpenModal}
      />
    </>
  );
};
