import {Link} from 'react-router-dom';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {twJoin} from 'tailwind-merge';
import {Button} from '@/components/ui/button';
import {ANIMATION_ORDER, CAREER_JOURNEY} from '@/data/home';
import {fadeUp} from '@/utils/animations';

export const CareerJourneyCard = () => (
  <motion.div
    animate="visible"
    className="col-span-1 row-span-1 md:col-span-6 md:row-span-2"
    custom={ANIMATION_ORDER.careerJourney}
    initial="hidden"
    variants={fadeUp}
  >
    <Link
      aria-label="View career journey and full resume"
      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-xl"
      to="/resume"
    >
      <div className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
        Career Journey
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {CAREER_JOURNEY.map((stop, index) => (
          <div className="flex items-center gap-3" key={stop.company}>
            <div className="w-10 shrink-0 text-right text-muted-foreground">{stop.year}</div>
            <div aria-hidden="true" className="relative flex h-full items-center">
              <div
                className={twJoin(
                  'h-2.5 w-2.5 shrink-0 rounded-full',
                  index === 0 ? 'bg-brand' : 'bg-border'
                )}
              />
            </div>
            <div>
              <span className="font-bold">{stop.company}</span>
              <span className="text-muted-foreground"> · {stop.role}</span>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-4 gap-2 self-start font-medium text-brand" size="none" variant="link">
        Full resume
        <FontAwesomeIcon
          className="transition-transform group-hover:translate-x-1"
          icon={faArrowRight}
          size="sm"
        />
      </Button>
    </Link>
  </motion.div>
);
