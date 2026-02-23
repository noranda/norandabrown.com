import {useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {SectionDivider} from '@/components/common/SectionDivider';
import {
  BugBlaster,
  CaseStudySection,
  SideProjectCard,
  WorkHero,
  WorkSidebar,
} from '@/components/work';
import {CASE_STUDIES, PROJECTS, SIDE_PROJECTS} from '@/data/projects';
import {CASE_STUDY_CONTENT} from '@/data/work';
import {useGamification} from '@/hooks/useGamification';

export const Work = () => {
  const {trackProjectView} = useGamification();
  const location = useLocation();
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].slug);
  const projectIds = useRef(new Set(PROJECTS.map((p) => p.slug)));
  const sectionRefs = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  // Track active section and project views via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRefs.current.set(entry.target.id, entry);
        });

        const visible = Array.from(sectionRefs.current.values())
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);

          for (const entry of visible) {
            if (projectIds.current.has(entry.target.id)) {
              trackProjectView(entry.target.id);
            }
          }
        }
      },
      {rootMargin: '-96px 0px -60% 0px'}
    );

    const sections = PROJECTS.map((p) => document.getElementById(p.slug)).filter(Boolean);
    sections.forEach((el) => observer.observe(el!));

    return () => observer.disconnect();
  }, [trackProjectView]);

  // Scroll to hash target on mount (from home page links like /work#design-system-architecture)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
      });
    }
  }, [location.hash]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div
      className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.06),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.04),_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(219,39,119,0.04),_transparent_40%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.1),_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(219,39,119,0.08),_transparent_40%)] dark:[--muted-foreground:oklch(0.82_0_0)]"
      data-easter-egg="💼 You found the work page - where case studies are told and side quests are logged"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <WorkHero />

        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <WorkSidebar activeId={activeId} onScrollTo={scrollTo} />

          <div className="space-y-16">
            {/* Case Studies */}
            {CASE_STUDIES.map((project, i) => {
              const content = CASE_STUDY_CONTENT.find((c) => c.projectId === project.id);
              return content ? (
                <CaseStudySection content={content} index={i} key={project.id} project={project} />
              ) : null;
            })}

            <SectionDivider label="Side Projects" />

            {/* Side Projects */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SIDE_PROJECTS.map((project, i) => (
                <SideProjectCard
                  index={CASE_STUDIES.length + i}
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

            <SectionDivider label="Take a Break" />

            {/* Bug Blaster Mini-Game */}
            <div className="mx-auto max-w-2xl space-y-3">
              <p className="text-center text-sm text-muted-foreground">
                You made it this far - reward yourself with a quick bug hunt.
              </p>
              <BugBlaster />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
