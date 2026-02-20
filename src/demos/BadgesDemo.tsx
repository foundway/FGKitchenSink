import { Badge } from '../components/ui/Badge';

export function BadgesDemo() {
  return (
    <div className="badge-group">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  );
}
