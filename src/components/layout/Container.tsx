import { ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({ children, className = '', maxWidth = 'xl' }: ContainerProps) {
  return (
    <div className={`container container-${maxWidth} ${className}`}>
      {children}
    </div>
  );
}
