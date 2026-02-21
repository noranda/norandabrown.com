import {useState} from 'react';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from '@/components/ui/button';
import {useGamification} from '@/hooks/useGamification';
import {AchievementGallery} from './AchievementGallery';

export const ProgressTracker = () => {
  const {explorationScore} = useGamification();
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (explorationScore === 0) return null;

  return (
    <>
      <Button
        aria-label={`Achievements: ${explorationScore}% complete. Click to view all achievements.`}
        className="fixed bottom-6 right-6 z-40 gap-2.5 rounded-full px-4 py-2.5 shadow-lg transition-transform hover:scale-105 active:scale-95"
        onClick={() => setGalleryOpen(true)}
        variant="gradient"
      >
        <FontAwesomeIcon className="text-xs" icon={faTrophy} />
        <span>{explorationScore}%</span>
        <div
          aria-hidden="true"
          className="h-1.5 w-12 overflow-hidden rounded-full bg-brand-foreground/30"
        >
          <div
            className="h-full rounded-full bg-brand-foreground transition-all duration-500"
            style={{width: `${explorationScore}%`}}
          />
        </div>
      </Button>
      <AchievementGallery onClose={() => setGalleryOpen(false)} open={galleryOpen} />
    </>
  );
};
