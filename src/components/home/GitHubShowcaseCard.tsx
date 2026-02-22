import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {useTheme} from '@/hooks/useTheme';
import {fadeUp} from '@/utils/animations';

export const GitHubShowcaseCard = () => {
  const {theme} = useTheme();

  return (
    <motion.div
      animate="visible"
      className="col-span-1 row-span-1 md:col-span-12 md:row-span-3 lg:row-span-2"
      custom={1}
      initial="hidden"
      variants={fadeUp}
    >
      <a
        aria-label="View Noranda's GitHub profile - contribution streak and graph"
        className="flex h-full flex-col justify-start rounded-3xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-xl"
        href="https://github.com/noranda"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-bold">GitHub</h3>
          <Button asChild size="sm" variant="outline">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              View Profile
            </span>
          </Button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between gap-4 overflow-hidden md:gap-8 lg:flex-row lg:gap-6">
          <div className="w-full shrink-0 md:max-w-lg lg:w-1/3">
            <img
              alt="GitHub contribution streak for Noranda"
              className="mx-auto w-full"
              src={`https://streak-stats.demolab.com/?user=noranda&hide_border=true&background=00000000&ring=7c3aed&fire=ec4899&currStreakLabel=${theme === 'dark' ? 'c9d1d9' : '1f2328'}&sideLabels=${theme === 'dark' ? 'c9d1d9' : '1f2328'}&currStreakNum=${theme === 'dark' ? 'c9d1d9' : '1f2328'}&sideNums=${theme === 'dark' ? 'c9d1d9' : '1f2328'}&dates=${theme === 'dark' ? '8b949e' : '57606a'}`}
            />
          </div>
          <div className="w-full flex-1">
            <img
              alt="GitHub contribution graph for Noranda"
              className="w-full dark:[filter:invert(1)_hue-rotate(180deg)_brightness(0.9)]"
              src="https://ghchart.rshah.org/7c3aed/noranda"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
};
