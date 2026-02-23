import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {ACHIEVEMENTS} from '@/data/achievements';
import {ANIMATION_ORDER} from '@/data/home';
import {useGamification} from '@/hooks/useGamification';
import {fadeUp} from '@/utils/animations';

export const EasterEggTracker = () => {
  const {explorationScore, state} = useGamification();
  const totalAchievements = ACHIEVEMENTS.length;
  const unlockedCount = Object.keys(state.unlockedAchievements).length;

  return (
    <motion.div
      animate="visible"
      className="col-span-1 md:col-span-12"
      custom={ANIMATION_ORDER.easterEggTracker}
      initial="hidden"
      variants={fadeUp}
    >
      <section aria-label="Easter egg progress tracker">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-brand via-brand-accent to-brand-warm px-8 py-4 text-white sm:flex-row">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon aria-hidden="true" className="text-2xl" icon={faGlobe} />
            <div>
              <div className="font-bold">Hidden Features Unlocked</div>
              <div className="opacity-90">
                Explore the site to discover easter eggs and unlock achievements
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">
                <span aria-label={`${unlockedCount} of ${totalAchievements} achievements found`}>
                  {unlockedCount}/{totalAchievements}
                </span>
              </div>
              <div className="text-xs opacity-75">Found</div>
            </div>
            {explorationScore < 100 && (
              <div className="opacity-90">Find all {totalAchievements} to unlock a surprise!</div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
