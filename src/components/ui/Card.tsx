import { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

export function Card({ children, className = '', elevated = false }: CardProps) {
  return (
    <div className={`card ${elevated ? 'card-elevated' : ''} ${className}`}>
      {children}
    </div>
  );
}
