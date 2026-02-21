import {
  faBug,
  faCircleCheck,
  faClock,
  faCompass,
  faDesktop,
  faFileArrowDown,
  faKeyboard,
  faMoon,
  faPuzzlePiece,
  faTrophy,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {ACHIEVEMENTS, type AchievementId} from '@/data/achievements';
import {Dialog} from '@/components/ui/dialog';
import {useGamification} from '@/hooks/useGamification';

const ACHIEVEMENT_ICONS: Record<AchievementId, IconDefinition> = {
  bugHunter: faBug,
  completionist: faCircleCheck,
  explorer: faCompass,
  gottaCatchEmAll: faPuzzlePiece,
  inspectorGadget: faTrophy,
  procrastinator: faClock,
  recruiterDelight: faFileArrowDown,
  tabMaster: faKeyboard,
  vampireMode: faMoon,
  worksOnMyMachine: faDesktop,
};

type AchievementGalleryProps = {
  onClose: () => void;
  open: boolean;
};

export const AchievementGallery = ({onClose, open}: AchievementGalleryProps) => {
  const {explorationScore, isUnlocked, state} = useGamification();
  const unlockedCount = Object.keys(state.unlockedAchievements).length;

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && onClose()} open={open}>
      <Dialog.Content className="flex h-[100dvh] max-h-none max-w-none flex-col rounded-none border-0 sm:h-auto sm:max-h-[calc(100vh-2rem)] sm:max-w-xl sm:rounded-lg sm:border">
        <Dialog.Header>
          <Dialog.Title className="flex items-center gap-2">
            <FontAwesomeIcon className="text-warning" icon={faTrophy} />
            Achievements
            <span className="text-sm font-normal text-muted-foreground">
              {unlockedCount}/{ACHIEVEMENTS.length}
            </span>
          </Dialog.Title>
          <Dialog.Description>
            {explorationScore === 100
              ? 'You found them all. Respect.'
              : 'Hidden milestones scattered across the site. Keep exploring.'}
          </Dialog.Description>
        </Dialog.Header>

        <div className="-mx-6 min-h-0 flex-1 overflow-y-auto px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ACHIEVEMENTS.map((achievement) => {
              const unlocked = isUnlocked(achievement.id);
              const icon = ACHIEVEMENT_ICONS[achievement.id];

              return (
                <div
                  className={`flex items-start gap-3 rounded-lg border p-3 transition-colors ${
                    unlocked ? 'border-brand/30 bg-brand/5' : 'border-border bg-muted/30 opacity-60'
                  }`}
                  key={achievement.id}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      unlocked
                        ? 'bg-gradient-to-br from-brand to-brand-accent text-brand-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <FontAwesomeIcon className="text-sm" icon={unlocked ? icon : faLock} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-tight">
                      {unlocked ? achievement.name : '???'}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {unlocked ? achievement.description : 'Keep exploring...'}
                    </p>
                  </div>
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
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent transition-all duration-500"
              style={{width: `${explorationScore}%`}}
            />
          </div>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
