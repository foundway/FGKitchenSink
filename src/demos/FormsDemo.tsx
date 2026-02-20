import { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Radio } from '../components/ui/Radio';
import { Card } from '../components/ui/Card';
import { Grid } from '../components/layout/Grid';

export function FormsDemo() {
  const [selectedRadio, setSelectedRadio] = useState('option1');
  return (
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
  );
}
