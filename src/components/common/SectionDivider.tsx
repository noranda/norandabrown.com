type SectionDividerProps = {
  label: string;
};

export const SectionDivider = ({label}: SectionDividerProps) => (
  <div className="flex items-center gap-4 pt-4">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
    <span className="text-base font-medium text-muted-foreground">{label}</span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
  </div>
);
