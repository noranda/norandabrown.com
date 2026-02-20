import {Slot} from '@radix-ui/react-slot';
import {type VariantProps} from 'class-variance-authority';

import {twMerge} from 'tailwind-merge';

import {buttonVariants} from './buttonVariants';

export const Button = ({
  asChild = false,
  className,
  size = 'default',
  variant = 'default',
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={twMerge(buttonVariants({className, size, variant}))}
      data-size={size}
      data-slot="button"
      data-variant={variant}
      {...props}
    />
  );
};
