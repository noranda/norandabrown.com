import {useCallback, useRef, useState} from 'react';

const RESET_DELAY_MS = 2000;

export const useCopyToClipboard = (resetDelay = RESET_DELAY_MS) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copyToClipboard = useCallback(
    async (text: string) => {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
    },
    [resetDelay]
  );

  return {copied, copyToClipboard};
};
