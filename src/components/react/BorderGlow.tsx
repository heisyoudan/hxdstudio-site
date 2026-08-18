import { useRef, type ReactNode, type CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  /** Glow radius in px */
  radius?: number;
  /** Glow accent color */
  color?: string;
}

/**
 * Wraps children in a 1px border that glows where the cursor is closest.
 * Uses radial-gradient + CSS mask to paint only the border edge.
 */
export default function BorderGlow({
  children,
  radius = 240,
  color = 'rgba(155,77,254,0.7)',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      className="bglow"
      onPointerMove={onMove}
      style={{ '--glow-r': `${radius}px`, '--glow-c': color } as CSSProperties}
    >
      {/* the animated border layer */}
      <div className="bglow-edge" aria-hidden="true" />
      {/* actual card content */}
      <div className="bglow-body">{children}</div>
    </div>
  );
}
