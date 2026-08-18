import { useEffect, useState, type CSSProperties } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

function randomGlyph(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** ms to wait before the scramble begins */
  delay?: number;
  /** ms per frame — one more character settles each frame */
  speed?: number;
}

/**
 * Renders `text`, then on mount scrambles the characters
 * and decodes them back, left to right.
 *
 * SSR-safe: the first render is the real text, so there is
 * no hydration mismatch and search engines see the copy.
 */
export default function ScrambleText({
  text,
  className,
  delay = 400,
  speed = 48,
}: ScrambleTextProps) {
  const [chars, setChars] = useState<string[]>(() => text.split(''));

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setChars(text.split(''));
      return;
    }

    const target = text.split('');
    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;

    // First paint shows the real text; scramble it, then decode.
    setChars(target.map((c) => (c === ' ' ? ' ' : randomGlyph())));

    const start = setTimeout(() => {
      timer = setInterval(() => {
        frame += 1;
        const settled = frame; // one more character locks per frame
        setChars(
          target.map((c, i) => {
            if (c === ' ') return ' ';
            if (i < settled) return c;
            return randomGlyph();
          }),
        );
        if (settled >= target.length) {
          clearInterval(timer);
          setChars(target);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [text, delay, speed]);

  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={i}
          className="ch"
          style={{ '--i': i } as CSSProperties}
          aria-hidden="true"
        >
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  );
}
