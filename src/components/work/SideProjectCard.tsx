import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';

import {Button} from '@/components/ui/button';
import {ILLUSTRATION_CONFIGS} from '@/data/projectIllustrations';
import {type Project} from '@/data/projects';
import {SCROLL_VIEWPORT, scrollFadeUp} from '@/utils/animations';

type SideProjectCardProps = {
  index: number;
  project: Project;
};

export const SideProjectCard = ({index, project}: SideProjectCardProps) => {
  const config = ILLUSTRATION_CONFIGS[project.id];
  const screenshot = project.coverImage;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      variants={scrollFadeUp}
      viewport={SCROLL_VIEWPORT}
      whileInView="visible"
    >
      <div
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-xl"
        id={project.slug}
        style={
          config
            ? ({
                '--card-accent': config.colors.primary,
                '--card-accent-2': config.colors.secondary,
              } as React.CSSProperties)
            : undefined
        }
      >
        {screenshot ? (
          <div className="h-44 overflow-hidden">
            <img
              alt={`Screenshot of ${project.title}`}
              className="h-full w-full object-cover object-top"
              loading="lazy"
              src={screenshot}
            />
          </div>
        ) : (
          <div className="h-32" />
        )}

        <div className="flex flex-1 flex-col p-6">
          <div
            className="mb-2 text-xs font-medium"
            style={{
              color: config
                ? 'color-mix(in oklch, var(--card-accent), transparent 30%)'
                : undefined,
            }}
          >
            {project.year}
          </div>
          <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
          <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                className="rounded px-2 py-1 text-xs"
                key={tech}
                style={{
                  backgroundColor: config
                    ? 'color-mix(in oklch, var(--card-accent), transparent 88%)'
                    : 'var(--secondary)',
                  color: config ? 'var(--card-accent)' : undefined,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-2">
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
        </div>
      </div>
    </motion.div>
  );
};
