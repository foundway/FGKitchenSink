import './SettingsNav.css';

export interface SettingsNavItem {
  id: string;
  label: string;
  children?: SettingsNavItem[];
}

interface SettingsNavProps {
  items: SettingsNavItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  className?: string;
}

function NavItem({
  item,
  selectedId,
  onSelect,
  depth = 0,
}: {
  item: SettingsNavItem;
  selectedId: string | null;
  onSelect: (id: string) => void;
  depth?: number;
}) {
  const isSelected = selectedId === item.id;
  const hasChildren = Boolean(item.children?.length);

  return (
    <div className="settings-nav-item-wrapper" style={{ '--depth': depth } as React.CSSProperties}>
      <button
        type="button"
        className={`settings-nav-item ${isSelected ? 'settings-nav-item-selected' : ''}`}
        onClick={() => onSelect(item.id)}
        aria-current={isSelected ? 'page' : undefined}
      >
        {item.label}
      </button>
      {hasChildren && (
        <div className="settings-nav-children">
          {item.children!.map((child) => (
            <NavItem
              key={child.id}
              item={child}
              selectedId={selectedId}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SettingsNav({ items, selectedId, onSelect, className = '' }: SettingsNavProps) {
  return (
    <nav className={`settings-nav ${className}`} aria-label="Settings">
      <div className="settings-nav-list">
        {items.map((item) => (
          <NavItem key={item.id} item={item} selectedId={selectedId} onSelect={onSelect} />
        ))}
      </div>
    </nav>
  );
}
