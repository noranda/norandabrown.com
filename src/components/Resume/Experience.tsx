import type { ReactElement } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { CheckCircle as CheckIcon, Circle as CircleIcon, Link as LinkIcon } from '@mui/icons-material';

import { useThemeContext } from '@/context/ThemeContext';

type ExperienceProps = {
  company: string;
  companyUrl: string;
  descriptions: ReactElement[];
  isLast?: boolean;
  position: string;
  timePeriod: string;
};

const Experience = ({ company, companyUrl, descriptions, isLast, position, timePeriod }: ExperienceProps) => {
  const { theme } = useThemeContext();

  return (
    <Stack bgcolor={theme.colorHighlight} direction="row" p={3} my={1}>
      <CircleIcon sx={{ color: theme.bgAlternate, mt: 0.5, fontSize: '0.8em' }} />
      <Box borderLeft="1px solid" ml={-0.8} mt={0.8} mb={isLast ? 0 : -10} zIndex={1}></Box>

      <Stack ml={4}>
        <Typography variant="h4">{timePeriod}</Typography>

        <Stack alignItems="center" direction="row" width="200px">
          <Typography variant="h6" whiteSpace="nowrap">
            {company}
          </Typography>

          <IconButton
            component="a"
            href={companyUrl}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={company}
            size="small"
            sx={{ color: theme.colorPrimary, ml: 0.5 }}
          >
            <LinkIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Typography variant="h4">{position}</Typography>
      </Stack>

      <Stack>
        {descriptions.map((desc, index) => (
          <Stack key={index} direction="row" ml={3}>
            <CheckIcon sx={{ fontSize: '0.8em', mt: 0.5, mr: 1 }} />
            <Typography variant="h6">{desc}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Experience;
