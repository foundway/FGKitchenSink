export function SpacingDemo() {
  return (
    <>
      <p className="text-secondary" style={{ marginBottom: 'var(--spacing-xl)' }}>
        Base unit: 8px
      </p>
      <div className="spacing-demo">
        <div className="spacing-item">
          <div className="spacing-box" style={{ width: '3px' }}></div>
          <span>xs: 3px</span>
        </div>
        <div className="spacing-item">
          <div className="spacing-box" style={{ width: '4px' }}></div>
          <span>sm: 4px</span>
        </div>
        <div className="spacing-item">
          <div className="spacing-box" style={{ width: '8px' }}></div>
          <span>md: 8px (base unit)</span>
        </div>
        <div className="spacing-item">
          <div className="spacing-box" style={{ width: '12px' }}></div>
          <span>lg: 12px</span>
        </div>
        <div className="spacing-item">
          <div className="spacing-box" style={{ width: '16px' }}></div>
          <span>xl: 16px</span>
        </div>
        <div className="spacing-item">
          <div className="spacing-box" style={{ width: '32px' }}></div>
          <span>2xl: 32px</span>
        </div>
      </div>
    </>
  );
}
