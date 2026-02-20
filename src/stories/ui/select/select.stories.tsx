import type {Meta, StoryObj} from '@storybook/react-vite';

import {Select} from '@/components/ui/select';

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'UI/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="Select a food" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="cherry">Cherry</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="broccoli">Broccoli</Select.Item>
          <Select.Item value="spinach">Spinach</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};

export const Small: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="w-[200px]" size="sm">
        <Select.Value placeholder="Small trigger" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="a">Option A</Select.Item>
        <Select.Item value="b">Option B</Select.Item>
        <Select.Item value="c">Option C</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="Choose wisely" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="free">Free Tier</Select.Item>
        <Select.Item value="pro">Pro Tier</Select.Item>
        <Select.Item disabled value="enterprise">
          Enterprise (Coming Soon)
        </Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const Preselected: Story = {
  render: () => (
    <Select defaultValue="banana">
      <Select.Trigger className="w-[200px]">
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
  ),
};
