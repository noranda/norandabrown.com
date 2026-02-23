import {
  CareerJourneyCard,
  EasterEggTracker,
  FeaturedProjectCard,
  GitHubShowcaseCard,
  HeroSection,
  ImpactMetricsCard,
  ProjectCard,
} from '@/components/home';
import {ANIMATION_ORDER, FEATURED_PROJECTS} from '@/data/home';

export const Home = () => (
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
    {/* ── Bento Grid ── */}
    <div className="grid auto-rows-auto grid-cols-1 gap-4 md:auto-rows-[140px] md:grid-cols-12">
      {/* Row 1-3: Photo + Hero */}
      <HeroSection />

      {/* Row 4-6: Featured Project + Impact Metrics */}
      <FeaturedProjectCard />
      <ImpactMetricsCard />

      {/* Row 7-8: Visual Testing + Career Journey */}
      <ProjectCard animationIndex={ANIMATION_ORDER.project} project={FEATURED_PROJECTS[1]} />
      <CareerJourneyCard />

      {/* Row 9-10: GitHub (full width) */}
      <GitHubShowcaseCard />

      {/* Bottom: Easter Egg Tracker */}
      <EasterEggTracker />
    </div>
  </div>
);

export default Home;
