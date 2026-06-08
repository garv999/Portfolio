import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[10000] bg-[#FAFAF7] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-gray-900 tracking-tighter mb-10"
        >
          GARV.
        </motion.h1>
        <div className="w-64 h-[2px] bg-gray-100 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-600"
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mt-6 text-center"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
}

export function ModernCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      const card = target.closest('.premium-card-hover');
      const marqueeItem = target.closest('.marquee-item');
      
      if (link) {
        setIsHovering(true);
        setCursorType('link');
      } else if (card) {
        setIsHovering(true);
        setCursorType('card');
      } else if (marqueeItem) {
        setIsHovering(true);
        setCursorType('marquee');
      } else {
        setIsHovering(false);
        setCursorType('default');
      }
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-12 h-12 bg-blue-500/20 rounded-full pointer-events-none z-[9999] blur-2xl hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          scale: cursorType === 'marquee' ? 3.5 : isHovering ? 2.5 : 1,
        }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(59,130,246,0.4)] hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          scale: cursorType === 'link' ? 6 : cursorType === 'marquee' ? 2 : cursorType === 'card' ? 3 : isClicking ? 0.8 : 1,
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-blue-500 rounded-full blur-[1px]"
          animate={{ opacity: cursorType === 'marquee' ? 0.8 : isHovering ? 0.5 : 0 }}
        />
      </motion.div>
    </>
  );
}

export function PremiumCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const spotlightBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([mx, my]) => `radial-gradient(400px circle at ${(mx as number) * 100 + 50}% ${(my as number) * 100 + 50}%, rgba(59, 130, 246, 0.08), transparent)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ 
        y: -8, 
        rotate: 1,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      className={`relative group bg-gradient-to-b from-white/98 to-[#F8F9FC]/98 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.02)] hover:shadow-[0_32px_64px_rgba(59,130,246,0.1)] transition-all duration-700 premium-card-hover ${className}`}
    >
      <motion.div 
        className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ background: spotlightBackground }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-24 px-4 md:px-0">
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-block text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <div>
        <motion.h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9] text-balance">
          {title.split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom py-1 -my-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ delay: i * 0.02, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block will-change-transform"
                style={{ backfaceVisibility: "hidden" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </motion.h2>
      </div>
    </div>
  );
}

export function FloatingChip({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) / 3);
    y.set((e.clientY - (rect.top + rect.height / 2)) / 3);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        backgroundColor: "#fff", 
        boxShadow: "0 15px 40px rgba(59,130,246,0.1)",
        borderColor: "rgba(59,130,246,0.2)"
      }}
      className="px-8 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl text-[11px] font-black uppercase tracking-widest text-gray-900 transition-all cursor-default relative overflow-hidden"
    >
      <div className="relative z-10">{children}</div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full"
        whileHover={{ x: '200%' }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
    >
      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">Scroll</span>
      <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600/50 to-transparent relative overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,1)]"
        />
      </div>
    </motion.div>
  );
}

export function StatCounter({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          setIsFinished(true);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      ref={ref} 
      animate={isFinished ? { scale: 1.1 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className="text-center"
    >
      <div className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4">
        {count}{suffix}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
        {label}
      </div>
    </motion.div>
  );
}

export function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      x.set(middleX * 0.3);
      y.set(middleY * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return React.cloneElement(children, {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: xSpring, y: ySpring, position: 'relative' },
  });
}
