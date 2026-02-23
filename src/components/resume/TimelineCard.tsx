import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';
import {twJoin} from 'tailwind-merge';

import {type ResumeExperience} from '@/data/resume';

type TimelineCardProps = {
  experience: ResumeExperience;
  isFirst: boolean;
  isLast: boolean;
  showReality: boolean;
};

export const TimelineCard = ({experience, isFirst, isLast, showReality}: TimelineCardProps) => {
  const [expanded, setExpanded] = useState(isFirst);

  return (
    <div className="relative grid grid-cols-[24px_1fr] gap-4 pb-8 last:pb-0 sm:grid-cols-[32px_1fr] sm:gap-6">
      {/* Timeline track */}
      <div className="flex flex-col items-center">
        <div
          className={twJoin(
            'z-10 h-3 w-3 shrink-0 rounded-full border-2 sm:h-4 sm:w-4',
            isFirst
              ? 'border-brand bg-brand shadow-[0_0_8px_rgba(147,51,234,0.4)]'
              : 'border-muted-foreground/40 bg-background'
          )}
        />
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10" />
        )}
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
        <button
          aria-expanded={expanded}
          className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left sm:p-6"
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          <div className="min-w-0 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg sm:text-xl">{experience.role}</h3>
              {experience.endDate === 'Present' && (
                <span className="rounded-full bg-success-muted px-2 py-0.5 text-xs font-medium text-success-foreground">
                  Current
                </span>
              )}
            </div>
            <p className="text-base text-muted-foreground">
              {experience.company} - {experience.startDate} to {experience.endDate}
            </p>
          </div>
          <FontAwesomeIcon
            className={twJoin(
              'mt-1.5 shrink-0 text-muted-foreground transition-transform duration-200',
              expanded && 'rotate-180'
            )}
            icon={faChevronDown}
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              animate={{height: 'auto', opacity: 1}}
              exit={{height: 0, opacity: 0}}
              initial={{height: 0, opacity: 0}}
              transition={{duration: 0.25, ease: 'easeInOut'}}
            >
              <div className="space-y-4 border-t border-border px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
                {/* Description or reality */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  {showReality && experience.reality ? (
                    <span className="italic text-pink-500">
                      <FontAwesomeIcon className="mr-1.5" icon={faWandMagicSparkles} />
                      {experience.reality}
                    </span>
                  ) : (
                    experience.description
                  )}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {experience.highlights.map((highlight) => (
                    <li
                      className="flex items-start gap-2 text-base text-muted-foreground"
                      key={highlight}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                {experience.links && experience.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience.links.map((link) => (
                      <a
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-brand/30 hover:text-foreground"
                        href={link.url}
                        key={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label}
                        <FontAwesomeIcon className="text-[10px]" icon={faArrowUpRightFromSquare} />
                      </a>
                    ))}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {experience.techStack.map((tech) => (
                    <span
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
