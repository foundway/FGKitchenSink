import { ReactNode } from 'react';
import './Sidebar.css';

interface SidebarProps {
  children: ReactNode;
  className?: string;
}

export function Sidebar({ children, className = '' }: SidebarProps) {
  return (
    <aside className={`sidebar ${className}`}>
      {children}
    </aside>
  );
}
