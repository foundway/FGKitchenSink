import { Button } from '../components/ui/Button';

export function ButtonDemo() {
  return (
    <>
      <div className="button-group">
        <h3>Variants</h3>
        <div className="button-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div className="button-group">
        <h3>Sizes</h3>
        <div className="button-row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div className="button-group">
        <h3>States</h3>
        <div className="button-row">
          <Button>Normal</Button>
          <Button selected>Selected</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
      <div className="button-group">
        <h3>Selected States</h3>
        <div className="button-row">
          <Button variant="primary" selected>Primary Selected</Button>
          <Button variant="secondary" selected>Secondary Selected</Button>
          <Button variant="tertiary" selected>Tertiary Selected</Button>
          <Button variant="ghost" selected>Ghost Selected</Button>
        </div>
      </div>
    </>
  );
}
