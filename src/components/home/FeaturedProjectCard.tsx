import {Link} from 'react-router-dom';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {ANIMATION_ORDER, FEATURED_PROJECTS, FEATURED_PROJECT_STATS} from '@/data/home';
import {fadeUp} from '@/utils/animations';

export const FeaturedProjectCard = () => {
  const project = FEATURED_PROJECTS[0];

  return (
    <motion.div
      animate="visible"
      className="col-span-1 row-span-1 md:col-span-5 md:row-span-3"
      custom={ANIMATION_ORDER.featuredProject}
      initial="hidden"
      variants={fadeUp}
    >
      <Link
        aria-label={`View case study: ${project.title}`}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-brand/30 hover:shadow-2xl"
        to={`/work#${project.slug}`}
      >
        <div className="relative h-48 bg-gradient-to-br from-brand via-brand-accent to-brand-warm">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="rounded-lg bg-white/90 px-3 py-1.5 font-medium backdrop-blur-sm dark:bg-card/90">
              Featured
            </span>
            <span className="rounded-lg bg-white/90 px-3 py-1.5 font-medium backdrop-blur-sm dark:bg-card/90">
              {project.company}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <div className="mb-4 grid grid-cols-2 gap-3 border-b border-border pb-4">
            {FEATURED_PROJECT_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 text-xs text-muted-foreground">{stat.label}</div>
                <div className="text-2xl font-bold">
                  {stat.value}
                  <span className="sr-only"> {stat.label.toLowerCase()}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span className="rounded bg-secondary px-2 py-1 text-xs" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <Button
            className="mt-auto gap-2 self-start font-medium text-brand"
            size="none"
            variant="link"
          >
            View Case Study
            <FontAwesomeIcon
              className="transition-transform group-hover:translate-x-1"
              icon={faArrowRight}
              size="sm"
            />
          </Button>
        </div>
      </Link>
    </motion.div>
  );
};
