import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Grid } from '../components/layout/Grid';

export function CardsDemo() {
  return (
    <Grid cols={3} gap="md">
      <Card>
        <h3>Basic Card</h3>
        <p>This is a basic card with default styling.</p>
      </Card>
      <Card elevated>
        <h3>Elevated Card</h3>
        <p>This card has elevation and shadow effects.</p>
      </Card>
      <Card>
        <h3>Card with Actions</h3>
        <p>Card content goes here.</p>
        <div style={{ marginTop: 'var(--spacing-md)' }}>
          <Button size="sm">Action</Button>
        </div>
      </Card>
    </Grid>
  );
}
