import {useState} from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCheck, faCopy, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {twJoin} from 'tailwind-merge';
import {Button} from '@/components/ui/button';
import {Dialog} from '@/components/ui/dialog';
import {Tooltip} from '@/components/ui/tooltip';
import {SITE_CONFIG} from '@/data/siteConfig';
import {useCopyToClipboard} from '@/hooks/useCopyToClipboard';

const PILL_CLASSES = 'h-auto rounded-full px-3 py-1.5';

export const AvailabilityPill = () => {
  const {copied, copyToClipboard} = useCopyToClipboard();
  const [dialogOpen, setDialogOpen] = useState(false);

  if (!SITE_CONFIG.isAvailable) {
    return (
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button asChild className={PILL_CLASSES} variant="secondary">
            <a href={SITE_CONFIG.linkedinUrl} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="text-[10px]" icon={faLinkedin} />
              Open to Connect
              <span className="sr-only"> (opens LinkedIn in new tab)</span>
            </a>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Not currently available - but let&apos;s connect on LinkedIn
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    );
  }

  return (
    <>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button
            className={twJoin(
              PILL_CLASSES,
              'bg-success-muted text-success-foreground hover:bg-success-muted/80'
            )}
            onClick={() => setDialogOpen(true)}
            variant="ghost"
          >
            <div aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </div>
            Available
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          Let&apos;s connect - click to reach out
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>

      <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
        <Dialog.Content className="sm:max-w-md">
          <Dialog.Header>
            <Dialog.Title>Get in Touch</Dialog.Title>
            <Dialog.Description>Currently available for opportunities</Dialog.Description>
          </Dialog.Header>

          <div className="space-y-3">
            {/* Email */}
            <div className="flex items-center justify-between rounded-lg bg-muted p-4">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon className="text-brand" icon={faEnvelope} />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </div>
              <Button
                aria-label={copied ? 'Email copied' : 'Copy email address'}
                className="hover:bg-foreground/10 dark:hover:bg-foreground/20"
                onClick={() => copyToClipboard(SITE_CONFIG.email)}
                size="sm"
                variant="ghost"
              >
                <FontAwesomeIcon
                  className={copied ? 'text-success' : ''}
                  icon={copied ? faCheck : faCopy}
                />
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>

            {/* LinkedIn */}
            <Button
              asChild
              className="flex h-auto items-center justify-start gap-3 rounded-lg bg-muted p-4 text-foreground hover:bg-foreground/10 dark:hover:bg-foreground/20"
              variant="ghost"
            >
              <a href={SITE_CONFIG.linkedinUrl} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="text-brand" icon={faLinkedin} />
                <span className="text-sm">linkedin.com/in/noranda</span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </Button>
          </div>

          <Dialog.Footer showCloseButton />
        </Dialog.Content>
      </Dialog>
    </>
  );
};
