import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {fadeUp} from '@/utils/animations';

export const WorkHero = () => (
  <motion.div
    animate="visible"
    className="mb-12 space-y-4"
    custom={0}
    initial="hidden"
    variants={fadeUp}
  >
    <h1 className="font-display text-4xl sm:text-5xl">Work</h1>
    <p className="max-w-2xl text-lg text-muted-foreground">
      Case studies from my professional work and side projects I build for fun. I focus on design
      systems, visual testing, and making things that are accessible, performant, and a little
      delightful.
    </p>
    <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-base text-muted-foreground">
      <FontAwesomeIcon className="mt-0.5 shrink-0 text-brand" icon={faLightbulb} />
      <p className="italic">
        Most of my professional work is proprietary, so these case studies focus on the process and
        impact rather than the pixels. The side projects, however, are fair game.
      </p>
    </div>
  </motion.div>
);
