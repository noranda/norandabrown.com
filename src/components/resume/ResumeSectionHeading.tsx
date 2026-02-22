import {type IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type ResumeSectionHeadingProps = {
  icon: IconDefinition;
  title: string;
};

export const ResumeSectionHeading = ({icon, title}: ResumeSectionHeadingProps) => (
  <div className="mb-6 flex items-center gap-3">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-accent text-sm text-brand-foreground">
      <FontAwesomeIcon icon={icon} />
    </div>
    <h2 className="font-display text-2xl">{title}</h2>
  </div>
);
