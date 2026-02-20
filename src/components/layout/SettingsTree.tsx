import { useState } from 'react';
import './SettingsTree.css';

export interface SettingTreeTab {
  id: string;
  label: string;
}

export interface SettingTreeSelectOption {
  value: string;
  label: string;
}

export type SettingRow =
  | { type: 'text'; id: string; label: string; value: string; onChange: (v: string) => void; warning?: boolean }
  | { type: 'number'; id: string; label: string; value: string; onChange: (v: string) => void; warning?: boolean }
  | {
      type: 'select';
      id: string;
      label: string;
      value: string;
      options: SettingTreeSelectOption[];
      onChange: (v: string) => void;
      warning?: boolean;
    }
  | { type: 'toggle'; id: string; label: string; value: boolean; onChange: (v: boolean) => void; warning?: boolean }
  | { type: 'color'; id: string; label: string; value: string; onChange: (v: string) => void; warning?: boolean };

export interface SettingTreeSection {
  id: string;
  label: string;
  count?: number;
  expanded?: boolean;
  warning?: boolean;
  children?: (SettingTreeSection | SettingRow)[];
}

interface SettingTreeProps {
  tabs: SettingTreeTab[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  title: string;
  onClose?: () => void;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  sections: SettingTreeSection[];
  className?: string;
}

function isSection(node: SettingTreeSection | SettingRow): node is SettingTreeSection {
  return 'children' in node && Array.isArray((node as SettingTreeSection).children);
}

function SettingRowControl({ row }: { row: SettingRow }) {
  if (row.type === 'text' || row.type === 'number') {
    return (
      <input
        type={row.type === 'number' ? 'number' : 'text'}
        className={`setting-tree-input ${row.warning ? 'setting-tree-input-warning' : ''}`}
        value={row.value}
        onChange={(e) => row.onChange(e.target.value)}
        aria-invalid={row.warning ?? false}
      />
    );
  }
  if (row.type === 'select') {
    return (
      <select
        className={`setting-tree-select ${row.warning ? 'setting-tree-select-warning' : ''}`}
        value={row.value}
        onChange={(e) => row.onChange(e.target.value)}
        aria-invalid={row.warning ?? false}
      >
        {row.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
  if (row.type === 'toggle') {
    return (
      <div className="setting-tree-toggle" role="group" aria-label={row.label}>
        <button
          type="button"
          className={`setting-tree-toggle-segment ${!row.value ? 'setting-tree-toggle-segment-active' : ''}`}
          onClick={() => row.onChange(false)}
        >
          Off
        </button>
        <button
          type="button"
          className={`setting-tree-toggle-segment ${row.value ? 'setting-tree-toggle-segment-active' : ''}`}
          onClick={() => row.onChange(true)}
        >
          On
        </button>
      </div>
    );
  }
  if (row.type === 'color') {
    return (
      <div className="setting-tree-color">
        <span className="setting-tree-color-swatch" style={{ backgroundColor: row.value }} aria-hidden />
        <input
          type="text"
          className="setting-tree-input setting-tree-color-input"
          value={row.value}
          onChange={(e) => row.onChange(e.target.value)}
        />
      </div>
    );
  }
  return null;
}

function SettingTreeRow({ row }: { row: SettingRow }) {
  return (
    <div className="setting-tree-row">
      <div className="setting-tree-row-label">
        {row.warning && (
          <span className="setting-tree-row-warning" title="Warning" aria-label="Warning">
            !
          </span>
        )}
        <span>{row.label}</span>
      </div>
      <div className="setting-tree-row-control">
        <SettingRowControl row={row} />
      </div>
    </div>
  );
}

function SectionContent({
  nodes,
  depth = 0,
}: {
  nodes: (SettingTreeSection | SettingRow)[];
  depth?: number;
}) {
  return (
    <>
      {nodes.map((node) => {
        if (isSection(node)) {
          return (
            <SettingTreeSectionBlock key={node.id} section={node} depth={depth} />
          );
        }
        return <SettingTreeRow key={node.id} row={node} />;
      })}
    </>
  );
}

function SettingTreeSectionBlock({
  section,
  depth = 0,
}: {
  section: SettingTreeSection;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(section.expanded ?? true);
  const hasChildren = Boolean(section.children?.length);
  const label = section.count != null ? `${section.label} (${section.count})` : section.label;

  return (
    <div className="setting-tree-section" data-depth={depth}>
      <button
        type="button"
        className="setting-tree-section-header"
        onClick={() => hasChildren && setExpanded((e) => !e)}
        aria-expanded={hasChildren ? expanded : undefined}
      >
        <span className="setting-tree-section-disclosure" aria-hidden>
          {hasChildren ? (expanded ? '▼' : '▶') : null}
        </span>
        <span className="setting-tree-section-title">{label}</span>
        {section.warning && (
          <span className="setting-tree-section-warning" title="Warning" aria-label="Warning">
            ⚠
          </span>
        )}
        <button
          type="button"
          className="setting-tree-section-menu"
          aria-label="More options"
          onClick={(e) => e.stopPropagation()}
        />
      </button>
      {hasChildren && expanded && (
        <div className="setting-tree-section-content">
          <SectionContent nodes={section.children!} depth={depth + 1} />
        </div>
      )}
    </div>
  );
}

export function SettingsTree({
  tabs,
  activeTabId,
  onTabChange,
  title,
  onClose,
  searchPlaceholder = 'Search panel settings...',
  searchValue = '',
  onSearchChange,
  sections,
  className = '',
}: SettingTreeProps) {
  return (
    <div className={`setting-tree-panel ${className}`} role="region" aria-label="Settings panel">
      <div className="setting-tree-tabs">
        <div className="setting-tree-tab-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`setting-tree-tab ${activeTabId === tab.id ? 'setting-tree-tab-active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              aria-selected={activeTabId === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {onClose && (
          <button type="button" className="setting-tree-close" onClick={onClose} aria-label="Close panel" />
        )}
      </div>

      <div className="setting-tree-header">
        <h2 className="setting-tree-title">{title}</h2>
        <div className="setting-tree-header-actions">
          <button type="button" className="setting-tree-icon-btn" aria-label="Help" />
          <button type="button" className="setting-tree-icon-btn" aria-label="More options" />
        </div>
      </div>

      <div className="setting-tree-search-wrap">
        <span className="setting-tree-search-icon" aria-hidden>⌕</span>
        <input
          type="search"
          className="setting-tree-search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          aria-label="Search settings"
        />
      </div>

      <div className="setting-tree-body">
        {sections.map((section) => (
          <SettingTreeSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
