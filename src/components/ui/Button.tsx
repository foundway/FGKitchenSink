import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  selected = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${selected ? 'selected' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
