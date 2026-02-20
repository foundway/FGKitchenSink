import { Card } from '../components/ui/Card';
import { Tabs } from '../components/layout/Tabs';

export function TabsDemo() {
  return (
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
  );
}
