import {Link} from 'react-router-dom';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {ANIMATION_ORDER} from '@/data/home';
import {fadeUp} from '@/utils/animations';
import {IllustrationCircle} from './IllustrationCircle';

export const HeroSection = () => (
  <motion.div
    animate="visible"
    className="col-span-1 flex flex-col items-center gap-6 md:col-span-12 md:row-span-3 md:flex-row md:items-stretch lg:row-span-3"
    custom={ANIMATION_ORDER.hero}
    initial="hidden"
    variants={fadeUp}
  >
    {/* Photo Circle */}
    <div className="flex items-center justify-center md:w-[300px] md:shrink-0 lg:w-[432px]">
      <IllustrationCircle />
    </div>

    {/* Hero Card */}
    <div className="flex flex-1 flex-col justify-between rounded-3xl bg-gradient-to-br from-brand via-brand-accent to-brand-warm p-8 text-white sm:p-10 md:pl-12 md:pr-6 lg:pl-14 lg:pr-10">
      <div>
        <h1 className="mb-6 font-display text-4xl leading-[1.1] font-bold sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Building delightful web experiences
        </h1>
        <p className="mb-6 text-lg text-white">
          12+ years building design systems, championing visual testing, and crafting accessible
          React applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          asChild
          className="border-transparent bg-white text-brand hover:bg-white/90"
          size="lg"
        >
          <Link to="/work">View Projects</Link>
        </Button>
        <Button
          asChild
          className="border-transparent bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
          size="lg"
        >
          <Link to="/resume">Download Resume</Link>
        </Button>
        <Button
          asChild
          className="border-transparent bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
          size="lg"
        >
          <a href="https://github.com/noranda" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);
