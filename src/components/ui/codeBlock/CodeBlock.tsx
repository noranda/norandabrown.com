import {createJavaScriptRegexEngine} from '@shikijs/engine-javascript';
import {useEffect, useState} from 'react';
import {createHighlighterCore, type HighlighterCore} from 'shiki/core';

let highlighterPromise: Promise<HighlighterCore> | null = null;

const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighterCore({
      engine: createJavaScriptRegexEngine(),
      langs: [import('@shikijs/langs/tsx')],
      themes: [import('@shikijs/themes/github-dark'), import('@shikijs/themes/github-light')],
    });
  }
  return highlighterPromise;
};

type CodeBlockProps = {
  code: string;
  lang?: string;
};

export const CodeBlock = ({code, lang = 'tsx'}: CodeBlockProps) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    let cancelled = false;

    getHighlighter().then((highlighter) => {
      if (cancelled) return;

      const result = highlighter.codeToHtml(code.trim(), {
        defaultColor: false,
        lang,
        themes: {
          dark: 'github-dark',
          light: 'github-light',
        },
      });

      setHtml(result);
    });

    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (!html) {
    return (
      <div className="rounded-lg bg-muted p-4">
        <div className="space-y-2">
          <div className="h-4 w-3/4 animate-pulse rounded bg-muted-foreground/20" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-muted-foreground/20" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted-foreground/20" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="shiki-wrapper max-h-[32rem] overflow-auto text-[13px] leading-relaxed [&_pre]:min-w-fit [&_pre]:p-4"
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
};
