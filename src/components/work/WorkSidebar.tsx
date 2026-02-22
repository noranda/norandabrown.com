import {twJoin} from 'tailwind-merge';
import {CASE_STUDIES, SIDE_PROJECTS} from '@/data/projects';

type WorkSidebarProps = {
  activeId: string;
  onScrollTo: (id: string) => void;
};

export const WorkSidebar = ({activeId, onScrollTo}: WorkSidebarProps) => (
  <nav aria-label="Work navigation" className="hidden lg:block">
    <div className="sticky top-24 space-y-1">
      <div className="mb-3 text-base font-semibold uppercase tracking-wider text-muted-foreground">
        Case Studies
      </div>

      {CASE_STUDIES.map((project) => (
        <button
          className={twJoin(
            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            activeId === project.slug
              ? 'bg-accent font-medium text-accent-foreground'
              : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
          )}
          key={project.id}
          onClick={() => onScrollTo(project.slug)}
          type="button"
        >
          {project.title}
        </button>
      ))}

      <div className="mb-3 mt-6 text-base font-semibold uppercase tracking-wider text-muted-foreground">
        Side Projects
      </div>

      {SIDE_PROJECTS.map((project) => (
        <button
          className={twJoin(
            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            activeId === project.slug
              ? 'bg-accent font-medium text-accent-foreground'
              : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
          )}
          key={project.id}
          onClick={() => onScrollTo(project.slug)}
          type="button"
        >
          {project.title}
        </button>
      ))}
    </div>
  </nav>
);
