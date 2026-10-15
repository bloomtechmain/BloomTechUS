import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`w-full px-4 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};
