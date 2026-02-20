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

import {Button} from '@/components/ui/button';

const meta = {
  args: {
    children: 'Button',
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

export const Default: Story = {};

export const Destructive: Story = {
  args: {children: 'Delete', variant: 'destructive'},
};

export const Ghost: Story = {
  args: {children: 'Ghost', variant: 'ghost'},
};

export const Gradient: Story = {
  args: {children: 'Get Started', variant: 'gradient'},
};

export const Link: Story = {
  args: {children: 'Learn more', variant: 'link'},
};

export const Outline: Story = {
  args: {children: 'Outline', variant: 'outline'},
};

export const Secondary: Story = {
  args: {children: 'Secondary', variant: 'secondary'},
};

export const Small: Story = {
  args: {children: 'Small', size: 'sm'},
};

export const Large: Story = {
  args: {children: 'Large', size: 'lg'},
};

export const Icon: Story = {
  args: {children: <FontAwesomeIcon icon={faHeart} />, size: 'icon'},
};

export const Disabled: Story = {
  args: {children: 'Disabled', disabled: true},
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FontAwesomeIcon icon={faEnvelope} /> Send Email
      </>
    ),
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Continue <FontAwesomeIcon icon={faArrowRight} />
      </>
    ),
    variant: 'gradient',
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <FontAwesomeIcon className="animate-spin" icon={faSpinner} /> Loading...
      </>
    ),
    disabled: true,
  },
};

export const AllVariants: Story = {
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
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-sm">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
      <Button size="icon">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
      <Button size="icon-lg">
        <FontAwesomeIcon icon={faHeart} />
      </Button>
    </div>
  ),
};
