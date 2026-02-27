import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {useTheme} from '@/hooks/useTheme';
import {ThemeProvider} from './ThemeProvider';

const mockMatchMedia = (matches = false) => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: matches && query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  });
};

const TestConsumer = () => {
  const {isVoidMode, theme, toggleTheme, toggleVoidMode} = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="void">{String(isVoidMode)}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleVoidMode}>Toggle Void</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    mockMatchMedia(false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('defaults to light theme when no preference', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('reads saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('respects system dark mode preference', () => {
    mockMatchMedia(true);

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
  });

  it('toggles theme from light to dark', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
    await user.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('toggles theme from dark to light', async () => {
    localStorage.setItem('theme', 'dark');
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('dark');
    await user.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('applies dark class to document element', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    await user.click(screen.getByText('Toggle Theme'));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles void mode', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('void').textContent).toBe('false');
    await user.click(screen.getByText('Toggle Void'));
    expect(screen.getByTestId('void').textContent).toBe('true');
    await user.click(screen.getByText('Toggle Void'));
    expect(screen.getByTestId('void').textContent).toBe('false');
  });

  it('disables void mode when switching to light theme', async () => {
    localStorage.setItem('theme', 'dark');
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Toggle Void'));
    expect(screen.getByTestId('void').textContent).toBe('true');

    await user.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('theme').textContent).toBe('light');
    expect(screen.getByTestId('void').textContent).toBe('false');
  });
});

describe('useTheme', () => {
  it('throws when used outside ThemeProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestConsumer />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
    spy.mockRestore();
  });
});
