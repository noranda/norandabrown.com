export const SCROLL_VIEWPORT = {margin: '-80px 0px 0px 0px', once: true} as const;

export const fadeUp = {
  hidden: {opacity: 0, y: 24},
  visible: (i: number) => ({
    opacity: 1,
    transition: {delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const},
    y: 0,
  }),
};

export const scrollFadeUp = {
  hidden: {opacity: 0, y: 40},
  visible: (i: number) => ({
    opacity: 1,
    transition: {delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const},
    y: 0,
  }),
};
