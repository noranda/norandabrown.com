import {useState} from 'react';
import {faEyeSlash, faLightbulb, faLock, faTrophy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {twJoin} from 'tailwind-merge';
import {Button} from '@/components/ui/button';
import {Dialog} from '@/components/ui/dialog';
import {ACHIEVEMENT_ICONS, ACHIEVEMENTS, type AchievementId} from '@/data/achievements';
import {useGamification} from '@/hooks/useGamification';

type AchievementGalleryProps = {
  onClose: () => void;
  open: boolean;
};

export const AchievementGallery = ({onClose, open}: AchievementGalleryProps) => {
  const {explorationScore, isUnlocked, state} = useGamification();
  const [visibleHints, setVisibleHints] = useState<Set<AchievementId>>(new Set());
  const isComplete = explorationScore === 100;
  const unlockedCount = Object.keys(state.unlockedAchievements).length;

  const toggleHint = (id: AchievementId) => {
    setVisibleHints((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && onClose()} open={open}>
      <Dialog.Content className="flex h-[100dvh] max-h-none max-w-none flex-col rounded-none border-0 sm:h-auto sm:max-h-[calc(100vh-2rem)] sm:max-w-2xl sm:rounded-lg sm:border sm:p-8">
        <Dialog.Header>
          <Dialog.Title className="flex items-center gap-2">
            <FontAwesomeIcon className="text-warning" icon={faTrophy} />
            Achievements
            <span className="text-sm font-normal text-muted-foreground">
              {unlockedCount}/{ACHIEVEMENTS.length}
            </span>
          </Dialog.Title>
          <Dialog.Description>
            {isComplete
              ? 'You found them all. Respect.'
              : 'Hidden milestones scattered across the site. Keep exploring.'}
          </Dialog.Description>
        </Dialog.Header>

        <div className="-mx-6 min-h-0 flex-1 overflow-y-auto px-6">
          {isComplete && (
            <div className="mb-4 rounded-lg border-l-4 border-warning bg-warning/5 p-4">
              <p className="text-sm leading-relaxed text-foreground">
                Thanks for exploring every corner. Building these little hidden moments is my
                favorite part of what I do - I hope they made you smile.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ACHIEVEMENTS.map((achievement) => {
              const unlocked = isUnlocked(achievement.id);
              const icon = ACHIEVEMENT_ICONS[achievement.id];
              const hintVisible = visibleHints.has(achievement.id);

              return (
                <div
                  className={twJoin(
                    'flex items-start gap-3 rounded-lg border p-3 transition-colors',
                    unlocked && isComplete && 'achievement-shimmer border-warning/30 bg-warning/5',
                    unlocked && !isComplete && 'border-brand/30 bg-brand/5',
                    !unlocked && 'border-border bg-muted/30 opacity-60'
                  )}
                  key={achievement.id}
                >
                  <div
                    className={twJoin(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                      unlocked &&
                        isComplete &&
                        'bg-gradient-to-br from-warning to-brand-warm text-foreground',
                      unlocked &&
                        !isComplete &&
                        'bg-gradient-to-br from-brand to-brand-accent text-brand-foreground',
                      !unlocked && 'bg-muted text-muted-foreground'
                    )}
                  >
                    <FontAwesomeIcon className="text-sm" icon={unlocked ? icon : faLock} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-tight">
                      {unlocked ? achievement.name : '???'}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {unlocked ? achievement.description : 'Keep exploring...'}
                    </p>
                    {!unlocked && (
                      <div
                        className={twJoin(
                          'grid transition-[grid-template-rows] duration-200 ease-in-out',
                          hintVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        )}
                      >
                        <p className="overflow-hidden text-xs italic text-muted-foreground">
                          <span className="mt-1.5 block">{achievement.hint}</span>
                        </p>
                      </div>
                    )}
                  </div>
                  {!unlocked && (
                    <Button
                      aria-label={hintVisible ? 'Hide hint' : 'Show hint'}
                      className="shrink-0 text-muted-foreground"
                      onClick={() => toggleHint(achievement.id)}
                      size="icon-sm"
                      title={hintVisible ? 'Hide hint' : 'Show hint'}
                      variant="ghost"
                    >
                      <FontAwesomeIcon
                        className="text-xs"
                        icon={hintVisible ? faEyeSlash : faLightbulb}
                      />
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{explorationScore}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className={twJoin(
                'h-full rounded-full transition-all duration-500',
                isComplete
                  ? 'bg-gradient-to-r from-warning to-brand-warm'
                  : 'bg-gradient-to-r from-brand to-brand-accent'
              )}
              style={{width: `${explorationScore}%`}}
            />
          </div>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
