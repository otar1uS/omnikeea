'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));

    const tImmediate = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('in');
      });
    }, 50);

    // Safety net: anything still hidden after 1.2s gets revealed regardless.
    // Prevents content from disappearing forever if IntersectionObserver
    // misses an element (e.g. on client-side navigation timing edge cases).
    const tFallback = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
    }, 1200);

    const countEls = document.querySelectorAll<HTMLElement>('[data-count]');
    const animCount = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      const step = (now: number) => {
        const t2 = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t2, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (t2 < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const countIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animCount(e.target as HTMLElement);
            countIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    countEls.forEach((el) => countIo.observe(el));

    return () => {
      io.disconnect();
      countIo.disconnect();
      window.clearTimeout(tImmediate);
      window.clearTimeout(tFallback);
    };
  }, [pathname]);

  return null;
}
