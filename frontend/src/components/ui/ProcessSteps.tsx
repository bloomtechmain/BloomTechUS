import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

// Arrow-shaped step bar (title inside the chevron) with descriptions ruled below.
// Earlier steps are navy; the last step is orange to mark the outcome.
const firstClip = 'polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)';
const midClip = 'polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%)';

export const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  const tone = (i: number) =>
    i === steps.length - 1 ? 'bg-[#2D4170]' : i % 2 === 0 ? 'bg-navy' : 'bg-navy-mid';

  return (
    <>
      {/* Desktop: chevron bar + ruled description columns */}
      <div className="hidden md:block">
        <div className="flex">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`flex-1 ${tone(i)} text-white py-6 pr-10 ${i === 0 ? 'pl-8 rounded-l-xl' : 'pl-12 -ml-3'}`}
              style={{ clipPath: i === 0 ? firstClip : midClip }}
            >
              <span className="flex items-center gap-3">
                <step.icon className="w-5 h-5 shrink-0 opacity-80" />
                <span className="block">
                  <span className="block font-mono text-xs font-bold text-white/60">0{i + 1}</span>
                  <span className="block text-lg lg:text-xl font-extrabold leading-tight">{step.title}</span>
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="grid mt-8" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          {steps.map((step) => (
            <p key={step.title} className="pr-8 pl-8 first:pl-0 border-l-2 first:border-l-0 border-gray-200 text-gray-800 leading-relaxed">
              {step.description}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="md:hidden space-y-8">
        {steps.map((step, i) => (
          <div key={step.title}>
            <div className={`${tone(i)} text-white rounded-xl px-6 py-5 flex items-center gap-3`}>
              <step.icon className="w-5 h-5 shrink-0 opacity-80" />
              <span>
                <span className="block font-mono text-xs font-bold text-white/60">0{i + 1}</span>
                <span className="block text-xl font-extrabold leading-tight">{step.title}</span>
              </span>
            </div>
            <p className="mt-4 text-gray-800 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
