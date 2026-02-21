import {
  EasterEggTracker,
  FeaturedProjectCard,
  GitHubShowcaseCard,
  HeroSection,
  ImpactMetricsCard,
  ProjectCard,
  TechStackCard,
} from '@/components/home';
import {FEATURED_PROJECTS} from '@/data/home';

export const Home = () => (
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
    {/* ── Bento Grid ── */}
    <div className="grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[140px] md:grid-cols-12">
      {/* Row 1-3: Photo + Hero */}
      <HeroSection />

      {/* Row 4-5: GitHub (full width) */}
      <GitHubShowcaseCard />

      {/* Row 6-8: Featured Project + Tech Stack + Impact Metrics */}
      <FeaturedProjectCard />
      <TechStackCard />
      <ImpactMetricsCard />

      {/* Row 9-10: More Projects */}
      {FEATURED_PROJECTS.slice(1).map((project, i) => (
        <ProjectCard animationIndex={5 + i} key={project.id} project={project} />
      ))}

      {/* Bottom: Easter Egg Tracker */}
      <EasterEggTracker />
    </div>
  </div>
);

export default Home;
