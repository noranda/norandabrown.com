import {useCallback, useEffect, useRef, useState} from 'react';
import {Button} from '@/components/ui/button';
import {TOUR_STEPS} from '@/data/tourSteps';
import {getStorageItem, setStorageItem} from '@/utils/localStorage';

const STORAGE_KEY = 'portfolio-tour-completed';
const SPOTLIGHT_PADDING = 8;

const positionElements = (
  step: number,
  maskRectRef: React.RefObject<SVGRectElement | null>,
  ringRef: React.RefObject<HTMLDivElement | null>,
  tooltipRef: React.RefObject<HTMLDivElement | null>
) => {
  const tourStep = TOUR_STEPS[step];

  if (!maskRectRef.current || !ringRef.current || !tooltipRef.current) return;

  // Centered steps: no spotlight, tooltip centered in viewport
  if (tourStep.centered) {
    maskRectRef.current.setAttribute('width', '0');
    maskRectRef.current.setAttribute('height', '0');
    ringRef.current.style.width = '0';
    ringRef.current.style.height = '0';

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    tooltipRef.current.style.top = `${(window.innerHeight - tooltipRect.height) / 2}px`;
    tooltipRef.current.style.left = `${(window.innerWidth - tooltipRect.width) / 2}px`;
    return;
  }

  const target = document.querySelector(`[data-tour="${tourStep.target}"]`);
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const spotLeft = rect.left - SPOTLIGHT_PADDING;
  const spotTop = rect.top - SPOTLIGHT_PADDING;
  const spotWidth = rect.width + SPOTLIGHT_PADDING * 2;
  const spotHeight = rect.height + SPOTLIGHT_PADDING * 2;

  // Position SVG mask cutout
  maskRectRef.current.setAttribute('x', String(spotLeft));
  maskRectRef.current.setAttribute('y', String(spotTop));
  maskRectRef.current.setAttribute('width', String(spotWidth));
  maskRectRef.current.setAttribute('height', String(spotHeight));

  // Position spotlight ring
  ringRef.current.style.left = `${spotLeft}px`;
  ringRef.current.style.top = `${spotTop}px`;
  ringRef.current.style.width = `${spotWidth}px`;
  ringRef.current.style.height = `${spotHeight}px`;

  // Position tooltip
  const tooltipRect = tooltipRef.current.getBoundingClientRect();
  let top: number;
  let left: number;

  if (tourStep.position === 'bottom') {
    top = spotTop + spotHeight + 12;
    left = spotLeft + spotWidth / 2 - tooltipRect.width / 2;
  } else if (tourStep.position === 'top') {
    top = spotTop - tooltipRect.height - 12;
    left = spotLeft + spotWidth / 2 - tooltipRect.width / 2;
  } else {
    top = spotTop + spotHeight / 2 - tooltipRect.height / 2;
    left = spotLeft - tooltipRect.width - 12;
  }

  // Clamp to viewport
  left = Math.max(16, Math.min(left, window.innerWidth - tooltipRect.width - 16));
  top = Math.max(16, Math.min(top, window.innerHeight - tooltipRect.height - 16));

  tooltipRef.current.style.top = `${top}px`;
  tooltipRef.current.style.left = `${left}px`;
};

export const ProductTour = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const maskRectRef = useRef<SVGRectElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Show tour only on first visit, desktop only
  useEffect(() => {
    const completed = getStorageItem(STORAGE_KEY, false);
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!completed && isDesktop) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Position elements when step changes or tour becomes visible
  useEffect(() => {
    if (!isVisible) return;

    // Wait a frame for DOM to update
    const raf = requestAnimationFrame(() => {
      positionElements(currentStep, maskRectRef, ringRef, tooltipRef);
    });

    return () => cancelAnimationFrame(raf);
  }, [currentStep, isVisible]);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    setStorageItem(STORAGE_KEY, true);
  }, []);

  const goNext = useCallback(() => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      dismiss();
    }
  }, [currentStep, dismiss]);

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  // Keyboard navigation
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismiss();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dismiss, goNext, goPrev, isVisible]);

  // Reposition on resize/scroll
  useEffect(() => {
    if (!isVisible) return;

    const reposition = () => {
      positionElements(currentStep, maskRectRef, ringRef, tooltipRef);
    };

    window.addEventListener('resize', reposition);
    window.addEventListener('scroll', reposition, true);
    return () => {
      window.removeEventListener('resize', reposition);
      window.removeEventListener('scroll', reposition, true);
    };
  }, [currentStep, isVisible]);

  if (!isVisible) return null;

  const step = TOUR_STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === TOUR_STEPS.length - 1;

  return (
    <div aria-label="Site tour" aria-modal="true" className="fixed inset-0 z-[200]" role="dialog">
      {/* Backdrop with spotlight cutout */}
      <svg className="absolute inset-0 h-full w-full" onClick={dismiss}>
        <defs>
          <mask id="tour-spotlight-mask">
            <rect fill="white" height="100%" width="100%" />
            <rect fill="black" height="0" ref={maskRectRef} rx="8" width="0" x="0" y="0" />
          </mask>
        </defs>
        <rect
          fill="rgba(0, 0, 0, 0.6)"
          height="100%"
          mask="url(#tour-spotlight-mask)"
          width="100%"
        />
      </svg>

      {/* Spotlight ring */}
      <div className="pointer-events-none absolute rounded-lg ring-2 ring-brand" ref={ringRef} />

      {/* Tooltip */}
      <div
        className="absolute w-80 rounded-xl border border-border bg-card p-5 shadow-2xl"
        ref={tooltipRef}
        role="status"
      >
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{step.title}</h3>
          <span className="text-xs text-muted-foreground">
            {currentStep + 1} / {TOUR_STEPS.length}
          </span>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{step.content}</p>
        <div className="flex items-center justify-between">
          <button
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            onClick={dismiss}
            type="button"
          >
            Skip tour
          </button>
          <div className="flex gap-2">
            {!isFirst && (
              <Button onClick={goPrev} size="sm" variant="outline">
                Back
              </Button>
            )}
            <Button onClick={goNext} size="sm" variant="gradient">
              {isLast ? 'Done' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
