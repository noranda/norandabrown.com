import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
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
    <Link
      aria-label={`View case study: ${project.title}`}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-xl"
      to={`/work#${project.slug}`}
    >
      <div className="mb-2 text-xs font-medium text-muted-foreground">{project.year}</div>
      <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span className="rounded bg-secondary px-2 py-1 text-xs" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  </motion.div>
);
