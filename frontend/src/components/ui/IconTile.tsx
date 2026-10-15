import { LucideIcon } from 'lucide-react';
type Tone = 'navy' | 'orange' | 'teal' | 'violet' | 'gold' | 'grey' | 'white';

interface IconTileProps {
  icon: LucideIcon;
  tone?: Tone;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const toneClasses: Record<Tone, string> = {
  navy: 'bg-navy text-brand-orange',
  orange: 'bg-brand-orange text-white',
  teal: 'bg-teal text-white',
  violet: 'bg-violet text-white',
  gold: 'bg-gold text-white',
  grey: 'bg-grey-light text-navy',
  white: 'bg-white text-navy border border-border-grey',
};

const sizeClasses = {
  sm: { box: 'w-9 h-9 rounded-lg', icon: 18 },
  md: { box: 'w-11 h-11 rounded-lg', icon: 20 },
  lg: { box: 'w-14 h-14 rounded-xl', icon: 26 },
};

export const IconTile = ({ icon: Icon, tone = 'navy', size = 'md', className = '' }: IconTileProps) => {
  const { box, icon } = sizeClasses[size];
  return (
    <div className={`${box} ${toneClasses[tone]} flex items-center justify-center shrink-0 ${className}`}>
      <Icon size={icon} />
    </div>
  );
};
