/**
 * Shared Framer Motion animation variants.
 * Define once, import everywhere — eliminates duplication across components.
 */
import type { Variants } from "framer-motion";

/** Standard entrance: fade in + slide up. Used for most section content. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

/** Hero-specific: slightly faster, tighter y travel. */
export const fadeUpHero: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

/** Container: staggers its children with a standard 0.1s increment. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/** Hero container: delayed start to allow the page to paint first. */
export const staggerContainerHero: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/** Standard whileInView viewport config — fire once, trigger at 20% visibility. */
export const viewportOnce = { once: true, amount: 0.2 } as const;
