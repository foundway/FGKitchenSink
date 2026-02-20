import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Table } from '../components/ui/Table';

export function TablesDemo() {
  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td><Badge variant="success">Active</Badge></td>
            <td>Admin</td>
            <td>2 hours ago</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td><Badge variant="success">Active</Badge></td>
            <td>User</td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td><Badge variant="warning">Pending</Badge></td>
            <td>User</td>
            <td>3 days ago</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}
