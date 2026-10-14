import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-6 xl:px-12 ${className}`}>
      {children}
    </div>
  );
};
