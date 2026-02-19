import { useState } from 'react';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Radio } from '../components/ui/Radio';
import { Badge } from '../components/ui/Badge';
import { Table } from '../components/ui/Table';
import { Modal } from '../components/ui/Modal';
import { Container } from '../components/layout/Container';
import { Grid } from '../components/layout/Grid';
import { Tabs } from '../components/layout/Tabs';
import './KitchenSink.css';

export function KitchenSink() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('option1');

  const sections = [
    { id: 'typography', label: 'Typography' },
    { id: 'colors', label: 'Colors' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'forms', label: 'Forms' },
    { id: 'cards', label: 'Cards' },
    { id: 'badges', label: 'Badges' },
    { id: 'tables', label: 'Tables' },
    { id: 'modals', label: 'Modals' },
    { id: 'tabs', label: 'Tabs' },
    { id: 'templates', label: 'Templates' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="kitchen-sink">
      <header className="kitchen-sink-header">
        <Container>
          <div className="header-content">
            <h1 className="header-title">Foxglove Design System</h1>
            <ThemeToggle />
          </div>
          <nav className="header-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className="nav-link"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </Container>
      </header>

      <main className="kitchen-sink-main">
        <Container>
          <section id="typography" className="section">
            <h2 className="section-title">Typography</h2>
            <div className="section-content">
              <div>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
              </div>
              <div>
                <p>This is body text. It provides the main content for the application.</p>
                <p className="text-secondary">This is secondary text with muted color.</p>
                <p className="text-tertiary">This is tertiary text with even more muted color.</p>
                <p><small>This is small text for captions and labels.</small></p>
              </div>
              <div>
                <p><strong>Bold text</strong> and <em>italic text</em> and <code>inline code</code></p>
                <pre><code>{'const example = "code block";'}</code></pre>
                <p><a href="#">This is a link</a> that users can click.</p>
              </div>
            </div>
          </section>

          <section id="colors" className="section">
            <h2 className="section-title">Color Palette</h2>
            <div className="section-content">
              <Grid cols={4} gap="md">
                <Card>
                  <div className="color-swatch" style={{ backgroundColor: '#9382fe' }}></div>
                  <p><strong>Primary</strong></p>
                  <p className="text-secondary">#9382fe</p>
                </Card>
                <Card>
                  <div className="color-swatch" style={{ backgroundColor: '#29bee7' }}></div>
                  <p><strong>Alternative</strong></p>
                  <p className="text-secondary">#29bee7</p>
                </Card>
                <Card>
                  <div className="color-swatch" style={{ backgroundColor: '#7164c4' }}></div>
                  <p><strong>Primary Hover</strong></p>
                  <p className="text-secondary">#7164c4</p>
                </Card>
                <Card>
                  <div className="color-swatch" style={{ backgroundColor: '#5933f2' }}></div>
                  <p><strong>Primary Selected</strong></p>
                  <p className="text-secondary">#5933f2</p>
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
            </div>
          </section>

          <section id="spacing" className="section">
            <h2 className="section-title">Spacing Scale</h2>
            <div className="section-content">
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
            </div>
          </section>

          <section id="buttons" className="section">
            <h2 className="section-title">Buttons</h2>
            <div className="section-content">
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
            </div>
          </section>

          <section id="forms" className="section">
            <h2 className="section-title">Form Controls</h2>
            <div className="section-content">
              <Grid cols={2} gap="lg">
                <Card>
                  <h3>Input Fields</h3>
                  <Input label="Text Input" placeholder="Enter text" />
                  <Input label="Email Input" type="email" placeholder="email@example.com" />
                  <Input label="Password Input" type="password" placeholder="Password" />
                  <Input label="Error State" error="This field is required" />
                  <Input label="Disabled Input" disabled value="Disabled value" />
                </Card>
                <Card>
                  <h3>Other Controls</h3>
                  <Textarea label="Textarea" placeholder="Enter multiline text" rows={4} />
                  <Select
                    label="Select"
                    options={[
                      { value: '1', label: 'Option 1' },
                      { value: '2', label: 'Option 2' },
                      { value: '3', label: 'Option 3' },
                    ]}
                  />
                  <div>
                    <Checkbox label="Checkbox option 1" />
                    <Checkbox label="Checkbox option 2" defaultChecked />
                    <Checkbox label="Disabled checkbox" disabled />
                  </div>
                  <div>
                    <Radio
                      name="radio-group"
                      label="Radio option 1"
                      value="option1"
                      checked={selectedRadio === 'option1'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                    <Radio
                      name="radio-group"
                      label="Radio option 2"
                      value="option2"
                      checked={selectedRadio === 'option2'}
                      onChange={(e) => setSelectedRadio(e.target.value)}
                    />
                  </div>
                </Card>
              </Grid>
            </div>
          </section>

          <section id="cards" className="section">
            <h2 className="section-title">Cards</h2>
            <div className="section-content">
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
            </div>
          </section>

          <section id="badges" className="section">
            <h2 className="section-title">Badges</h2>
            <div className="section-content">
              <div className="badge-group">
                <Badge variant="default">Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>
          </section>

          <section id="tables" className="section">
            <h2 className="section-title">Tables</h2>
            <div className="section-content">
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
            </div>
          </section>

          <section id="modals" className="section">
            <h2 className="section-title">Modals</h2>
            <div className="section-content">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Example Modal"
              >
                <p>This is a modal dialog. You can close it by clicking the X button or clicking outside.</p>
                <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)', justifyContent: 'flex-end' }}>
                  <Button variant="tertiary" onClick={() => setModalOpen(false)}>Cancel</Button>
                  <Button onClick={() => setModalOpen(false)}>Confirm</Button>
                </div>
              </Modal>
            </div>
          </section>

          <section id="tabs" className="section">
            <h2 className="section-title">Tabs</h2>
            <div className="section-content">
              <Card>
                <Tabs
                  tabs={[
                    {
                      id: 'tab1',
                      label: 'Tab 1',
                      content: <div><h3>Tab 1 Content</h3><p>This is the content for tab 1.</p></div>
                    },
                    {
                      id: 'tab2',
                      label: 'Tab 2',
                      content: <div><h3>Tab 2 Content</h3><p>This is the content for tab 2.</p></div>
                    },
                    {
                      id: 'tab3',
                      label: 'Tab 3',
                      content: <div><h3>Tab 3 Content</h3><p>This is the content for tab 3.</p></div>
                    },
                  ]}
                />
              </Card>
            </div>
          </section>

          <section id="templates" className="section">
            <h2 className="section-title">Layout Templates</h2>
            <div className="section-content">
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
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
