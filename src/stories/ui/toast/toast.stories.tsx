import type {Meta, StoryObj} from '@storybook/react-vite';
import {expect, userEvent, within} from 'storybook/test';
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

export const Default = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows toast on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show Toast'}));
      await body.findByText('This is a default toast');
    });
  },
  render: () => <Button onClick={() => toast('This is a default toast')}>Show Toast</Button>,
} satisfies Story;

export const Success = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows success toast on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show Success'}));
      await body.findByText('Achievement unlocked!');
    });
  },
  render: () => (
    <Button onClick={() => toast.success('Achievement unlocked!')}>Show Success</Button>
  ),
} satisfies Story;

export const Error = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows error toast on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show Error'}));
      await body.findByText('Something went wrong');
    });
  },
  render: () => <Button onClick={() => toast.error('Something went wrong')}>Show Error</Button>,
} satisfies Story;

export const Info = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows info toast on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show Info'}));
      await body.findByText('Did you know? This is an info toast.');
    });
  },
  render: () => (
    <Button onClick={() => toast.info('Did you know? This is an info toast.')}>Show Info</Button>
  ),
} satisfies Story;

export const Warning = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows warning toast on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show Warning'}));
      await body.findByText('Careful! You might enjoy this site.');
    });
  },
  render: () => (
    <Button onClick={() => toast.warning('Careful! You might enjoy this site.')}>
      Show Warning
    </Button>
  ),
} satisfies Story;

export const Loading = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows loading toast on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show Loading'}));
      await body.findByText('Loading...');
    });
  },
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
} satisfies Story;

export const WithDescription = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows toast with description on button click', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show With Description'}));
      await body.findByText('Achievement Unlocked');
      await body.findByText('You found all the easter eggs!');
    });
  },
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
} satisfies Story;

export const WithAction = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);

    await step('Shows toast with action button', async () => {
      await userEvent.click(await canvas.findByRole('button', {name: 'Show With Action'}));
      await body.findByText('File deleted');
    });
  },
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
} satisfies Story;

export const AllTypes = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders all toast type buttons', async () => {
      const buttons = await canvas.findAllByRole('button');
      await expect(buttons).toHaveLength(6);
    });
  },
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
} satisfies Story;
