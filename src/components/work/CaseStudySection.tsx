import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {motion} from 'framer-motion';

import {Button} from '@/components/ui/button';
import {type Project} from '@/data/projects';
import {type CaseStudyContent} from '@/data/work';
import {fadeUp} from '@/utils/animations';

import {ProjectIllustration} from './ProjectIllustration';

type CaseStudySectionProps = {
  content: CaseStudyContent;
  index: number;
  project: Project;
};

export const CaseStudySection = ({content, index, project}: CaseStudySectionProps) => (
  <motion.section
    animate="visible"
    aria-labelledby={`${project.slug}-title`}
    className="scroll-mt-24 space-y-8"
    custom={index}
    id={project.slug}
    initial="hidden"
    variants={fadeUp}
  >
    {/* Illustration */}
    <ProjectIllustration projectId={project.id} variant="section" />

    {/* Header */}
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        {project.icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-accent text-brand-foreground">
            <FontAwesomeIcon icon={project.icon} />
          </div>
        )}
        <h2 className="font-display text-2xl sm:text-3xl" id={`${project.slug}-title`}>
          {project.title}
        </h2>
        {project.company && (
          <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
            {project.company}
          </span>
        )}
        <span className="text-sm text-muted-foreground">{project.year}</span>
      </div>
      <p className="text-sm text-muted-foreground">{project.role}</p>
      <p className="max-w-3xl text-muted-foreground">{project.description}</p>
    </div>

    {/* Highlights */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {content.highlights.map((highlight) => (
        <div
          className="rounded-xl border border-brand/20 bg-brand/5 p-4 dark:border-brand/30 dark:bg-brand/10"
          key={highlight.label}
        >
          <div className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-2xl font-bold text-transparent">
            {highlight.value}
          </div>
          <div className="text-xs text-muted-foreground">{highlight.label}</div>
        </div>
      ))}
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {project.techStack.map((tech) => (
        <span className="rounded bg-secondary px-2 py-1 text-xs" key={tech}>
          {tech}
        </span>
      ))}
    </div>

    {/* Narrative Sections */}
    <div className="space-y-6">
      {content.sections.map((section) => (
        <div className="border-l-2 border-brand/30 pl-5 space-y-2" key={section.title}>
          <h3 className="font-display text-xl font-semibold">{section.title}</h3>
          <p className="leading-relaxed text-muted-foreground">{section.body}</p>
        </div>
      ))}
    </div>

    {/* External Links */}
    {project.links && project.links.length > 0 && (
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Button asChild key={link.url} size="sm" variant="outline">
            <a href={link.url} rel="noopener noreferrer" target="_blank">
              {link.label}
              <FontAwesomeIcon className="ml-2" icon={faArrowUpRightFromSquare} size="sm" />
            </a>
          </Button>
        ))}
      </div>
    )}
  </motion.section>
);
