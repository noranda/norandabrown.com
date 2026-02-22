import {Font, StyleSheet} from '@react-pdf/renderer';

// react-pdf cannot use CSS custom properties, so colors are hardcoded here
export const brand = '#7c3aed';
const bgMuted = '#f5f5f5';
const borderColor = '#e5e5e5';
const textPrimary = '#1a1a1a';
const textSecondary = '#525252';

export const PAGE_H = 792;
export const SIDEBAR_W = 165;

Font.register({
  family: 'Figtree',
  fonts: [
    {
      fontWeight: 400,
      src: 'https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_d_QF5e.ttf',
    },
    {
      fontWeight: 600,
      src: 'https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_ehR15e.ttf',
    },
    {
      fontWeight: 700,
      src: 'https://fonts.gstatic.com/s/figtree/v9/_Xmz-HUzqDCFdgfMsYiV_F7wfS-Bs_eYR15e.ttf',
    },
  ],
});

export const s = StyleSheet.create({
  badge: {
    backgroundColor: bgMuted,
    borderRadius: 3,
    color: textSecondary,
    fontSize: 7.5,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
    marginTop: 2,
  },
  contactItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 3,
  },
  contactLink: {
    color: '#ffffff',
    fontSize: 8,
    textDecoration: 'none',
  },
  currentPill: {
    backgroundColor: '#dcfce7',
    borderRadius: 3,
    color: '#166534',
    fontSize: 7,
    fontWeight: 600,
    marginLeft: 4,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  description: {
    color: textSecondary,
    fontSize: 8.5,
    lineHeight: 1.4,
    marginBottom: 2,
  },
  divider: {
    backgroundColor: borderColor,
    height: 0.5,
    marginBottom: 6,
    marginTop: 2,
  },
  easterEgg: {
    bottom: 12,
    color: 'rgba(255,255,255,0.2)',
    fontSize: 7.5,
    left: 16,
    position: 'absolute',
  },
  eduDegree: {
    color: '#ffffff',
    fontSize: 7.5,
    lineHeight: 1.3,
  },
  eduSchool: {
    color: '#ffffff',
    fontSize: 8.5,
    fontWeight: 600,
  },
  eduYears: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 7.5,
    marginBottom: 4,
  },
  highlight: {
    color: textPrimary,
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.4,
  },
  highlightBullet: {
    marginRight: 5,
    marginTop: 3,
  },
  highlightRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 1,
    paddingLeft: 2,
  },
  jobCompany: {
    color: brand,
    fontSize: 8.5,
    fontWeight: 600,
  },
  jobDates: {
    color: textSecondary,
    fontSize: 8,
  },
  jobEntry: {
    marginBottom: 14,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  jobRoleRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  jobRoleText: {
    fontSize: 9.5,
    fontWeight: 600,
  },
  main: {
    flex: 1,
    padding: 24,
    paddingLeft: 20,
    paddingRight: 28,
  },
  page: {
    flexDirection: 'row',
    fontFamily: 'Figtree',
    fontSize: 9,
    lineHeight: 1.4,
  },
  photo: {
    alignSelf: 'center',
    borderRadius: 30,
    height: 120,
    marginBottom: 10,
    width: 120,
  },
  sectionTitle: {
    borderBottomColor: borderColor,
    borderBottomWidth: 0.5,
    color: textPrimary,
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 5,
    paddingBottom: 2,
    textTransform: 'uppercase',
  },
  sidebar: {
    height: '100%',
    position: 'relative',
    width: SIDEBAR_W,
  },
  sidebarBg: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: SIDEBAR_W,
  },
  sidebarContent: {
    height: '100%',
    padding: 16,
    paddingTop: 24,
    position: 'relative',
  },
  sidebarDivider: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    height: 0.5,
    marginBottom: 8,
    marginTop: 2,
  },
  sidebarName: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: 2,
  },
  sidebarSectionTitle: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  sidebarTitle: {
    color: '#ffffff',
    fontSize: 9,
    marginBottom: 10,
  },
  skillCategory: {
    color: '#ffffff',
    fontSize: 7.5,
    fontWeight: 600,
    marginBottom: 2,
    marginTop: 3,
    textTransform: 'uppercase',
  },
  skillPill: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 6,
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 600,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
  },
  skillPillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2,
  },
  skillText: {
    color: '#ffffff',
    fontSize: 8,
    lineHeight: 1.4,
    marginTop: 1,
  },
  summary: {
    color: textSecondary,
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 6,
  },
  tldr: {
    flexDirection: 'row',
    marginTop: 'auto',
  },
  tldrBar: {
    backgroundColor: brand,
    borderRadius: 2,
    marginRight: 10,
    width: 6,
  },
  tldrBullet: {
    color: brand,
    fontSize: 7,
    width: 8,
  },
  tldrContent: {
    flex: 1,
  },
  tldrItem: {
    color: textPrimary,
    flex: 1,
    fontSize: 7,
    lineHeight: 1.4,
  },
  tldrRow: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  tldrTitle: {
    color: brand,
    fontSize: 7,
    fontWeight: 700,
    letterSpacing: 0.5,
    marginBottom: 3,
    textTransform: 'uppercase',
  },
});
