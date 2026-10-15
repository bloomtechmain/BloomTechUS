import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Gpu, HardDrive, PlugZap, MonitorCog, ShieldCheck, Lock, Zap, BadgeDollarSign, SlidersHorizontal, LucideIcon } from 'lucide-react';
import { Overview, Section, Heading, BlockGrid, PhotoBand } from './kit';
import { svcPhotos } from './servicePhotos';

/**
 * DefaultServiceContent Component
 * Standard content layout for services without custom sections
 */
interface DefaultServiceContentProps {
  serviceName: string;
  longDesc?: string;
  features?: string[];
  benefits?: string[];
}

// Split "Title: detail" / "Title - detail" strings into a bold title and its detail (text unchanged)
const split = (f: string, sep: string) => {
  const i = f.indexOf(sep);
  return i > 0 ? { title: f.slice(0, i).trim(), desc: f.slice(i + sep.length).trim() } : { title: f, desc: undefined };
};

const featureIcons: LucideIcon[] = [Cpu, Gpu, HardDrive, PlugZap, MonitorCog, ShieldCheck];
const benefitIcons: LucideIcon[] = [Lock, Zap, BadgeDollarSign, SlidersHorizontal];

export const DefaultServiceContent = ({
  serviceName,
  longDesc,
  features = [],
  benefits = []
}: DefaultServiceContentProps) => {
  return (
    <>
      <Overview image={svcPhotos.aiHardware.a}>
        <p>
          {longDesc || `Detailed information about ${serviceName} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
        </p>
      </Overview>

      {benefits.length > 0 && (
        <Section tone="dark">
          <Heading light eyebrow="Client Benefits" title={serviceName} className="mb-10" />
          <BlockGrid
            dark
            cols={4}
            items={benefits.map((b, i) => ({ icon: benefitIcons[i % benefitIcons.length], ...split(b, ' - ') }))}
          />
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">Need a custom approach?</p>
            <Link to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm whitespace-nowrap transition-colors">
              Contact Solutions Architect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </Section>
      )}

      <PhotoBand photo={svcPhotos.aiHardware.b} />

      {features.length > 0 && (
        <Section tone="grey">
          <Heading title="Core Capabilities" />
          <BlockGrid
            cols={3}
            items={features.map((f, idx) => ({
              icon: featureIcons[idx % featureIcons.length],
              num: String(idx + 1).padStart(2, '0'),
              ...split(f, ':'),
            }))}
          />
        </Section>
      )}
    </>
  );
};
