import {Link} from 'react-router-dom';
import {faArrowRight, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {type Project} from '@/data/projects';
import {fadeUp} from '@/utils/animations';

type ProjectCardProps = {
  animationIndex: number;
  project: Project;
};

export const ProjectCard = ({animationIndex, project}: ProjectCardProps) => (
  <motion.div
    animate="visible"
    className="col-span-1 row-span-1 md:col-span-6 md:row-span-2"
    custom={animationIndex}
    initial="hidden"
    variants={fadeUp}
  >
    <div
      aria-label={`${project.title} project`}
      className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-xl"
      role="group"
    >
      <div className="mb-2 flex items-center gap-2">
        {project.company && (
          <span className="rounded-lg bg-secondary px-3 py-1 font-medium">{project.company}</span>
        )}
        <span className="font-medium text-muted-foreground">{project.year}</span>
      </div>
      <h2 className="mb-2 text-lg font-bold">{project.title}</h2>
      <p className="mb-4 text-muted-foreground line-clamp-2">{project.description}</p>
      <div className="mt-auto flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span className="rounded bg-secondary px-2 py-1 text-xs" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.links?.map((link) => (
            <Button asChild className="min-h-6 gap-1.5" key={link.url} size="none" variant="link">
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.label}
                <span className="sr-only"> (opens in new tab)</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </Button>
          ))}
          <Button asChild className="min-h-6 gap-2 font-medium" size="none" variant="link">
            <Link to={`/work#${project.slug}`}>
              View Case Study
              <span className="sr-only"> for {project.title}</span>
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);
