import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
type Variant = 'primary' | 'secondary' | 'onDark';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-orange text-white hover:bg-brand-orange-dark',
  secondary: 'bg-transparent text-navy border border-border-grey hover:border-navy',
  onDark: 'bg-transparent text-white border border-white/25 hover:border-white/50',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors active:scale-[0.98]';

interface SharedProps {
  variant?: Variant;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends SharedProps {
  to: string;
}

interface ActionButtonProps extends SharedProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  to?: undefined;
}

export const Button = ({ variant = 'primary', icon: Icon, children, className = '', ...props }: LinkButtonProps | ActionButtonProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]} group ${className}`;

  if ('to' in props && props.to) {
    const { to } = props;
    return (
      <Link to={to} className={classes}>
        {children}
        {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonProps} className={classes}>
      {children}
      {Icon && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};
