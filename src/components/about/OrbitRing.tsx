type OrbitRingProps = {
  centerX: number;
  centerY: number;
  radius: number;
};

export const OrbitRing = ({centerX, centerY, radius}: OrbitRingProps) => (
  <circle
    cx={centerX}
    cy={centerY}
    fill="none"
    r={radius}
    stroke="currentColor"
    strokeDasharray="4 6"
    strokeOpacity={0.4}
    strokeWidth={1}
  />
);
