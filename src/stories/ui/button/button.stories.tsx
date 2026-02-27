import {
  faArrowRight,
  faDownload,
  faEnvelope,
  faHeart,
  faSpinner,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {expect, fn, userEvent, within} from 'storybook/test';

import {Button} from '@/components/ui/button';

const meta = {
  args: {
    children: 'Button',
    onClick: fn(),
    size: 'default',
    variant: 'default',
  },
  argTypes: {
    children: {control: 'text'},
    disabled: {control: 'boolean'},
    size: {
      control: 'select',
      options: ['default', 'icon', 'icon-lg', 'icon-sm', 'lg', 'sm'],
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'ghost', 'gradient', 'link', 'outline', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'UI/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  play: async ({args, canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with default variant and size', async () => {
      const button = await canvas.findByRole('button', {name: 'Button'});
      await expect(button).toHaveAttribute('data-variant', 'default');
      await expect(button).toHaveAttribute('data-size', 'default');
    });

    await step('Fires onClick when clicked', async () => {
      const button = await canvas.findByRole('button', {name: 'Button'});
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalledOnce();
    });
  },
} satisfies Story;

export const Destructive = {
  args: {children: 'Delete', variant: 'destructive'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with destructive variant', async () => {
      const button = await canvas.findByRole('button', {name: 'Delete'});
      await expect(button).toHaveAttribute('data-variant', 'destructive');
    });
  },
} satisfies Story;

export const Ghost = {
  args: {children: 'Ghost', variant: 'ghost'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with ghost variant', async () => {
      const button = await canvas.findByRole('button', {name: 'Ghost'});
      await expect(button).toHaveAttribute('data-variant', 'ghost');
    });
  },
} satisfies Story;

export const Gradient = {
  args: {children: 'Get Started', variant: 'gradient'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with gradient variant', async () => {
      const button = await canvas.findByRole('button', {name: 'Get Started'});
      await expect(button).toHaveAttribute('data-variant', 'gradient');
    });
  },
} satisfies Story;

export const Link = {
  args: {children: 'Learn more', variant: 'link'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with link variant', async () => {
      const button = await canvas.findByRole('button', {name: 'Learn more'});
      await expect(button).toHaveAttribute('data-variant', 'link');
    });
  },
} satisfies Story;

export const Outline = {
  args: {children: 'Outline', variant: 'outline'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with outline variant', async () => {
      const button = await canvas.findByRole('button', {name: 'Outline'});
      await expect(button).toHaveAttribute('data-variant', 'outline');
    });
  },
} satisfies Story;

export const Secondary = {
  args: {children: 'Secondary', variant: 'secondary'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with secondary variant', async () => {
      const button = await canvas.findByRole('button', {name: 'Secondary'});
      await expect(button).toHaveAttribute('data-variant', 'secondary');
    });
  },
} satisfies Story;

export const Small = {
  args: {children: 'Small', size: 'sm'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with small size', async () => {
      const button = await canvas.findByRole('button', {name: 'Small'});
      await expect(button).toHaveAttribute('data-size', 'sm');
    });
  },
} satisfies Story;

export const Large = {
  args: {children: 'Large', size: 'lg'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with large size', async () => {
      const button = await canvas.findByRole('button', {name: 'Large'});
      await expect(button).toHaveAttribute('data-size', 'lg');
    });
  },
} satisfies Story;

export const Icon = {
  args: {'aria-label': 'Like', children: <FontAwesomeIcon icon={faHeart} />, size: 'icon'},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders with icon size', async () => {
      const button = await canvas.findByRole('button', {name: 'Like'});
      await expect(button).toHaveAttribute('data-size', 'icon');
    });
  },
} satisfies Story;

export const Disabled = {
  args: {children: 'Disabled', disabled: true},
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders as disabled', async () => {
      const button = await canvas.findByRole('button', {name: 'Disabled'});
      await expect(button).toBeDisabled();
    });
  },
} satisfies Story;

export const WithIcon = {
  args: {
    children: (
      <>
        <FontAwesomeIcon icon={faEnvelope} /> Send Email
      </>
    ),
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders button with icon and text', async () => {
      const button = await canvas.findByRole('button', {name: /Send Email/});
      await expect(button).toHaveAttribute('data-variant', 'default');
    });
  },
} satisfies Story;

export const WithTrailingIcon = {
  args: {
    children: (
      <>
        Continue <FontAwesomeIcon icon={faArrowRight} />
      </>
    ),
    variant: 'gradient',
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders gradient button with trailing icon', async () => {
      const button = await canvas.findByRole('button', {name: /Continue/});
      await expect(button).toHaveAttribute('data-variant', 'gradient');
    });
  },
} satisfies Story;

export const Loading = {
  args: {
    children: (
      <>
        <FontAwesomeIcon className="animate-spin" icon={faSpinner} /> Loading...
      </>
    ),
    disabled: true,
  },
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders as disabled with loading text', async () => {
      const button = await canvas.findByRole('button', {name: /Loading/});
      await expect(button).toBeDisabled();
    });
  },
} satisfies Story;

export const AllVariants = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders all seven variant buttons', async () => {
      const buttons = await canvas.findAllByRole('button');
      await expect(buttons).toHaveLength(7);
    });

    await step('Each button has the correct variant', async () => {
      await expect(
        await canvas.findByRole('button', {name: 'Default'})
      ).toHaveAttribute('data-variant', 'default');
      await expect(
        await canvas.findByRole('button', {name: /Destructive/})
      ).toHaveAttribute('data-variant', 'destructive');
      await expect(
        await canvas.findByRole('button', {name: 'Ghost'})
      ).toHaveAttribute('data-variant', 'ghost');
      await expect(
        await canvas.findByRole('button', {name: /Gradient/})
      ).toHaveAttribute('data-variant', 'gradient');
      await expect(
        await canvas.findByRole('button', {name: 'Link'})
      ).toHaveAttribute('data-variant', 'link');
      await expect(
        await canvas.findByRole('button', {name: 'Outline'})
      ).toHaveAttribute('data-variant', 'outline');
      await expect(
        await canvas.findByRole('button', {name: 'Secondary'})
      ).toHaveAttribute('data-variant', 'secondary');
    });
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">
        <FontAwesomeIcon icon={faTrash} /> Destructive
      </Button>
      <Button variant="gradient">
        <FontAwesomeIcon icon={faDownload} /> Gradient
      </Button>
    </div>
  ),
} satisfies Story;

export const AllSizes = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Renders all six size buttons', async () => {
      const buttons = await canvas.findAllByRole('button');
      await expect(buttons).toHaveLength(6);
    });
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button aria-label="Like" size="icon-sm">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
      <Button aria-label="Like" size="icon">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
      <Button aria-label="Like" size="icon-lg">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
    </div>
  ),
} satisfies Story;
