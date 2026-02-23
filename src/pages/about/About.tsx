import {motion} from 'framer-motion';

import {PageMeta} from '@/components/common/PageMeta';
import {SolarSystem} from '@/components/about';
import {ABOUT_DATA} from '@/data/about';
import {fadeUp} from '@/utils/animations';

export const About = () => (
  <div
    className="flex-1 bg-[radial-gradient(ellipse_at_top,_rgba(147,130,220,0.08),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(102,126,234,0.05),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(147,130,220,0.2),_transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(102,126,234,0.12),_transparent_50%)]"
    data-easter-egg="🪐 You found the solar system. The planets are themed, not chronological. Yes, the NASA one is real."
  >
    <PageMeta
      description="Get to know Noranda Brown. From NASA JPL research intern to Senior Frontend Engineer — explore an interactive solar system of skills and interests."
      path="/about"
      title="About"
    />
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="sr-only">About Noranda Brown</h1>

      <motion.p
        animate="visible"
        className="mb-8 bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-center font-display text-2xl text-transparent sm:text-3xl"
        custom={0}
        initial="hidden"
        variants={fadeUp}
      >
        {ABOUT_DATA.tagline}
      </motion.p>

      {/* Accessible fallback content */}
      <section aria-label="About details" className="sr-only">
        <p>{ABOUT_DATA.sun.bio}</p>
        <h2>Life Themes</h2>
        <ul>
          {ABOUT_DATA.planets.map((planet) => (
            <li key={planet.id}>
              <h3>{planet.label}</h3>
              <p>{planet.description}</p>
              <ul>
                {planet.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <motion.div animate="visible" custom={1} initial="hidden" variants={fadeUp}>
        <SolarSystem />
      </motion.div>
    </div>
  </div>
);

export default About;
