import { InputHTMLAttributes } from 'react';
import './Radio.css';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Radio({ label, className = '', ...props }: RadioProps) {
  return (
    <label className={`radio-wrapper ${className}`}>
      <input type="radio" className="radio" {...props} />
      {label && <span className="radio-label">{label}</span>}
    </label>
  );
}
