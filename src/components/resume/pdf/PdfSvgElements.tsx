import {Circle, Defs, LinearGradient, Rect, Stop, Svg} from '@react-pdf/renderer';

import {brand, s} from './pdfStyles';

export const ContactBullet = () => (
  <Svg height={4} style={{marginRight: 6}} viewBox="0 0 4 4" width={4}>
    <Circle cx={2} cy={2} fill="#ffffff" r={1.5} />
  </Svg>
);

export const GradientBar = () => (
  <Svg height={2} style={{borderRadius: 1, marginBottom: 8, width: '100%'}} viewBox="0 0 400 2">
    <Defs>
      <LinearGradient id="bar" x1="0%" x2="100%" y1="0%" y2="0%">
        <Stop offset="0%" stopColor="#7c3aed" />
        <Stop offset="100%" stopColor="#e45a2e" />
      </LinearGradient>
    </Defs>
    <Rect fill="url(#bar)" height={2} rx={1} width={400} x={0} y={0} />
  </Svg>
);

export const HighlightBullet = () => (
  <Svg height={4} style={s.highlightBullet} viewBox="0 0 4 4" width={4}>
    <Circle cx={2} cy={2} fill={brand} r={1.5} />
  </Svg>
);
