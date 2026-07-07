import { useEffect, useRef, useState } from "react";

export function useCountScramble(
  target: number,
  duration: number = 800,
  decimals: number = 0,
) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const maxValue = target === 0 ? 100 : target * 1.5;

        const tick = (now: number) => {
          const elapsed = now - start;

          if (elapsed >= duration) {
            setCount(target);
            return;
          }

          if (Math.floor(elapsed / 20) !== Math.floor((elapsed - 16) / 20)) {
            const randomValue = Math.random() * maxValue;
            setCount(parseFloat(randomValue.toFixed(decimals)));
          }

          requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.7 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return { count, ref };
}
