import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toast} from 'sonner';
import {type AchievementDefinition} from '@/data/achievements';

export const showAchievementToast = (achievement: AchievementDefinition) => {
  toast(achievement.name, {
    description: achievement.toast,
    duration: 10000,
    icon: <FontAwesomeIcon className="text-warning" icon={faTrophy} />,
  });
};
