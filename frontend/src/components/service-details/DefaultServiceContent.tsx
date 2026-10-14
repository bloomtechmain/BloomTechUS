import { motion } from 'framer-motion';
import { ServiceFeatureCard } from './ServiceFeatureCard';
import { ServiceBenefitsSidebar } from './ServiceBenefitsSidebar';

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

export const DefaultServiceContent = ({
  serviceName,
  longDesc,
  features = [],
  benefits = []
}: DefaultServiceContentProps) => {
  return (
    <section className="py-20 lg:py-24 bg-grey-light">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

        {/* Left Column: Description & Features */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 tracking-tight">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-14">
              {longDesc || `Detailed information about ${serviceName} is currently being updated by our specialists. We deliver industry-leading solutions designed to accelerate your growth and secure your digital perimeter.`}
            </p>

            {features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-navy mb-6 tracking-tight">Core Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-split-navy rounded-[32px] p-6 md:p-8">
                  {features.map((feature, idx) => (
                    <ServiceFeatureCard key={idx} feature={feature} index={idx} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column: Benefits Sidebar */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ServiceBenefitsSidebar benefits={benefits} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
