import type {Meta, StoryObj} from '@storybook/react-vite';
import {toast} from 'sonner';

import {Button} from '@/components/ui/button';
import {Toaster} from '@/components/ui/toast';

const meta = {
  component: Toaster,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'UI/Toast',
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button onClick={() => toast('This is a default toast')}>Show Toast</Button>,
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success('Achievement unlocked!')}>Show Success</Button>
  ),
};

export const Error: Story = {
  render: () => <Button onClick={() => toast.error('Something went wrong')}>Show Error</Button>,
};

export const Info: Story = {
  render: () => (
    <Button onClick={() => toast.info('Did you know? This is an info toast.')}>Show Info</Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button onClick={() => toast.warning('Careful! You might enjoy this site.')}>
      Show Warning
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      onClick={() => {
        const id = toast.loading('Loading...');
        setTimeout(() => toast.success('Done!', {id}), 2000);
      }}
    >
      Show Loading
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Achievement Unlocked', {
          description: 'You found all the easter eggs!',
        })
      }
    >
      Show With Description
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('File deleted', {
          action: {
            label: 'Undo',
            onClick: () => toast.success('Restored!'),
          },
        })
      }
    >
      Show With Action
    </Button>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast('Default toast')}>Default</Button>
      <Button onClick={() => toast.success('Success!')}>Success</Button>
      <Button onClick={() => toast.info('Info')}>Info</Button>
      <Button onClick={() => toast.warning('Warning!')}>Warning</Button>
      <Button onClick={() => toast.error('Error!')}>Error</Button>
      <Button
        onClick={() => {
          const id = toast.loading('Loading...');
          setTimeout(() => toast.success('Done!', {id}), 2000);
        }}
      >
        Loading
      </Button>
    </div>
  ),
};
