import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Dialog} from '@/components/ui/dialog';
import {type PlanetData, type SunData} from '@/data/about';

type PlanetCardProps = {
  onClose: () => void;
  open: boolean;
  planet: PlanetData | null;
  sun: SunData;
};

export const PlanetCard = ({onClose, open, planet, sun}: PlanetCardProps) => (
  <Dialog onOpenChange={(isOpen) => !isOpen && onClose()} open={open}>
    <Dialog.Content
      className="max-w-md"
      style={planet ? {borderTopColor: planet.color, borderTopWidth: 3} : undefined}
    >
      {planet ? (
        <>
          <Dialog.Header>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                style={{backgroundColor: planet.color}}
              >
                <FontAwesomeIcon icon={planet.icon} />
              </div>
              <Dialog.Title className="font-display text-xl">{planet.label}</Dialog.Title>
            </div>
            <Dialog.Description>{planet.description}</Dialog.Description>
          </Dialog.Header>
          <ul className="space-y-1.5">
            {planet.highlights.map((h) => (
              <li className="flex items-start gap-2 text-sm text-muted-foreground" key={h}>
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{backgroundColor: planet.color}}
                />
                {h}
              </li>
            ))}
          </ul>
          <Dialog.Footer showCloseButton />
        </>
      ) : (
        <>
          <Dialog.Header>
            <Dialog.Title className="font-display text-xl">{sun.label}</Dialog.Title>
            <Dialog.Description>{sun.bio}</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer showCloseButton />
        </>
      )}
    </Dialog.Content>
  </Dialog>
);
