import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faSpinner,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Toaster as Sonner, type ToasterProps} from 'sonner';

import {useTheme} from '@/hooks/useTheme';

const Toaster = ({...props}: Omit<ToasterProps, 'theme'>) => {
  const {theme} = useTheme();

  return (
    <Sonner
      className="toaster group"
      closeButton
      duration={4000}
      expand
      gap={8}
      icons={{
        error: <FontAwesomeIcon className="size-4 text-destructive" icon={faCircleXmark} />,
        info: <FontAwesomeIcon className="size-4 text-info" icon={faCircleInfo} />,
        loading: <FontAwesomeIcon className="size-4 animate-spin text-brand" icon={faSpinner} />,
        success: <FontAwesomeIcon className="size-4 text-success" icon={faCircleCheck} />,
        warning: <FontAwesomeIcon className="size-4 text-warning" icon={faTriangleExclamation} />,
      }}
      position="bottom-right"
      style={
        {
          '--border-radius': 'var(--radius)',
          '--normal-bg': 'var(--popover)',
          '--normal-border': 'var(--border)',
          '--normal-text': 'var(--popover-foreground)',
          '--toast-close-button-end': '0.75rem',
          '--toast-close-button-start': 'unset',
          '--toast-close-button-transform': 'translate(0, -50%)',
        } as React.CSSProperties
      }
      theme={theme}
      toastOptions={{
        classNames: {
          closeButton:
            '!border-none !bg-transparent !size-6 !text-background !top-1/2 hover:!bg-background/20 hover:!text-background [&>svg]:!size-4',
          error: '!border-destructive !shadow-[0_0_40px_rgba(244,63,94,0.6)]',
          info: '!border-info !shadow-[0_0_40px_rgba(139,92,246,0.6)]',
          success: '!border-success !shadow-[0_0_40px_rgba(16,185,129,0.6)]',
          toast: '!bg-foreground !border-3 !text-base !text-background',
          warning: '!border-warning !shadow-[0_0_40px_rgba(245,158,11,0.6)]',
        },
      }}
      visibleToasts={5}
      {...props}
    />
  );
};

export {Toaster};
