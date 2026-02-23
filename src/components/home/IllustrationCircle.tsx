import {useState} from 'react';
import {twJoin} from 'tailwind-merge';

const SPARKLE_COUNT = 16;

export const IllustrationCircle = () => {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      aria-label={tapped ? 'Deactivate photo animation' : 'Activate photo animation'}
      className={twJoin(
        'photo-circle relative flex h-[280px] w-[280px] shrink-0 cursor-pointer items-center justify-center sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]',
        tapped && 'photo-tapped'
      )}
      onClick={() => setTapped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setTapped((prev) => !prev);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="photo-ring aspect-square h-full rounded-full" style={{zIndex: 1}}>
        <div className="photo-shine h-full w-full overflow-hidden rounded-full">
          <img
            alt="Noranda Brown"
            className="photo-default h-[200%] w-full object-cover object-[center_-93px] sm:object-[center_-113px] md:object-[center_-140px]"
            fetchPriority="high"
            src="/noranda-brown.webp"
          />
          <img
            alt="Noranda Brown waving"
            className="photo-hover h-[200%] w-full object-cover object-[center_-93px] sm:object-[center_-113px] md:object-[center_-140px]"
            src="/noranda-brown-wave.webp"
          />
        </div>
      </div>
      {/* Sparkles */}
      <div className="sparkle-container">
        {Array.from({length: SPARKLE_COUNT}, (_, i) => (
          <div className="sparkle" key={i} />
        ))}
      </div>
    </div>
  );
};
