import {useState} from 'react';
import {faBug} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from '@/components/ui/button';
import {Dialog} from '@/components/ui/dialog';
import {Tooltip} from '@/components/ui/tooltip';
import {TOOLTIPS} from '@/data/humorContent';
import {SITE_CONFIG} from '@/data/siteConfig';
import {useGamification} from '@/hooks/useGamification';

const githubTooltip = TOOLTIPS.find((t) => t.id === 'github')!.text;
const linkedinTooltip = TOOLTIPS.find((t) => t.id === 'linkedin')!.text;

export const Footer = () => {
  const {unlockAchievement} = useGamification();
  const [bugModalOpen, setBugModalOpen] = useState(false);
  const year = new Date().getFullYear();

  const handleBugClick = () => {
    unlockAchievement('bugHunter');
    setBugModalOpen(true);
  };

  return (
    <footer
      className="border-t border-border"
      data-easter-egg="👇 The part of the website people scroll past to check for copyright dates"
      data-tour="tour-footer"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Noranda Brown
          <Button
            aria-label="You found a bug!"
            className="ml-2 h-auto w-auto p-0 text-muted-foreground/20 hover:bg-transparent hover:text-brand-accent hover:drop-shadow-[0_0_4px_rgba(225,29,72,0.5)]"
            onClick={handleBugClick}
            variant="ghost"
          >
            <FontAwesomeIcon className="text-[10px]" icon={faBug} />
          </Button>
        </p>
        <div className="flex items-center gap-4">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <a
                className="focus-ring rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={SITE_CONFIG.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {githubTooltip}
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <a
                className="focus-ring rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={SITE_CONFIG.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {linkedinTooltip}
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip>
        </div>
      </div>

      <Dialog onOpenChange={setBugModalOpen} open={bugModalOpen}>
        <Dialog.Content className="sm:max-w-md">
          <Dialog.Header>
            <Dialog.Title className="flex items-center gap-2">
              <FontAwesomeIcon className="text-brand-accent" icon={faBug} />
              Official Bug Report
            </Dialog.Title>
            <Dialog.Description>
              Incident #{String(Date.now()).slice(-6)} - Filed by you, just now
            </Dialog.Description>
          </Dialog.Header>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium">Summary</p>
              <p className="mt-1 text-muted-foreground">
                Found an intentionally hidden bug in production. Developer appears to have left it
                here on purpose, which raises serious questions about her priorities.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium">Steps to Reproduce</p>
              <ol className="mt-1 list-inside list-decimal space-y-1 text-muted-foreground">
                <li>Scroll to the very bottom of the page</li>
                <li>Squint at the copyright text</li>
                <li>Click the suspicious tiny bug icon</li>
                <li>Question your life choices</li>
              </ol>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium">Severity</p>
              <p className="mt-1 text-muted-foreground">
                Critical - Developer is clearly spending time hiding easter eggs instead of writing
                unit tests.
              </p>
            </div>
          </div>
          <Dialog.Footer showCloseButton>
            <p className="mr-auto text-xs text-muted-foreground">
              This bug will not be fixed. It&apos;s a feature.
            </p>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </footer>
  );
};
