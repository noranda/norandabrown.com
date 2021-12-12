import { alpha, Avatar, Button, Stack, Typography } from '@mui/material';
import { BarChart as BarChartIcon, Code as CodeIcon, DesignServices as DesignIcon } from '@mui/icons-material';

import Highlight from '@/components/Highlight';
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
          I have spent the last 10 years designing <Highlight>user interfaces</Highlight>, starting with my very first
          Matlab GUI analyzing gravity data on Venus to locate subterranean volcanoes.
        </Typography>

        <Typography variant="h6">
          My current work focuses on designing user-friendly and impactful healthcare prototypes and web apps.
        </Typography>
      </Stack>

      <Stack bgcolor={alpha(theme.colorHighlight, 0.9)} p={2} spacing={1} width="50%">
        <Typography variant="h4">
          <Stack alignItems="center">
            <CodeIcon fontSize="large" /> Development
          </Stack>
        </Typography>

        <Typography variant="h6">
          My second love is frontend development, with the last 5 years using <Highlight>ReactJS</Highlight>, and more
          recently <Highlight>Next.js</Highlight> and <Highlight>Material UI</Highlight>. I love to create designs and
          then see them come to life.
        </Typography>

        <Typography variant="h6">
          Most of my development experience is in the frontend, but I am always up for learning new languages and have
          poked around in <Highlight>Ember</Highlight>, <Highlight>Ruby on Rails</Highlight>,{' '}
          <Highlight>GraphQL</Highlight>, and others in the past.
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
          I have used this skill to <Highlight>transform brainstormed ideas</Highlight> into fully-fledged prototypes
          and apps. I have worked with project, department, and division leaders to define strategy, describe workflows,
          and present data in ways that lead to <Highlight>high impact results</Highlight>.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WhatIDoWell;
