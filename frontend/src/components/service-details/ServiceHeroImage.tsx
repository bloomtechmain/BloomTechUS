import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

/**
 * ServiceHeroImage Component
 * Hero image with a fixed, predictable aspect ratio so it always fills its frame cleanly
 */
interface ServiceHeroImageProps {
  imageUrl?: string;
  serviceName: string;
}

export const ServiceHeroImage = ({ imageUrl, serviceName }: ServiceHeroImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 aspect-[4/3]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={serviceName}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#1B2B4D] flex items-center justify-center">
            <Cpu size={64} className="text-white/15" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
    </motion.div>
  );
};
