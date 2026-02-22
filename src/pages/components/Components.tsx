import {faCode, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useMemo, useRef, useState} from 'react';
import {twJoin} from 'tailwind-merge';

import {SectionDivider} from '@/components/common/SectionDivider';
import {
  ColorsSection,
  SpacingSection,
  TypographySection,
} from '@/components/playground/DesignTokens';
import {Button} from '@/components/ui/button';
import {CodeBlock} from '@/components/ui/codeBlock';
import {COMPONENTS, type ComponentShowcase, type ComponentStory} from '@/data/components';
import {DESIGN_TOKEN_SECTIONS} from '@/data/designTokens';
import {useGamification} from '@/hooks/useGamification';
import {useTheme} from '@/hooks/useTheme';
import {extractStorySource} from '@/utils/storySource';

const STORYBOOK_URL = import.meta.env.DEV ? 'http://localhost:6006' : '/storybook';

const getStoryUrl = (componentId: string, storyId: string, theme: string) =>
  `${STORYBOOK_URL}/iframe.html?id=ui-${componentId}--${storyId}&viewMode=story&globals=theme:${theme}`;

const StoryEmbed = ({
  componentId,
  source,
  story,
  theme,
}: {
  componentId: string;
  source: string;
  story: ComponentStory;
  theme: string;
}) => {
  const [showSource, setShowSource] = useState(false);
  const storyCode = useMemo(
    () => extractStorySource(source, story.storyExport),
    [source, story.storyExport]
  );

  return (
    <div className="space-y-2">
      <h4 className="text-base font-medium text-muted-foreground">{story.name}</h4>
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <iframe
          className="w-full"
          loading="lazy"
          src={getStoryUrl(componentId, story.id, theme)}
          style={{height: story.height ?? 200}}
          title={`${componentId} - ${story.name}`}
        />
      </div>
      {storyCode && (
        <div className="space-y-2">
          <Button
            aria-expanded={showSource}
            onClick={() => setShowSource(!showSource)}
            size="sm"
            variant="outline"
          >
            <FontAwesomeIcon icon={faCode} />
            {showSource ? 'Hide Source' : 'View Source'}
          </Button>
          {showSource && (
            <div className="overflow-hidden rounded-xl border border-border">
              <CodeBlock code={storyCode} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ComponentSection = ({component, theme}: {component: ComponentShowcase; theme: string}) => (
  <section className="scroll-mt-24 space-y-6" id={component.id}>
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-accent text-brand-foreground">
          <FontAwesomeIcon icon={component.icon} />
        </div>
        <h3 className="font-display text-2xl">{component.name}</h3>
      </div>

      <p className="text-muted-foreground">{component.description}</p>

      <div className="flex flex-wrap gap-2">
        {component.techStack.map((tech) => (
          <span
            className="rounded-full bg-muted px-3 py-1 text-base text-muted-foreground"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-base text-muted-foreground">
        <FontAwesomeIcon className="mt-0.5 shrink-0 text-warning" icon={faLightbulb} />
        <p className="italic">{component.reality}</p>
      </div>
    </div>

    <div className="space-y-6">
      {component.stories.map((story) => (
        <StoryEmbed
          componentId={component.id}
          key={story.id}
          source={component.source}
          story={story}
          theme={theme}
        />
      ))}
    </div>
  </section>
);

export const Components = () => {
  const {trackComponentView} = useGamification();
  const {theme} = useTheme();
  const [activeId, setActiveId] = useState(COMPONENTS[0].id);
  const componentIds = useRef(new Set(COMPONENTS.map((c) => c.id)));
  const sectionRefs = useRef<Map<string, IntersectionObserverEntry>>(new Map());

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

          // Track component views for Gotta Catch 'Em All achievement
          for (const entry of visible) {
            if (componentIds.current.has(entry.target.id)) {
              trackComponentView(entry.target.id);
            }
          }
        }
      },
      {rootMargin: '-96px 0px -60% 0px'}
    );

    const allIds = [...COMPONENTS.map((c) => c.id), ...DESIGN_TOKEN_SECTIONS.map((s) => s.id)];
    const sections = allIds.map((id) => document.getElementById(id)).filter(Boolean);
    sections.forEach((el) => observer.observe(el!));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div
      className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.06),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.04),_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(219,39,119,0.04),_transparent_40%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(147,51,234,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.1),_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(219,39,119,0.08),_transparent_40%)] dark:[--muted-foreground:oklch(0.82_0_0)]"
      data-easter-egg="🧩 You found the component playground - where buttons have variants and selects have opinions"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl">Component Playground</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            The building blocks behind this site. Built with React, TypeScript, and an unhealthy
            amount of attention to detail. Each component is documented in Storybook - poke around,
            they don't bite.
          </p>
          <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-base text-muted-foreground">
            <FontAwesomeIcon className="mt-0.5 shrink-0 text-brand" icon={faLightbulb} />
            <p className="italic">
              Inspired by the Tapas Design System I built at work - same principles, different
              codebase. shadcn/ui provides the accessible primitives, I provide the opinions.
            </p>
          </div>
        </div>

        {/* Sidebar + Content */}
        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          {/* Sidebar nav */}
          <nav aria-label="Component navigation" className="hidden lg:block">
            <div className="sticky top-24 space-y-1">
              <div className="mb-3 text-base font-semibold uppercase tracking-wider text-muted-foreground">
                Components
              </div>

              {COMPONENTS.map((component) => (
                <button
                  className={twJoin(
                    'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    activeId === component.id
                      ? 'bg-accent font-medium text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  )}
                  key={component.id}
                  onClick={() => scrollTo(component.id)}
                  type="button"
                >
                  <FontAwesomeIcon className="w-4" icon={component.icon} />
                  {component.name}
                </button>
              ))}

              <div className="mb-3 mt-6 text-base font-semibold uppercase tracking-wider text-muted-foreground">
                Design Tokens
              </div>
              {DESIGN_TOKEN_SECTIONS.map((section) => (
                <button
                  className={twJoin(
                    'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    activeId === section.id
                      ? 'bg-accent font-medium text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                  )}
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  type="button"
                >
                  <FontAwesomeIcon className="w-4" icon={section.icon} />
                  {section.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Component sections */}
          <div className="space-y-16">
            {COMPONENTS.map((component) => (
              <ComponentSection component={component} key={component.id} theme={theme} />
            ))}

            {/* Design Token sections */}
            <SectionDivider label="Design Tokens" />
            <ColorsSection />
            <TypographySection />
            <SpacingSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
