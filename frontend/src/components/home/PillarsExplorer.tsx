import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Check, FileText, Binary, Database, Bot, MessageSquareText, LucideIcon,
  Server, Workflow, FileSearch, ScrollText, Timer, Gauge, Layers, Cable, Wind,
  BadgeCheck, Fingerprint, Radar, HardDrive, CalendarCheck,
} from 'lucide-react';

export interface Pillar {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const Label = ({ children }: { children: string }) => (
  <span className="block text-[11px] font-bold uppercase tracking-wider text-white/45 mb-4">{children}</span>
);

/* AI — a private RAG pipeline where the active stage walks left to right */
const ragStages = [
  { icon: FileText, label: 'Docs' },
  { icon: Binary, label: 'Embed' },
  { icon: Database, label: 'Vector DB' },
  { icon: Bot, label: 'LLM' },
  { icon: MessageSquareText, label: 'Answer' },
];

const RagFlow = () => {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(ragStages.length - 1);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((s) => (s + 1) % (ragStages.length + 1)), 900);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div>
      <Label>Private RAG pipeline</Label>
      <div className="relative flex justify-between">
        <div className="absolute top-[17px] left-[18px] right-[18px] h-px bg-white/15" />
        <motion.div
          className="absolute top-[17px] left-[18px] h-px bg-white/70 origin-left"
          style={{ right: 18 }}
          initial={false}
          animate={{ scaleX: Math.min(step, ragStages.length - 1) / (ragStages.length - 1) }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {ragStages.map((s, i) => {
          const on = i <= step;
          const last = i === step;
          return (
            <div key={s.label} className="relative flex flex-col items-center w-9">
              <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${on ? 'bg-white text-navy' : 'bg-navy-mid text-white/40'}`}>
                <s.icon className="w-4 h-4" />
              </span>
              {last && <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-brand-orange" style={{ top: 40 }} />}
              <span className={`mt-3 text-[10px] font-bold whitespace-nowrap transition-colors ${on ? 'text-white' : 'text-white/40'}`}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* Infrastructure — NAS throughput tiers, bars grow on scroll-in */
const tiers = [
  { label: '10GbE', value: 10 },
  { label: '25GbE', value: 25 },
  { label: '40GbE', value: 40 },
  { label: '100GbE', value: 100 },
];

const ThroughputBars = () => (
  <div>
    <Label>NAS throughput tiers (Gb/s)</Label>
    <div className="flex items-end gap-3 h-24 border-b border-white/15">
      {tiers.map((t, i) => (
        <div key={t.label} className="flex-1 flex flex-col items-center justify-end h-full">
          <span className="text-xs font-bold text-white/80 mb-1.5">{t.value}</span>
          <motion.div
            className={`w-full rounded-t ${i === tiers.length - 1 ? 'bg-white/80' : 'bg-white/20'}`}
            initial={{ height: 0 }}
            whileInView={{ height: `${Math.max(t.value, 8) * 0.75}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: 'easeOut' }}
          />
        </div>
      ))}
    </div>
    <div className="flex gap-3 pt-2">
      {tiers.map((t) => (
        <span key={t.label} className="flex-1 text-center text-[10px] font-bold text-white/45">{t.label}</span>
      ))}
    </div>
  </div>
);

/* Security — frameworks tick off one by one on scroll-in */
const frameworks = ['SOC2', 'HIPAA', 'PCI-DSS', 'ISO 27001'];

