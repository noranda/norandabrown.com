import type {Meta, StoryObj} from '@storybook/react-vite';
import {expect, userEvent, within} from 'storybook/test';

import {Select} from '@/components/ui/select';

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'UI/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Renders trigger with placeholder', async () => {
      const trigger = await canvas.findByRole('combobox', {name: 'Fruit'});
      await expect(trigger).toHaveTextContent(/Select a fruit/);
    });

    await step('Opens dropdown and displays all options', async () => {
      await userEvent.click(await canvas.findByRole('combobox', {name: 'Fruit'}));
      const options = await body.findAllByRole('option');
      await expect(options).toHaveLength(5);
    });

    await step('Selects an option', async () => {
      await userEvent.click(await body.findByRole('option', {name: 'Cherry'}));
      await expect(await canvas.findByRole('combobox', {name: 'Fruit'})).toHaveTextContent(
        'Cherry'
      );
    });
  },
  render: () => (
    <Select>
      <Select.Trigger aria-label="Fruit" className="w-[200px]">
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
} satisfies Story;

export const WithGroups = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Renders trigger with placeholder', async () => {
      const trigger = await canvas.findByRole('combobox', {name: 'Food'});
      await expect(trigger).toHaveTextContent(/Select a food/);
    });

    await step('Opens dropdown and displays grouped options', async () => {
      await userEvent.click(await canvas.findByRole('combobox', {name: 'Food'}));
      const options = await body.findAllByRole('option');
      await expect(options).toHaveLength(6);
    });

    await step('Closes dropdown on Escape', async () => {
      await userEvent.keyboard('{Escape}');
      const trigger = await canvas.findByRole('combobox', {name: 'Food'});
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  },
  render: () => (
    <Select>
      <Select.Trigger aria-label="Food" className="w-[200px]">
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
} satisfies Story;

export const Small = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders trigger with small size', async () => {
      const trigger = await canvas.findByRole('combobox', {name: 'Option'});
      await expect(trigger).toHaveAttribute('data-size', 'sm');
    });
  },
  render: () => (
    <Select>
      <Select.Trigger aria-label="Option" className="w-[200px]" size="sm">
        <Select.Value placeholder="Small trigger" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="a">Option A</Select.Item>
        <Select.Item value="b">Option B</Select.Item>
        <Select.Item value="c">Option C</Select.Item>
      </Select.Content>
    </Select>
  ),
} satisfies Story;

export const WithDisabledItems = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Opens dropdown and finds disabled item', async () => {
      await userEvent.click(await canvas.findByRole('combobox', {name: 'Plan'}));
      const disabledOption = await body.findByRole('option', {name: 'Enterprise (Coming Soon)'});
      await expect(disabledOption).toHaveAttribute('data-disabled');
    });

    await step('Closes dropdown on Escape', async () => {
      await userEvent.keyboard('{Escape}');
    });
  },
  render: () => (
    <Select>
      <Select.Trigger aria-label="Plan" className="w-[200px]">
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
} satisfies Story;

export const Preselected = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Displays preselected value', async () => {
      const trigger = await canvas.findByRole('combobox', {name: 'Fruit'});
      await expect(trigger).toHaveTextContent('Banana');
    });
  },
  render: () => (
    <Select defaultValue="banana">
      <Select.Trigger aria-label="Fruit" className="w-[200px]">
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
  ),
} satisfies Story;
