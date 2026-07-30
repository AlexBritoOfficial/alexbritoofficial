"use client";

import { motion, useReducedMotion } from "motion/react";

// PORT-14: page transition. template.tsx remounts on each navigation, so this
// fade+rise plays on every route change. Reduced-motion users get no animation
// (and content is never hidden pre-hydration for them).
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}