const ComplianceChips = () => (
  <div>
    <Label>Compliance alignment</Label>
    <div className="grid grid-cols-2 gap-2">
      {frameworks.map((f, i) => (
        <motion.div
          key={f}
          initial={{ opacity: 0.35 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.25 }}
          className="flex items-center gap-2 bg-white/[0.06] rounded-lg px-3 py-2.5"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.3 + i * 0.25 }}
            className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0"
          >
            <Check className="w-2.5 h-2.5 text-navy" strokeWidth={3} />
          </motion.span>
          <span className="text-xs font-bold text-white">{f}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const visuals = [RagFlow, ThroughputBars, ComplianceChips];

// Real photography (Unsplash), one per pillar
const pillarPhotos = [
  { src: '/images/services/ai-a.webp', alt: 'Code on a laptop screen' },
  { src: '/images/services/server-a.webp', alt: 'Technician working on server hardware' },
  { src: '/images/services/access-control.webp', alt: 'Smart access control on a door' },
];

// Each feature as a short keyword + detail with its own icon (pillar order, feature order)
const featureTiles: { icon: LucideIcon; key: string; detail: string }[][] = [
  [
    { icon: Database, key: 'Custom RAG', detail: 'Grounded in your private data' },
    { icon: Server, key: 'On-premise AI', detail: 'Zero cloud dependency' },
    { icon: Workflow, key: 'Multi-agent orchestration', detail: 'LangChain · CrewAI' },
    { icon: FileSearch, key: 'Document intelligence', detail: 'Automated pipelines' },
    { icon: ScrollText, key: 'Full audit logging', detail: 'CISA-certified security' },
  ],
  [
    { icon: Timer, key: '72-hour burn-in', detail: 'Tested on every build' },
    { icon: Gauge, key: '10–100GbE NAS', detail: 'Throughput tiers' },
    { icon: Layers, key: 'Virtualization clusters', detail: 'Proxmox · VMware' },
    { icon: Cable, key: 'Structured cabling', detail: 'Cat6a · fiber standards' },
    { icon: Wind, key: 'Airflow optimization', detail: 'Hot / cold aisle design' },
  ],
  [
    { icon: BadgeCheck, key: 'Compliance alignment', detail: 'SOC2 · HIPAA · PCI-DSS · ISO 27001' },
    { icon: Fingerprint, key: 'Zero Trust IAM', detail: 'Phishing-resistant MFA' },
    { icon: Radar, key: 'Behavioral EDR', detail: 'AI endpoint detection' },
    { icon: HardDrive, key: 'Immutable backups', detail: 'Ransomware-proof design' },
    { icon: CalendarCheck, key: 'Quarterly reviews', detail: 'Security & policy updates' },
  ],
];

// Three ruled columns. Rows are aligned across columns (title / text / visual / list)
// using a shared grid, so a longer description doesn't push one column out of line.
export const PillarsExplorer = ({ pillars }: { pillars: Pillar[] }) => {
  const reduce = useReducedMotion();
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto_auto] border-t border-white/10">
      {pillars.map((p, i) => {
        const V = visuals[i];
        return (
          <motion.div
            key={p.title}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid lg:grid-rows-subgrid lg:row-span-6 py-10 lg:px-10 lg:first:pl-0 lg:last:pr-0 border-b lg:border-b-0 lg:border-r lg:last:border-r-0 border-white/10"
          >
            <div className="group relative h-52 lg:h-56 mb-8 rounded-xl overflow-hidden">
              <img src={pillarPhotos[i].src} alt={pillarPhotos[i].alt} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
              <span className="absolute left-0 bottom-0 h-1 w-16 bg-brand-orange" aria-hidden="true" />
            </div>
            <p.icon className="w-6 h-6 text-white/70 mb-6" strokeWidth={1.75} />
            <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
            <p className="text-white/70 leading-relaxed mb-8">{p.description}</p>
            <div className="mb-8 rounded-xl bg-white/[0.03] p-5">
              <V />
            </div>
            <ul className="grid grid-cols-2 gap-2 content-start">
              {p.features.map((f, k) => {
                const t = featureTiles[i]?.[k];
                if (!t) return null;
                const wide = k === p.features.length - 1 && p.features.length % 2 === 1;
                return (
                  <li key={f} className={wide ? 'col-span-2' : ''}>
                    <div className="group/tile h-full flex items-center gap-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] px-3.5 py-3 transition-colors">
                      <span className="w-8 h-8 rounded-md bg-white/[0.07] text-white/70 flex items-center justify-center shrink-0 transition-colors group-hover/tile:bg-white group-hover/tile:text-navy">
                        <t.icon className="w-4 h-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-white leading-snug">{t.key}</span>
                        <span className="sr-only">{f}</span>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
};
