import { InputHTMLAttributes } from 'react';
import './Checkbox.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`checkbox-wrapper ${className}`}>
      <input type="checkbox" className="checkbox" {...props} />
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}
