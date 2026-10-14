import { motion } from 'framer-motion';
import { PlugZap, Cloud, Code2, Lock, BrainCircuit, Server, KeyRound, CheckCircle2, Boxes } from 'lucide-react';
/**
 * AIMachineLearningContent Component
 * Custom content section for the AI Platform Integration service
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
    <section className="py-20 relative bg-grey-light">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0">

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-2 bg-brand-orange rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              AI Added to the App You Already Have
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">No rebuild, no new platform to learn &mdash; just AI capability, integrated</span>
            </h2>
          </div>

          <div className="bg-navy-wash border border-gray-200 rounded-[40px] p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl">
              We take the software you already run &mdash; a CRM, an internal tool, a customer portal, a SaaS product &mdash; and integrate a leading AI platform like <span className="text-navy font-bold">Anthropic's Claude</span> into it directly via API. We then deploy and host that integration on <span className="text-navy font-bold">AWS</span>, so it scales alongside the rest of your infrastructure instead of living as a separate, disconnected tool.
            </p>
          </div>
        </motion.div>

        {/* How the Integration Works — numbered card sequence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-14">
            <div className="h-10 w-2 bg-navy rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
              How the Integration Works
              <span className="block text-lg lg:text-xl text-gray-500 font-medium tracking-normal">From your existing codebase to a live AI feature on AWS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-split-navy rounded-[40px] p-6 md:p-10">
            {flowSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} p-7 flex flex-col`}
              >
                <span className="text-3xl font-black text-navy/10 leading-none mb-4 select-none">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stack + Benefits — two columns of bounded cards instead of plain rows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5">Our Stack</h3>
            <div className="flex flex-col gap-3">
              {stack.map((row, idx) => (
                <div key={row.label} className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-a' : 'card-shape-b'} p-5`}>
                  <p className="font-bold text-navy text-sm">{row.label}</p>
                  <p className="text-gray-600 text-sm">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-5">Why It Works</h3>
            <div className="flex flex-col gap-3">
              {benefits.map((b, idx) => (
                <div key={b.title} className={`bg-navy-wash border border-gray-200 ${idx % 2 === 0 ? 'card-shape-b' : 'card-shape-a'} p-5`}>
                  <p className="font-bold text-navy text-sm">{b.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-200"
        >
          <div className="absolute inset-0 bg-navy-gradient z-0"></div>

          <div className="relative z-10 p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-[55%]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest">AI Integration Engineer On Standby</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Ready to Add AI to Your App?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed font-medium mb-10 max-w-xl">
                Tell us about your application and we'll scope a Claude integration, hosted on AWS, built around it.
              </p>

              <div className="flex gap-2 items-center">
                <div className="w-16 h-2 bg-brand-orange rounded-full"></div>
                <div className="w-2 h-2 bg-brand-orange/50 rounded-full"></div>
                <div className="w-2 h-2 bg-brand-orange/20 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-[45%] w-full bg-navy-wash border border-gray-200 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-black text-navy mb-2">Book an AI Integration Call</h3>
                  <p className="text-gray-600 text-sm">Tell us about your existing application</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="text-gray-600 font-bold text-[10px] mb-2 block uppercase tracking-widest">Application Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full bg-grey-light border border-gray-200 rounded-xl px-5 py-4 text-navy focus:outline-none focus:border-brand-orange/50 focus:bg-gray-100 transition-all font-medium appearance-none cursor-pointer">
                        <option value="" disabled className="text-gray-900 bg-white">Select a Type...</option>
                        <option value="internal-tool" className="text-gray-900 bg-white">Internal Tool</option>
                        <option value="customer-portal" className="text-gray-900 bg-white">Customer Portal</option>
                        <option value="saas-product" className="text-gray-900 bg-white">SaaS Product</option>
                        <option value="crm-erp" className="text-gray-900 bg-white">CRM / ERP System</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenModal}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-[15px] font-black uppercase tracking-widest py-5 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all active:scale-95 flex justify-center items-center gap-3 group"
                >
                  Book an AI Integration Call 
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
