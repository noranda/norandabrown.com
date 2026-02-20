import {
  type IconDefinition,
  faBell,
  faHandPointer,
  faSquareCaretDown,
} from '@fortawesome/free-solid-svg-icons';

export type ComponentStory = {
  height?: number;
  id: string;
  name: string;
};

export type ComponentShowcase = {
  description: string;
  icon: IconDefinition;
  id: string;
  name: string;
  reality: string;
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
    stories: [
      {id: 'all-variants', name: 'All Variants'},
      {id: 'all-sizes', name: 'All Sizes'},
      {id: 'with-icon', name: 'With Icon'},
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
    stories: [
      {id: 'default', name: 'Default'},
      {id: 'with-groups', name: 'With Groups'},
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
    stories: [{height: 450, id: 'all-types', name: 'All Types'}],
    techStack: ['FontAwesome', 'shadcn/ui', 'Sonner'],
  },
];
