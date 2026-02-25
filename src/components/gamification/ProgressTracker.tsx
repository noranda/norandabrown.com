import {useRef, useState} from 'react';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {twJoin} from 'tailwind-merge';
import {Button} from '@/components/ui/button';
import {useGamification} from '@/hooks/useGamification';
import {AchievementGallery} from './AchievementGallery';

export const ProgressTracker = () => {
  const {explorationScore} = useGamification();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isComplete = explorationScore === 100;

  if (explorationScore === 0) return null;

  return (
    <>
      <Button
        aria-label={`Achievements: ${explorationScore}% complete. Click to view all achievements.`}
        className={twJoin(
          'fixed bottom-6 right-6 z-40 gap-2.5 rounded-full border-2 border-background px-4 py-2.5 transition-transform hover:scale-105 active:scale-95',
          isComplete
            ? 'shadow-[0_0_12px_rgba(245,158,11,0.5),0_0_24px_rgba(245,158,11,0.25)]'
            : 'shadow-[0_0_12px_rgba(124,58,237,0.5),0_0_24px_rgba(124,58,237,0.25)]'
        )}
        onClick={() => setGalleryOpen(true)}
        ref={triggerRef}
        variant={isComplete ? 'golden' : 'gradient'}
      >
        <FontAwesomeIcon className="text-xs" icon={faTrophy} />
        <span>{explorationScore}%</span>
        <div
          aria-hidden="true"
          className={twJoin(
            'h-1.5 w-12 overflow-hidden rounded-full',
            isComplete ? 'bg-foreground/30' : 'bg-brand-foreground/30'
          )}
        >
          <div
            className={twJoin(
              'h-full rounded-full transition-all duration-500',
              isComplete ? 'bg-foreground' : 'bg-brand-foreground'
            )}
            style={{width: `${explorationScore}%`}}
          />
        </div>
      </Button>
      <AchievementGallery
        onClose={() => {
          setGalleryOpen(false);
          requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        open={galleryOpen}
      />
    </>
  );
};
