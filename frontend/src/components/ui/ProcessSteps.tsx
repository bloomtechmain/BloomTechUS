import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

/**
 * Bounded light-grey band with a chevron-style step flow.
 * Last step is highlighted in teal to mark the "complete / go-live" state.
 * Every step shares the same pointed chevron shape for visual consistency.
 */
export const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row gap-3">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const tone = isLast ? 'bg-teal' : i === 0 ? 'bg-navy' : 'bg-navy-mid';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex-1 ${tone} text-white px-8 py-10 lg:px-10 rounded-2xl lg:rounded-none lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%)]`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-sm font-bold tabular-nums">
                  {i + 1}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
