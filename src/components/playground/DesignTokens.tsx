import {faCopy} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toast} from 'sonner';
import {twJoin} from 'tailwind-merge';

import {
  COLOR_GROUPS,
  DESIGN_TOKEN_SECTIONS,
  FONT_FAMILIES,
  FONT_SIZES,
  SPACING_SCALE,
  type DesignTokenSection,
} from '@/data/designTokens';
import {useTheme} from '@/hooks/useTheme';

const copyToClipboard = (text: string, label: string) => {
  navigator.clipboard.writeText(text);
  toast.success(`Copied ${label}`);
};

const TokenSectionWrapper = ({
  children,
  section,
}: {
  children: React.ReactNode;
  section: DesignTokenSection;
}) => (
  <section className="scroll-mt-24 space-y-6" id={section.id}>
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-accent text-brand-foreground">
          <FontAwesomeIcon icon={section.icon} />
        </div>
        <h3 className="font-display text-2xl">{section.name}</h3>
      </div>
      <p className="text-muted-foreground">{section.description}</p>
    </div>
    <div className="space-y-8">{children}</div>
  </section>
);

const ColorSwatch = ({
  darkValue,
  lightValue,
  name,
  variable,
}: {
  darkValue: string;
  lightValue: string;
  name: string;
  variable: string;
}) => {
  const {theme} = useTheme();

  return (
    <button
      className="group flex w-full items-center gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={() => copyToClipboard(`var(${variable})`, variable)}
      type="button"
    >
      <div
        className="h-12 w-12 shrink-0 rounded-md border border-border"
        style={{backgroundColor: `var(${variable})`}}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-medium">{name}</span>
          <FontAwesomeIcon
            className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
            icon={faCopy}
            size="sm"
          />
        </div>
        <span className="block truncate text-base text-muted-foreground">
          {theme === 'dark' ? darkValue : lightValue}
        </span>
      </div>
    </button>
  );
};

export const ColorsSection = () => {
  const section = DESIGN_TOKEN_SECTIONS.find((s) => s.id === 'colors')!;

  return (
    <TokenSectionWrapper section={section}>
      {COLOR_GROUPS.map((group) => (
        <div className="space-y-3" key={group.name}>
          <h4 className="text-base font-medium text-muted-foreground">{group.name}</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.colors.map((color) => (
              <ColorSwatch
                darkValue={color.darkValue}
                key={color.variable}
                lightValue={color.lightValue}
                name={color.name}
                variable={color.variable}
              />
            ))}
          </div>
        </div>
      ))}
    </TokenSectionWrapper>
  );
};

export const TypographySection = () => {
  const section = DESIGN_TOKEN_SECTIONS.find((s) => s.id === 'typography')!;

  return (
    <TokenSectionWrapper section={section}>
      {/* Font Families */}
      <div className="space-y-6">
        <h4 className="text-base font-medium text-muted-foreground">Font Families</h4>
        {FONT_FAMILIES.map((font) => (
          <button
            className="group block w-full rounded-lg border border-border p-4 text-left transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            key={font.variable}
            onClick={() => copyToClipboard(font.className, font.name)}
            type="button"
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-medium">{font.name}</span>
              <span className="text-base text-muted-foreground">({font.className})</span>
              <FontAwesomeIcon
                className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                icon={faCopy}
                size="sm"
              />
            </div>
            <p className={twJoin('mt-2 text-2xl', font.className)}>{font.sample}</p>
          </button>
        ))}
      </div>

      {/* Font Sizes */}
      <div className="space-y-4">
        <h4 className="text-base font-medium text-muted-foreground">Font Scale</h4>
        <div className="space-y-3">
          {FONT_SIZES.map((size) => (
            <button
              className="group flex w-full items-baseline gap-4 rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              key={size.label}
              onClick={() => copyToClipboard(size.label, size.label)}
              type="button"
            >
              <div className="flex w-28 shrink-0 items-center gap-2">
                <span className="text-base font-medium">{size.label}</span>
                <FontAwesomeIcon
                  className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  icon={faCopy}
                  size="sm"
                />
              </div>
              <span className="w-16 shrink-0 text-base text-muted-foreground">{size.pixels}</span>
              <span className={twJoin('truncate', size.className)}>Aa</span>
            </button>
          ))}
        </div>
      </div>
    </TokenSectionWrapper>
  );
};

export const SpacingSection = () => {
  const section = DESIGN_TOKEN_SECTIONS.find((s) => s.id === 'spacing')!;
  const maxPixels = SPACING_SCALE[SPACING_SCALE.length - 1].pixels;

  return (
    <TokenSectionWrapper section={section}>
      <div className="space-y-3">
        {SPACING_SCALE.map((space) => (
          <button
            className="group flex w-full items-center gap-4 rounded-lg border border-border p-3 text-left transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            key={space.label}
            onClick={() => copyToClipboard(space.tailwind, `spacing ${space.tailwind}`)}
            type="button"
          >
            <div className="flex w-20 shrink-0 items-center gap-2">
              <span className="text-base font-medium">{space.label}</span>
              <FontAwesomeIcon
                className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                icon={faCopy}
                size="sm"
              />
            </div>
            <span className="w-16 shrink-0 text-base text-muted-foreground">{space.pixels}px</span>
            <div className="flex-1">
              <div
                className="h-6 rounded bg-gradient-to-r from-brand to-brand-accent"
                style={{width: `${(space.pixels / maxPixels) * 100}%`}}
              />
            </div>
          </button>
        ))}
      </div>
    </TokenSectionWrapper>
  );
};
