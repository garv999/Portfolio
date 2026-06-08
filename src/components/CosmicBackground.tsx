import { motion, useReducedMotion } from 'framer-motion';

export default function LivingBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#dfe3e8]">
      <motion.div
        initial={{ scale: 1 }}
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.02, 1],
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 45, // Ultra-slow floating
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(
              circle at 20% 15%,
              rgba(230, 223, 210, 0.10),
              transparent 40%
            ),
            radial-gradient(
              circle at 80% 25%,
              rgba(145, 155, 170, 0.12),
              transparent 45%
            ),
            radial-gradient(
              circle at 50% 85%,
              rgba(80, 88, 98, 0.06),
              transparent 60%
            ),
            #dfe3e8
          `,
          filter: 'blur(80px)',
        }}
        className="absolute inset-[-20%] will-change-transform"
      />
    </div>
  );
}
