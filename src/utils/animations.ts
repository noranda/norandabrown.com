export const fadeUp = {
  hidden: {opacity: 0, y: 24},
  visible: (i: number) => ({
    opacity: 1,
    transition: {delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const},
    y: 0,
  }),
};
