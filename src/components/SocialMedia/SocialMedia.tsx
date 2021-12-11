import { Stack } from '@mui/material';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';

import SocialMediaButton from './SocialMediaButton';

const SocialMedia = () => (
  <Stack direction="row" my={1}>
    <SocialMediaButton href="https://github.com/noranda" label="github" Icon={<GitHubIcon />} />
    <SocialMediaButton href="https://twitter.com/NorandaBrown" label="twitter" Icon={<TwitterIcon />} />
    <SocialMediaButton href="https://www.linkedin.com/in/noranda" label="linkedin" Icon={<LinkedInIcon />} />
    <SocialMediaButton href="mailto:noranda@norandabrown.com" label="email" Icon={<EmailIcon />} />
  </Stack>
);

export default SocialMedia;
