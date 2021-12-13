import { alpha, Avatar, Button, Stack, Typography } from '@mui/material';
import { BarChart as BarChartIcon, Code as CodeIcon, DesignServices as DesignIcon } from '@mui/icons-material';

import Highlight from '@/components/elements/Highlight';
import { useThemeContext } from '@/context/ThemeContext';

const WhatIDoWell = () => {
  const { theme } = useThemeContext();

  return (
    <Stack bgcolor={alpha(theme.colorPrimary, 0.1)} direction="row" p={3} my={3} spacing={3}>
      <Stack bgcolor={alpha(theme.colorHighlight, 0.9)} p={2} spacing={1} width="50%">
        <Typography variant="h4">
          <Stack alignItems="center">
            <DesignIcon fontSize="large" /> UI Design
          </Stack>
        </Typography>

        <Typography variant="h6">
          I have 10+ years of experience designing interactive high-fidelity <Highlight>user interfaces</Highlight>,
          employing an effective user-centered design approach, working closely with project teams and developers.
        </Typography>

        <Typography variant="h6">
          My current work focuses on designing user-friendly and impactful healthcare prototypes and web apps. My tools
          of the trade are <Highlight>Sketch</Highlight>, <Highlight>InvisionApp</Highlight>, and{' '}
          <Highlight>Adobe InDesign</Highlight>.
        </Typography>
      </Stack>

      <Stack bgcolor={alpha(theme.colorHighlight, 0.9)} p={2} spacing={1} width="50%">
        <Typography variant="h4">
          <Stack alignItems="center">
            <CodeIcon fontSize="large" /> Development
          </Stack>
        </Typography>

        <Typography variant="h6">
          I have 10+ years of <Highlight>frontend development</Highlight> experience, with the last 5 years primarily
          using <Highlight>ReactJS</Highlight>, and more recently <Highlight>Next.js</Highlight> and{' '}
          <Highlight>Material UI</Highlight>.
        </Typography>

        <Typography variant="h6">
          I love finding new ways to bring my designs to life, including solving tough problems and finding the best
          approaches. While I primarily work in React, I have also poked around in <Highlight>Ember</Highlight>,{' '}
          <Highlight>Ruby on Rails</Highlight>, <Highlight>GraphQL</Highlight>, among others.
        </Typography>
      </Stack>

      <Stack bgcolor={alpha(theme.colorHighlight, 0.9)} p={2} spacing={1} width="50%">
        <Typography variant="h4">
          <Stack alignItems="center">
            <BarChartIcon fontSize="large" /> Data Visualization
          </Stack>
        </Typography>

        <Typography variant="h6">
          I am exceptionally adept at taking complex data and ideas, <Highlight>distilling</Highlight> them into
          digestable and coherent pieces, and <Highlight>transforming</Highlight> them into visualized data.
        </Typography>

        <Typography variant="h6">
          I have used these skills to <Highlight>transform ideas</Highlight> into fully-fledged prototypes and apps,
          working with project, department, and division leaders to define strategy, describe workflows, and present
          data in ways that lead to <Highlight>high impact results</Highlight>.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WhatIDoWell;
