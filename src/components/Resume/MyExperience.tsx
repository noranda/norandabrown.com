import { alpha, Stack } from '@mui/material';

import Experience from './Experience';
import Highlight from '@/components/Highlight';
import { useThemeContext } from '@/context/ThemeContext';

const MyExperience = () => {
  const { theme } = useThemeContext();

  const descriptionsMITRE = [
    <>
      <Highlight>Lead Designer</Highlight> for high-impact MITRE Moonshot research project, solely responsible for
      creating a cohesive design strategy across multiple projects, including presenting innovative work to sponsor
      workgroups and national conferences, and leading patient and clinician UX focus groups.
    </>,
    <>
      <Highlight>Design Implementation Lead</Highlight> on Clinical Decision Support project, designing and implementing
      improvements, and spearheading and implementing a codebase-wide refactor to improve maintainability.
    </>,
    <>
      <Highlight>Mentoring</Highlight> and providing <Highlight>technical leadership</Highlight> to project teams by
      pushing for clean, concise, and standardized code.
    </>,
    <>
      Creating wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction
      and design ideas.
    </>,
    <>
      Bringing mock-ups to life using <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>,{' '}
      <Highlight>JavaScript</Highlight>, <Highlight>ReactJS</Highlight>, <Highlight>Next.js</Highlight>, and{' '}
      <Highlight>Material UI</Highlight>.
    </>,
  ];

  const descriptionsBrandeis = [
    <>
      Developed sites for various divisions of the University and assisted with administration of the Cascade Server web
      content management system and myBrandeis campus portal.
    </>,
  ];

  const descriptionsWellesley = [
    <>Provided administrative support in the Office of the Provost and Dean of the College.</>,
    <>Designed and created numerous projects using Word, Excel, and PowerPoint.</>,
  ];

  const descriptionsNASA = [
    <>
      Developed a Matlab program which converted spherical harmonic coefficients from the Magellan orbiter into
      topography, measured gravity, geoid, and gravity maps for studying volcanoes on Venus.
    </>,
  ];

  return (
    <Stack bgcolor={alpha(theme.colorPrimary, 0.1)} p={3}>
      <Experience
        company="The MITRE Corporation"
        companyUrl="https://www.mitre.org/"
        descriptions={descriptionsMITRE}
        position="UI Designer &amp; Developer, Senior"
        timePeriod="2013-present"
      />

      <Experience
        company="Brandeis University"
        companyUrl="https://www.brandeis.edu/"
        descriptions={descriptionsBrandeis}
        position="Web Developer"
        timePeriod="2012-2013"
      />

      <Experience
        company="NASA-JPL"
        companyUrl="https://www.jpl.nasa.gov/"
        descriptions={descriptionsNASA}
        position="Research Intern"
        timePeriod="2012-2012"
      />

      <Experience
        company="Wellesley College"
        companyUrl="https://www.wellesley.edu/"
        descriptions={descriptionsWellesley}
        isLast
        position="Office Assistant"
        timePeriod="2008-2012"
      />
    </Stack>
  );
};

export default MyExperience;
