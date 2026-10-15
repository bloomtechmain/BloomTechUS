import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Boxes, GitBranch, Zap, BrainCircuit, Layers, TrendingUp, ShieldCheck, Wrench } from 'lucide-react';
import { BenefitsPanel, Section, Heading, BlockGrid, StackTable, Explorer, FeatureBand, Hl, PhotoBand } from '../kit';
import { svcPhotos } from '../servicePhotos';

/**
 * CloudHostingContent Component
 * Custom content section for Cloud Hosting & Application Deployment service
 */
interface CloudHostingContentProps {
  onOpenModal: () => void;
}

const platforms = [
  {
    name: 'AWS',
    tag: 'Amazon Web Services',
    desc: 'The go-to choice when you need maximum scale, a huge range of managed services (RDS, S3, Lambda), and fine-grained control over infrastructure.'
  },
  {
    name: 'Microsoft Azure',
    tag: 'Enterprise & .NET workloads',
    desc: "A strong fit for businesses already on Microsoft 365 or Active Directory, and for .NET-based applications that benefit from tight Azure integration."
  },
  {
    name: 'DigitalOcean',
    tag: 'Simple, cost-predictable hosting',
    desc: 'Straightforward droplets and managed databases at a predictable price, ideal for small-to-mid size applications that don\'t need AWS-level complexity.'
  },
  {
    name: 'Railway',
    tag: 'Fast deploys for modern apps',
    desc: 'Git-push deployments with zero server management, perfect for getting a new SaaS product, API, or internal tool live in minutes.'
  }
];

const benefits = ['Instant Scalability', 'High Availability & Failover', 'Reduced Infrastructure Overhead', 'The Right Platform for Your Budget'];

export const CloudHostingContent = (_props: CloudHostingContentProps) => {
  return (
    <>
      {/* Platform Selection Intro & Client Benefits */}
      <Section tone="white">
        <Heading
          title="We Pick the Right Cloud for Your Platform"
          sub={<>Not every app belongs on the same host &mdash; we match the platform to your needs and budget</>}
          image={svcPhotos.cloud.a}
        >
          <p>
            Picking a hosting provider isn't a one-size-fits-all decision. We assess your application's traffic, budget, compliance needs, and growth plans, then recommend and set up the platform that actually fits &mdash; whether that's an enterprise-grade AWS or Azure deployment, a cost-efficient DigitalOcean droplet, or a fast Railway deployment for a lean product launch.
          </p>
          <BenefitsPanel benefits={benefits} className="mt-8" />
        </Heading>
      </Section>

      <PhotoBand photo={svcPhotos.cloud.b} />

      {/* Platforms We Deploy To */}
      <Section tone="grey">
        <Heading title="Platforms We Deploy To" sub="Hosting providers we design, configure, and manage deployments on" />
        <BlockGrid cols={4} items={platforms.map((p) => ({ icon: Cloud, title: p.name, sub: p.tag, desc: p.desc }))} />
        <p className="mt-10 text-gray-600 leading-relaxed max-w-3xl">
          Already have a preferred provider, or need something not listed here &mdash; Google Cloud, Vercel, or on-premise? We work across the major platforms and will build on whichever one fits your situation best.
        </p>
      </Section>

      {/* AI-Powered Deployments: Claude & AWS Bedrock */}
      <FeatureBand
        title="AI-Powered Deployments: Claude & AWS Bedrock"
        sub="Add AI directly into the application we host for you"
        text={<>When your AWS deployment calls for built-in AI capability, we integrate <Hl>Anthropic's Claude</Hl> directly into the application we're hosting &mdash; either through the Anthropic API or through <Hl>AWS Bedrock</Hl>, Amazon's managed service for foundation models &mdash; so the AI feature runs inside the same AWS environment as the rest of your app.</>}
        points={[
          { icon: BrainCircuit, title: 'Direct Anthropic Claude API', desc: 'Integrated directly against the Anthropic API for immediate access to the latest Claude models and capabilities, deployed alongside your AWS-hosted application.' },
          { icon: Layers, title: 'Claude via AWS Bedrock', desc: 'Access Claude through AWS Bedrock for unified AWS billing, IAM-based access control, and VPC-level data handling — ideal for teams standardized on AWS governance.' },
        ]}
      >
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-white/70">Want to add Claude into an application you already have? That's its own dedicated service.</p>
          <Link to="/services/ai-machine-learning" className="group inline-flex items-center gap-2 font-bold text-white hover:text-brand-orange transition-colors">
            AI Platform Integration
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FeatureBand>

      {/* Core Specializations */}
      <Section tone="white">
        <Heading title="What We Handle, End to End" sub="From architecture decisions to the deploy pipeline that ships your updates" />
        <Explorer
          items={[
            { icon: Cloud, title: 'Cloud Architecture & Platform Selection', desc: <>We evaluate your application's needs against AWS, Azure, DigitalOcean, and Railway (and others on request) to recommend the platform with the right balance of cost, scalability, and control &mdash; then design the architecture around it.</> },
            { icon: Boxes, title: 'Containerization & Orchestration', desc: <>Applications are packaged into Docker containers for consistent behavior across environments, with Kubernetes orchestration where scale demands it &mdash; or simpler managed container services when it doesn't.</> },
            { icon: GitBranch, title: 'CI/CD Pipeline Automation', desc: <>We set up automated build, test, and deploy pipelines so a push to your repository becomes a live update &mdash; with staging environments and rollback safety nets along the way.</> },
            { icon: Zap, title: 'Serverless & Managed Services', desc: <>Where it makes sense, we offload work to managed databases, serverless functions, and CDNs &mdash; reducing the infrastructure you have to maintain and the bill you have to pay for idle capacity.</> },
          ]}
        />
      </Section>

      {/* Deployment Stack */}
      <Section tone="grey">
        <StackTable
          head={['Layer', 'Our Stack']}
          rows={[
            { label: 'Hosting Platforms', value: 'AWS, Microsoft Azure, DigitalOcean, Railway' },
            { label: 'Containers', value: 'Docker, Kubernetes, managed container services' },
            { label: 'CI/CD', value: 'GitHub Actions, GitLab CI, automated deploy pipelines' },
            { label: 'Managed Data', value: 'Managed PostgreSQL/MySQL, Redis, object storage (S3-compatible)' },
            { label: 'Networking & CDN', value: 'DNS management, SSL, CDN edge caching, load balancing' },
            { label: 'Monitoring', value: 'Uptime, error tracking, and performance monitoring' }
          ]}
        />
      </Section>

      {/* Benefits */}
      <Section tone="dark">
        <BlockGrid
          dark
          cols={3}
          items={[
            { icon: TrendingUp, title: 'Instant Scalability', desc: 'Your architecture is built to scale up under load and back down when traffic drops, automatically.' },
            { icon: ShieldCheck, title: 'High Availability & Failover', desc: 'Multi-zone deployments and health checks keep your application online even when something fails.' },
            { icon: Wrench, title: 'Reduced Infrastructure Overhead', desc: 'We manage the platform so your team can focus on the product, not server maintenance.' },
          ]}
        />
      </Section>
    </>
  );
};
