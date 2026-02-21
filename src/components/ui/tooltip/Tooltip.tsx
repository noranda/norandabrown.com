import {Tooltip as TooltipPrimitive} from 'radix-ui';
import {twMerge} from 'tailwind-merge';

const TooltipProvider = ({
  delayDuration = 300,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

const TooltipRoot = ({...props}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
};

const TooltipTrigger = ({...props}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
};

const TooltipContent = ({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={twMerge(
          'z-50 max-w-xs rounded-md bg-foreground px-3 py-1.5 text-sm text-background shadow-md',
          'animate-in fade-in-0 zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
};

const TooltipArrow = ({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Arrow>) => {
  return (
    <TooltipPrimitive.Arrow
      className={twMerge('fill-foreground', className)}
      data-slot="tooltip-arrow"
      {...props}
    />
  );
};

export const Tooltip = Object.assign(TooltipRoot, {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Provider: TooltipProvider,
  Trigger: TooltipTrigger,
});
