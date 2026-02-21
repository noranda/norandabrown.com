import {Link} from 'react-router-dom';
import {toast} from 'sonner';
import {Button} from '@/components/ui/button';

const POSSIBLE_CAUSES = [
  'Mercury is in retrograde',
  'The CSS specificity wars claimed another route',
  'Someone forgot to push to main',
  'This page is on a coffee break',
  'The intern deleted it (there is no intern)',
  'It moved to a microservice nobody maintains',
];

export const NotFound = () => {
  const handleStay = () => {
    toast.info("Bold choice. There's truly nothing here though.", {
      description: 'But I respect the commitment.',
    });
  };

  return (
    <div
      className="mx-auto max-w-2xl px-6 py-24 text-center"
      data-easter-egg="🔍 You found the 404 page. Achievement unlocked: Getting Lost."
    >
      <p className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-8xl font-bold tracking-tighter text-transparent">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl sm:text-4xl">Well, this is awkward.</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. Or it did and I broke it. Either way,
        here we are.
      </p>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-left">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Possible causes
        </h2>
        <ul className="mt-3 space-y-2">
          {POSSIBLE_CAUSES.map((cause) => (
            <li className="flex items-start gap-2 text-sm text-brand-accent dark:text-[oklch(0.67_0.249_0.584)]" key={cause}>
              <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-accent">
                &bull;
              </span>
              {cause}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" variant="gradient">
          <Link to="/">Take me home</Link>
        </Button>
        <Button onClick={handleStay} size="lg" variant="outline">
          I like it here
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
