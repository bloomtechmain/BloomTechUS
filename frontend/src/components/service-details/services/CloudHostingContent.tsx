import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServiceBenefitsSidebar } from '../ServiceBenefitsSidebar';
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
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">
        {/* Platform Selection Intro & Client Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
                We Pick the Right Cloud for Your Platform
                <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Not every app belongs on the same host &mdash; we match the platform to your needs and budget</span>
              </h2>
            </div>
            <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed relative z-10 font-medium">
                Picking a hosting provider isn't a one-size-fits-all decision. We assess your application's traffic, budget, compliance needs, and growth plans, then recommend and set up the platform that actually fits &mdash; whether that's an enterprise-grade AWS or Azure deployment, a cost-efficient DigitalOcean droplet, or a fast Railway deployment for a lean product launch.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4">
            <ServiceBenefitsSidebar benefits={benefits} />
          </div>
        </motion.div>
        {/* Platforms We Deploy To */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-navy rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              Platforms We Deploy To
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Hosting providers we design, configure, and manage deployments on</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, idx) => (
              <div
                key={idx}
                className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} overflow-hidden group hover:shadow-sm transition-all hover:-translate-y-2 relative`}
              >
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-5">
                                        <div>
                      <h3 className="text-xl font-bold text-navy tracking-wide leading-tight">{platform.name}</h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">{platform.tag}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{platform.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-navy-wash border border-gray-200 rounded-[32px] p-8 flex items-center gap-5">
            <p className="text-gray-600 leading-relaxed font-medium">
              Already have a preferred provider, or need something not listed here &mdash; Google Cloud, Vercel, or on-premise? We work across the major platforms and will build on whichever one fits your situation best.
            </p>
          </div>
        </motion.div>
        {/* AI-Powered Deployments: Claude & AWS Bedrock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              AI-Powered Deployments: Claude & AWS Bedrock
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">Add AI directly into the application we host for you</span>
            </h2>
          </div>
          <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-12 relative overflow-hidden mb-6">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed relative z-10 font-medium">
              When your AWS deployment calls for built-in AI capability, we integrate <span className="text-navy font-bold">Anthropic's Claude</span> directly into the application we're hosting &mdash; either through the Anthropic API or through <span className="text-navy font-bold">AWS Bedrock</span>, Amazon's managed service for foundation models &mdash; so the AI feature runs inside the same AWS environment as the rest of your app.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8 hover:shadow-sm transition-colors relative overflow-hidden">
                            <h3 className="text-xl font-bold text-navy mb-4">Direct Anthropic Claude API</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrated directly against the Anthropic API for immediate access to the latest Claude models and capabilities, deployed alongside your AWS-hosted application.
              </p>
            </div>
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8 hover:shadow-sm transition-colors relative overflow-hidden">
                            <h3 className="text-xl font-bold text-navy mb-4">Claude via AWS Bedrock</h3>
              <p className="text-gray-600 leading-relaxed">
                Access Claude through AWS Bedrock for unified AWS billing, IAM-based access control, and VPC-level data handling &mdash; ideal for teams standardized on AWS governance.
              </p>
            </div>
          </div>
          <div className="bg-navy-wash border border-gray-200 rounded-[32px] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <p className="text-gray-600 leading-relaxed font-medium">
                Want to add Claude into an application you already have? That's its own dedicated service.
              </p>
            </div>
            <Link
              to="/services/ai-machine-learning"
              className="shrink-0 inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-100 border border-gray-300 text-navy text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all whitespace-nowrap group"
            >
              AI Platform Integration 
            </Link>
          </div>
        </motion.div>
        {/* Core Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-16">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              What We Handle, End to End
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">From architecture decisions to the deploy pipeline that ships your updates</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8">
                            <h3 className="text-lg font-bold text-navy mb-2">Cloud Architecture & Platform Selection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We evaluate your application's needs against AWS, Azure, DigitalOcean, and Railway (and others on request) to recommend the platform with the right balance of cost, scalability, and control &mdash; then design the architecture around it.
              </p>
            </div>
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8">
                            <h3 className="text-lg font-bold text-navy mb-2">Containerization & Orchestration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Applications are packaged into Docker containers for consistent behavior across environments, with Kubernetes orchestration where scale demands it &mdash; or simpler managed container services when it doesn't.
              </p>
            </div>
            <div className="bg-navy-wash border border-gray-200 card-shape-b p-8">
                            <h3 className="text-lg font-bold text-navy mb-2">CI/CD Pipeline Automation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We set up automated build, test, and deploy pipelines so a push to your repository becomes a live update &mdash; with staging environments and rollback safety nets along the way.
              </p>
            </div>
            <div className="bg-navy-wash border border-gray-200 card-shape-a p-8">
                            <h3 className="text-lg font-bold text-navy mb-2">Serverless & Managed Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Where it makes sense, we offload work to managed databases, serverless functions, and CDNs &mdash; reducing the infrastructure you have to maintain and the bill you have to pay for idle capacity.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Deployment Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-navy-wash border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl relative group">
            <div className="hidden lg:grid grid-cols-3 border-b border-gray-200 bg-grey-light relative z-10">
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-1">Layer</div>
              <div className="p-6 lg:p-8 font-black text-gray-500 tracking-wide text-sm col-span-2">Our Stack</div>
            </div>
            {[
              { label: 'Hosting Platforms', value: 'AWS, Microsoft Azure, DigitalOcean, Railway' },
              { label: 'Containers', value: 'Docker, Kubernetes, managed container services' },
              { label: 'CI/CD', value: 'GitHub Actions, GitLab CI, automated deploy pipelines' },
              { label: 'Managed Data', value: 'Managed PostgreSQL/MySQL, Redis, object storage (S3-compatible)' },
              { label: 'Networking & CDN', value: 'DNS management, SSL, CDN edge caching, load balancing' },
              { label: 'Monitoring', value: 'Uptime, error tracking, and performance monitoring' }
            ].map((row, idx, arr) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-3 hover:shadow-sm transition-colors relative z-10 ${idx !== arr.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="p-6 lg:px-8 lg:py-8 flex items-center gap-4 lg:col-span-1 border-b lg:border-b-0 border-gray-100 bg-gray-50 lg:bg-transparent">
                  <span className="text-xl font-bold text-navy tracking-wide">{row.label}</span>
                </div>
                <div className="p-6 lg:px-8 lg:py-8 flex items-center lg:col-span-2">
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-split-navy rounded-[40px] p-6 md:p-10">
            <div className="bg-navy-wash border border-gray-200 card-shape-a overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-navy">Instant Scalability</h3>
                </div>
                <p className="text-gray-600 text-lg">Your architecture is built to scale up under load and back down when traffic drops, automatically.</p>
              </div>
            </div>
            <div className="bg-navy-wash border border-gray-200 card-shape-b overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-navy">High Availability & Failover</h3>
                </div>
                <p className="text-gray-600 text-lg">Multi-zone deployments and health checks keep your application online even when something fails.</p>
              </div>
            </div>
            <div className="bg-navy-wash border border-gray-200 card-shape-a overflow-hidden group hover:shadow-sm transition-colors">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl font-bold text-navy">Reduced Infrastructure Overhead</h3>
                </div>
                <p className="text-gray-600 text-lg">We manage the platform so your team can focus on the product, not server maintenance.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
