import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Command as CommandPrimitive} from 'cmdk';

import {Dialog} from '@/components/ui/dialog';

import {twMerge} from 'tailwind-merge';

const CommandRoot = ({className, ...props}: React.ComponentProps<typeof CommandPrimitive>) => {
  return (
    <CommandPrimitive
      className={twMerge(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        className
      )}
      data-slot="command"
      {...props}
    />
  );
};

const CommandDialog = ({
  children,
  className,
  description = 'Search for a command to run...',
  showCloseButton = true,
  title = 'Command Palette',
  ...props
}: React.ComponentProps<typeof Dialog> & {
  className?: string;
  description?: string;
  showCloseButton?: boolean;
  title?: string;
}) => {
  return (
    <Dialog {...props}>
      <Dialog.Header className="sr-only">
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
      </Dialog.Header>
      <Dialog.Content
        className={twMerge('overflow-hidden p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </Dialog.Content>
    </Dialog>
  );
};

const CommandInput = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) => {
  return (
    <div className="flex h-9 items-center gap-2 border-b px-3" data-slot="command-input-wrapper">
      <FontAwesomeIcon className="size-4 shrink-0 opacity-50" icon={faMagnifyingGlass} />
      <CommandPrimitive.Input
        className={twMerge(
          'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        data-slot="command-input"
        {...props}
      />
    </div>
  );
};

const CommandList = ({className, ...props}: React.ComponentProps<typeof CommandPrimitive.List>) => {
  return (
    <CommandPrimitive.List
      className={twMerge('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
      data-slot="command-list"
      {...props}
    />
  );
};

const CommandEmpty = ({...props}: React.ComponentProps<typeof CommandPrimitive.Empty>) => {
  return (
    <CommandPrimitive.Empty
      className="py-6 text-center text-sm"
      data-slot="command-empty"
      {...props}
    />
  );
};

const CommandGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) => {
  return (
    <CommandPrimitive.Group
      className={twMerge(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className
      )}
      data-slot="command-group"
      {...props}
    />
  );
};

const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => {
  return (
    <CommandPrimitive.Separator
      className={twMerge('bg-border -mx-1 h-px', className)}
      data-slot="command-separator"
      {...props}
    />
  );
};

const CommandItem = ({className, ...props}: React.ComponentProps<typeof CommandPrimitive.Item>) => {
  return (
    <CommandPrimitive.Item
      className={twMerge(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot="command-item"
      {...props}
    />
  );
};

const CommandShortcut = ({className, ...props}: React.ComponentProps<'span'>) => {
  return (
    <span
      className={twMerge('text-muted-foreground ml-auto text-xs tracking-widest', className)}
      data-slot="command-shortcut"
      {...props}
    />
  );
};

const Command = Object.assign(CommandRoot, {
  Dialog: CommandDialog,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Input: CommandInput,
  Item: CommandItem,
  List: CommandList,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
});

export {Command};
