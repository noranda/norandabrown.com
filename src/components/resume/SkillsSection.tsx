import {motion} from 'framer-motion';
import {twJoin} from 'tailwind-merge';

import {type SkillCategory} from '@/data/resume';
import {fadeUp} from '@/utils/animations';

type SkillsSectionProps = {
  skills: SkillCategory[];
};

export const SkillsSection = ({skills}: SkillsSectionProps) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {skills.map((category, i) => (
      <motion.div
        animate="visible"
        className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
        custom={i}
        initial="hidden"
        key={category.name}
        variants={fadeUp}
      >
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {category.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const isHighlighted = category.highlighted?.includes(skill);
            return (
              <span
                className={twJoin(
                  'rounded-full px-3 py-1 text-base',
                  isHighlighted
                    ? 'bg-gradient-to-r from-brand to-brand-accent font-medium text-brand-foreground'
                    : 'bg-muted text-foreground'
                )}
                key={skill}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </motion.div>
    ))}
  </div>
);
