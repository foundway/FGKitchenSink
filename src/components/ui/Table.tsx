import { ReactNode } from 'react';
import './Table.css';

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className="table-container">
      <table className={`table ${className}`}>
        {children}
      </table>
    </div>
  );
}
