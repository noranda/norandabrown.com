import {describe, expect, it} from 'vitest';
import {extractStorySource} from './storySource';

const sampleSource = `import type {Meta, Story} from '@storybook/react';

const meta: Meta = {
  title: 'Button',
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Save',
    icon: 'check',
  },
};

export const Nested: Story = {
  args: {
    children: 'Complex',
    options: {
      nested: {
        deep: true,
      },
    },
  },
};`;

describe('extractStorySource', () => {
  it('extracts a simple story export', () => {
    const result = extractStorySource(sampleSource, 'Default');
    expect(result).toContain('export const Default: Story = {');
    expect(result).toContain("children: 'Click me'");
    expect(result).toContain('};');
  });

  it('extracts a different story export', () => {
    const result = extractStorySource(sampleSource, 'WithIcon');
    expect(result).toContain('export const WithIcon: Story = {');
    expect(result).toContain("children: 'Save'");
    expect(result).not.toContain("children: 'Click me'");
  });

  it('handles nested braces correctly', () => {
    const result = extractStorySource(sampleSource, 'Nested');
    expect(result).toContain('export const Nested: Story = {');
    expect(result).toContain('deep: true');
    expect(result).toContain('};');
    // Should include all closing braces
    const openBraces = (result.match(/{/g) || []).length;
    const closeBraces = (result.match(/}/g) || []).length;
    expect(openBraces).toBe(closeBraces);
  });

  it('returns empty string for non-existent export', () => {
    expect(extractStorySource(sampleSource, 'NonExistent')).toBe('');
  });

  it('returns empty string for empty source', () => {
    expect(extractStorySource('', 'Default')).toBe('');
  });

  it('returns empty string when marker exists but no opening brace', () => {
    const broken = 'export const Broken: Story = ';
    expect(extractStorySource(broken, 'Broken')).toBe('');
  });
});
