import { ReactNode } from 'react';
import './Grid.css';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Grid({ children, cols = 3, gap = 'md', className = '' }: GridProps) {
  return (
    <div className={`grid grid-cols-${cols} grid-gap-${gap} ${className}`}>
      {children}
    </div>
  );
}
