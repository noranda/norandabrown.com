import {
  type IconDefinition,
  faBell,
  faHandPointer,
  faSquareCaretDown,
} from '@fortawesome/free-solid-svg-icons';

import buttonStoriesSource from '@/stories/ui/button/button.stories.tsx?raw';
import selectStoriesSource from '@/stories/ui/select/select.stories.tsx?raw';
import toastStoriesSource from '@/stories/ui/toast/toast.stories.tsx?raw';

export type ComponentStory = {
  height?: number;
  id: string;
  name: string;
  storyExport: string;
};

export type ComponentShowcase = {
  description: string;
  icon: IconDefinition;
  id: string;
  name: string;
  reality: string;
  source: string;
  stories: ComponentStory[];
  techStack: string[];
};

export const COMPONENTS: ComponentShowcase[] = [
  {
    description: 'A flexible button component with 7 variants, multiple sizes, and icon support.',
    icon: faHandPointer,
    id: 'button',
    name: 'Button',
    reality:
      'Born from the ashes of a 47-comment PR about border radius. Now it comes in seven flavors, takes icons on either side, and the gradient variant is what happens when you let the engineer pick the colors.',
    source: buttonStoriesSource,
    stories: [
      {id: 'all-variants', name: 'All Variants', storyExport: 'AllVariants'},
      {id: 'all-sizes', name: 'All Sizes', storyExport: 'AllSizes'},
      {id: 'with-icon', name: 'With Icon', storyExport: 'WithIcon'},
    ],
    techStack: ['CVA', 'Radix UI', 'shadcn/ui'],
  },
  {
    description:
      'An accessible dropdown select with keyboard navigation, grouping, and consistent cross-browser rendering.',
    icon: faSquareCaretDown,
    id: 'select',
    name: 'Select',
    reality:
      "The dropdown that ended my toxic relationship with native <select>. It looks the same everywhere, the keyboard navigation actually works, and screen readers don't file bug reports about it.",
    source: selectStoriesSource,
    stories: [
      {id: 'default', name: 'Default', storyExport: 'Default'},
      {id: 'with-groups', name: 'With Groups', storyExport: 'WithGroups'},
    ],
    techStack: ['Radix UI', 'shadcn/ui'],
  },
  {
    description:
      'Sonner-powered toast notifications with type-specific colors, icons, and glowing personality.',
    icon: faBell,
    id: 'toast',
    name: 'Toast',
    reality:
      "These toasts glow. Like, actually glow. Green for success, red for errors, purple for info, because if you're going to interrupt someone's flow, you might as well make it pretty. They stack, they dismiss, and the close button has a hover state because I have standards.",
    source: toastStoriesSource,
    stories: [{height: 450, id: 'all-types', name: 'All Types', storyExport: 'AllTypes'}],
    techStack: ['FontAwesome', 'shadcn/ui', 'Sonner'],
  },
];
