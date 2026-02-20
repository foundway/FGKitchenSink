import { Card } from '../components/ui/Card';
import { Grid } from '../components/layout/Grid';

export function ColorsDemo() {
  return (
    <Grid cols={4} gap="md">
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#9382fe' }}></div>
        <p><strong>Primary</strong></p>
        <p className="text-secondary">#9382fe</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#29bee7' }}></div>
        <p><strong>Secondary</strong></p>
        <p className="text-secondary">#29bee7</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#e1e1e4' }}></div>
        <p><strong>Background Secondary</strong></p>
        <p className="text-secondary">#e1e1e4</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)' }}></div>
        <p><strong>Background Primary</strong></p>
        <p className="text-secondary">#ffffff</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#6f6d79' }}></div>
        <p><strong>Text Secondary</strong></p>
        <p className="text-secondary">#6f6d79</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#585861' }}></div>
        <p><strong>Text Tertiary</strong></p>
        <p className="text-secondary">#585861</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#000000' }}></div>
        <p><strong>Text Primary</strong></p>
        <p className="text-secondary">#000000</p>
      </Card>
      <Card>
        <div className="color-swatch" style={{ backgroundColor: '#28a745' }}></div>
        <p><strong>Success</strong></p>
        <p className="text-secondary">#28a745</p>
      </Card>
    </Grid>
  );
}
