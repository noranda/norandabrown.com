import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Chip, IconButton, Modal, Stack, Typography } from '@mui/material';
import { Link as LinkIcon } from '@mui/icons-material';
import slugify from 'react-slugify';

import Highlight from '@/components/elements/Highlight';
import { EmberIcon, InvisionAppIcon, JekyllIcon, ReactIcon, SketchIcon } from '@/components/icons';
import { useThemeContext } from '@/context/ThemeContext';
import { PortfolioItemProps } from './portfolioItems';

type PortfolioProps = {
  portfolioItems: PortfolioItemProps[];
  tag?: string;
};

const Portfolio = ({ portfolioItems, tag }: PortfolioProps) => {
  const [showImage, setShowImage] = useState(null);
  const router = useRouter();
  const { theme } = useThemeContext();

  const toolIcons = {
    Ember: <EmberIcon fontSize="1em" />,
    InvisionApp: <InvisionAppIcon fontSize="1em" />,
    Jekyll: <JekyllIcon />,
    React: <ReactIcon />,
    Sketch: <SketchIcon fontSize="1em" />,
  };

  return (
    <Stack bgcolor={theme.bgPrimary} color={theme.colorPrimary} component="main" minHeight="100%" p={3} spacing={3}>
      {tag && (
        <Typography variant="h4">
          Showing <Highlight>{portfolioItems.length.toString()}</Highlight> items with tag:{' '}
          <Chip
            label={tag}
            onDelete={() => router.push('/portfolio')}
            size="small"
            sx={{ borderColor: theme.colorPrimary, color: theme.colorPrimary, mr: 1 }}
            variant="outlined"
          />
        </Typography>
      )}

      {portfolioItems.map((item, index) => (
        <Stack
          key={index}
          bgcolor={theme.colorHighlight}
          direction="row"
          justifyContent="space-between"
          p={4}
          spacing={2}
        >
          <Stack spacing={2}>
            <Stack>
              <Stack alignItems="center" direction="row">
                <Typography variant="h3">{item.title}</Typography>

                {item.url && (
                  <IconButton
                    component="a"
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={item.title}
                    size="small"
                    sx={{ color: theme.colorPrimary, ml: 0.5 }}
                  >
                    <LinkIcon fontSize="small" />
                  </IconButton>
                )}
              </Stack>

              {item.subtitle && <Typography variant="h5">{item.subtitle}</Typography>}

              <Stack direction="row" py={1}>
                {item.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onClick={() => router.push(`/portfolio/tags/${tag}`)}
                    sx={{ borderColor: theme.colorPrimary, color: theme.colorPrimary, mr: 1 }}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Stack>

            <Stack>
              <Stack alignItems="center" direction="row">
                <Typography mr={1} variant="h4">
                  Role:
                </Typography>

                <Typography variant="h6">{item.role}</Typography>
              </Stack>

              <Stack alignItems="center" direction="row">
                <Typography mr={1} variant="h4">
                  Tools:
                </Typography>
                {item.tools.map((tool, index) => (
                  <Chip key={index} label={tool} icon={toolIcons[tool]} sx={{ mr: 1, px: 1 }} />
                ))}
              </Stack>
            </Stack>

            <Typography variant="h6">{item.description}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="flex-end" width="50%">
            {item.images.map((image, index) => (
              <Box
                key={index}
                bgcolor="transparent"
                border={0}
                component="button"
                display="inline-flex"
                height={300}
                m={1}
                onClick={() => setShowImage(image)}
                p={0}
                position="relative"
                sx={{ appearance: 'none', cursor: 'pointer' }}
                type="button"
                width={300}
              >
                <Image src={image} alt={item.title} layout="fill" objectFit="contain" />
              </Box>
            ))}
          </Stack>

          {showImage && (
            <Modal open={showImage} onClose={() => setShowImage(null)}>
              <Box width="100%" height="100%" p={4}>
                <Box height="100%" onClick={() => setShowImage(null)} position="relative" width="100%">
                  <Image alt={item.title} layout="fill" objectFit="contain" src={showImage} />
                </Box>
              </Box>
            </Modal>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default Portfolio;
