import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';
import { Table } from '../components/ui/Table';
import { Grid } from '../components/layout/Grid';
import { Sidebar } from '../components/layout/Sidebar';
import { SettingsNav } from '../components/layout/SettingsNav';
import type { SettingsNavItem } from '../components/layout/SettingsNav';

export function TemplatesDemo() {
  const [settingsPanelId, setSettingsPanelId] = useState('general');

  const settingsNavItems: SettingsNavItem[] = [
    { id: 'general', label: 'General' },
    {
      id: 'user',
      label: 'User',
      children: [
        { id: 'user-general', label: 'General' },
        { id: 'user-extensions', label: 'Extensions' },
      ],
    },
    { id: 'workspace', label: 'Workspace' },
    { id: 'privacy', label: 'Privacy & Security' },
  ];

  function getSettingsPanelLabel(id: string): string {
    for (const item of settingsNavItems) {
      if (item.id === id) return item.label;
      for (const child of item.children ?? []) {
        if (child.id === id) return child.label;
      }
    }
    return id;
  }

  return (
    <>
      <Card>
        <h3>Dashboard Layout</h3>
        <p className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>
          Example dashboard layout with sidebar and main content area
        </p>
        <div className="template-dashboard">
          <div className="template-sidebar">Sidebar</div>
          <div className="template-main">
            <div className="template-header">Header</div>
            <div className="template-content">
              <Grid cols={3} gap="md">
                <Card><h4>Widget 1</h4><p>Content</p></Card>
                <Card><h4>Widget 2</h4><p>Content</p></Card>
                <Card><h4>Widget 3</h4><p>Content</p></Card>
              </Grid>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <h3>List View Layout</h3>
        <p className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>
          Example list view layout similar to devices page
        </p>
        <div className="template-list">
          <div className="template-list-header">
            <h4>Items</h4>
            <Button size="sm">Add New</Button>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Device 1</td>
                <td>Robot</td>
                <td><Badge variant="success">Active</Badge></td>
                <td><Button size="sm" variant="ghost">Edit</Button></td>
              </tr>
              <tr>
                <td>Device 2</td>
                <td>Sensor</td>
                <td><Badge variant="warning">Pending</Badge></td>
                <td><Button size="sm" variant="ghost">Edit</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
      <Card>
        <h3>Admin Side Bar</h3>
        <p className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>
          Admin sidebar with tree navigation; each item's content is shown in the panel to the right.
        </p>
        <div className="template-settings">
          <Sidebar>
            <SettingsNav
              items={settingsNavItems}
              selectedId={settingsPanelId}
              onSelect={setSettingsPanelId}
            />
          </Sidebar>
          <div className="template-settings-main" aria-label="Content for selected item">
            <header className="template-settings-header">
              <h4 className="template-settings-title">
                {getSettingsPanelLabel(settingsPanelId)}
              </h4>
            </header>
            <div className="template-settings-content">
              {settingsPanelId === 'general' && (
                <>
                  <Input label="Application theme" placeholder="System default" />
                  <Select label="Language" options={[{ value: 'en', label: 'English' }, { value: 'es', label: 'Spanish' }]} />
                </>
              )}
              {settingsPanelId === 'user-general' && (
                <>
                  <Input label="Display name" placeholder="Your name" />
                  <Input label="Email" type="email" placeholder="you@example.com" />
                </>
              )}
              {settingsPanelId === 'user-extensions' && (
                <p className="text-secondary">Manage installed extensions and browse the marketplace.</p>
              )}
              {!['general', 'user-general', 'user-extensions'].includes(settingsPanelId) && (
                <p className="text-secondary">Panel content for "{settingsPanelId}" would go here.</p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
