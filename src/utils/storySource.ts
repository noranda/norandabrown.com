/**
 * Extracts a single named story export from a raw Storybook source file.
 * Uses brace-counting to find the balanced end of the story object.
 */
export const extractStorySource = (rawSource: string, storyExport: string): string => {
  const marker = `export const ${storyExport}: Story = `;
  const startIdx = rawSource.indexOf(marker);
  if (startIdx === -1) return '';

  const braceStart = rawSource.indexOf('{', startIdx + marker.length);
  if (braceStart === -1) return '';

  let depth = 0;
  for (let i = braceStart; i < rawSource.length; i++) {
    if (rawSource[i] === '{') depth++;
    else if (rawSource[i] === '}') {
      depth--;
      if (depth === 0) {
        const end = rawSource[i + 1] === ';' ? i + 2 : i + 1;
        return rawSource.slice(startIdx, end);
      }
    }
  }

  return '';
};
