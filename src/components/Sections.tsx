import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Linkedin, Github, Award, ChevronRight, ArrowUpRight, Code, Cpu, Mail, Download, Globe, Layers, Database, Sparkles, Menu, X } from 'lucide-react';
import { PremiumCard, SectionHeader, FloatingChip, ScrollIndicator, Magnetic, StatCounter } from './UIElements';

import electricityBillImg from '../assets/electricity-bill.png';
import ecommerceDashboardImg from '../assets/ecommerce-dashboard.png';
import linkedinDashboardImg from '../assets/linkedin-dashboard.png';
import cypherSecurityImg from '../assets/cypher-security.png';

export function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 20]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed top-0 w-full z-50 transition-all duration-300"
      >
        <motion.div 
          style={{ opacity, backdropFilter: `blur(${blur}px)` }}
          className="absolute inset-0 bg-white/60 border-b border-black/[0.03]" 
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex justify-between items-center relative">
          <motion.h1 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="text-xl font-black text-gray-900 tracking-tighter z-50"
          >
            GARV AGARWAL
          </motion.h1>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
            {['About', 'Projects', 'Experience', 'Education'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-600 transition-colors relative group overflow-hidden"
              >
                {item}
                <motion.span className="absolute bottom-0 left-0 w-0 h-px bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
            <Magnetic>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-gray-950 text-white hover:bg-blue-600 transition-all duration-500 rounded-full shadow-2xl hover:shadow-blue-500/20"
              >
                Hire Me
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="text-4xl font-black text-gray-900 uppercase tracking-tighter"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AiCore() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - clientX - 320) / 20;
    const y = (e.clientY - clientY - 320) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full h-full flex items-center justify-center scale-125"
    >
      <motion.div 
        style={{ x: smoothX, y: smoothY, rotate: 0 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[35rem] h-[35rem] border border-blue-500/10 rounded-full shadow-[inset_0_0_50px_rgba(59,130,246,0.05)]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[28rem] h-[28rem] border border-purple-500/10 rounded-full"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[20rem] h-[20rem] border border-blue-500/20 rounded-full"
        />

        <div className="relative w-80 h-80 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[100px]"
          />
          
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: 360
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
            className="relative z-10 w-32 h-32 bg-white border border-gray-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
            <Cpu size={48} className="text-blue-600 relative z-10" />
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -skew-x-12"
            />
          </motion.div>

          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x = Math.cos(angle) * 160;
            const y = Math.sin(angle) * 160;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1, 
                  x, y,
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ 
                  delay: 1.8 + i * 0.1, 
                  duration: 4,
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-4 h-4 bg-white border border-blue-100 rounded-full shadow-lg"
              >
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                <svg className="absolute top-1/2 left-1/2 w-80 h-80 overflow-visible -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                  <motion.line 
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    x1="160" y1="160" x2={160 - x} y2={160 - y} stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="4 4"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                  </motion.line>
                  <defs>
                    <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 flex flex-col justify-center relative">
      <div className="mx-auto w-full grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 shadow-sm"
          >
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />
            Innovating Data, AI & Automation
          </motion.div>
          
          <div className="mb-10 md:mb-14">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-[10rem] font-black text-gray-900 leading-[0.85] tracking-tighter uppercase"
            >
              I AM <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                {"GARV".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2 + i * 0.1, duration: 0.5 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="text-lg md:text-2xl text-gray-400 max-w-xl mb-12 md:mb-16 leading-relaxed font-medium"
          >
            Building intelligent systems that transform business operations through <span className="text-gray-900">Data Science</span>, <span className="text-gray-900">AI Automation</span>, and <span className="text-gray-900">ERP Engineering</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="flex flex-wrap gap-6 md:gap-8"
          >
            <Magnetic>
              <motion.a
                href="https://drive.google.com/file/d/1zgPLy5_f4LvB29OFoZGlQazRRH082qDy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="px-8 py-4 md:px-12 md:py-6 bg-gray-950 text-white font-black uppercase tracking-widest rounded-[2rem] flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-blue-500/20 transition-all duration-500 text-xs md:text-base"
              >
                Resume <Download size={16} className="md:w-5 md:h-5" />
              </motion.a>
            </Magnetic>
            <div className="flex items-center gap-6 md:gap-10">
              {[
                { icon: <Github className="w-6 h-6 md:w-8 md:h-8" />, href: "https://github.com/garv999" },
                { icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8" />, href: "https://www.linkedin.com/in/garv-agarwal-0273161b9" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2 + i * 0.2, type: "spring" }}
                  whileHover={{ rotate: i === 0 ? 15 : -15, scale: 1.2, color: i === 1 ? '#2563eb' : '#111827' }} 
                  className="text-gray-400 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          style={{ y }} 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <motion.div 
              animate={{ scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[80px]"
            />
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.05, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-[20rem] h-[20rem] border border-blue-400 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [0.05, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 3 }}
              className="absolute w-[20rem] h-[20rem] border border-purple-400 rounded-full"
            />
          </div>
          <AiCore />
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-10">
      <div className="mx-auto w-full" ref={ref}>
        <SectionHeader title="The Architect of Data & Automation." subtitle="About" />
        
        <div className="grid lg:grid-cols-2 gap-20 md:gap-40 mb-24 md:mb-40">
          <div className="space-y-10 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-3xl md:text-5xl text-gray-900 font-light leading-[1.2] md:leading-[1.1] mb-8 md:mb-12">
                I am <span className="font-black border-b-2 md:border-b-4 border-blue-100">Garv Agarwal</span>, a final-year Computer Science student specializing in Data Science at Bennett University.
              </p>
              <p className="text-lg md:text-2xl text-gray-500 leading-relaxed font-medium">
                I build AI-powered automation systems, data-driven products, and enterprise integrations that simplify complex workflows. My experience spans Python development, ERPNext customization, machine learning, and intelligent data pipelines.
              </p>
            </motion.div>
          </div>
          
          <div className="space-y-8 md:space-y-12">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 md:mb-10">CORE IMPACT</h3>
            {[
              { company: "Incirco Ventures", desc: "Customized and deployed ERPNext and Frappe solutions for enterprise clients, integrating EasyEcom workflows and automating sales and logistics operations." },
              { company: "Biosarthi", desc: "Designed and deployed an AI-powered electricity bill processing pipeline using n8n, OpenRouter, and ERPNext, improving workflow efficiency by over 80%." },
              { company: "Fierynet Technology", desc: "Developed machine learning models and business intelligence dashboards to convert raw data into actionable insights." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-10 bg-white/40 border border-gray-100 rounded-[2rem] md:rounded-[3rem] hover:bg-white transition-all duration-700 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="flex gap-6 md:gap-8">
                  <div className="w-1 h-12 bg-gray-100 group-hover:bg-blue-600 transition-colors shrink-0 rounded-full" />
                  <div>
                    <h4 className="text-gray-900 font-black uppercase tracking-widest mb-3 md:mb-4 text-xs md:text-sm">{item.company}</h4>
                    <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 py-12 md:py-20 border-y border-gray-100 relative">
          <StatCounter end={3} label="Industry Internships" suffix="+" />
          <div className="hidden lg:block absolute left-1/4 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100/50" />
          <StatCounter end={10} label="Projects Built" suffix="+" />
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100/50" />
          <StatCounter end={80} label="Workflow Efficiency" suffix="%" />
          <div className="hidden lg:block absolute left-3/4 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100/50" />
          <StatCounter end={1000} label="Jobs Analyzed" suffix="+" />
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  const stack = ['Python', 'SQL', 'ERPNext', 'Frappe', 'n8n', 'Power BI', 'Tableau', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Git', 'GitHub', 'VS Code', 'Jira', 'Notion'];
  
  return (
    <section className="py-40 px-10">
      <div className="mx-auto w-full">
        <SectionHeader title="Tech Stack" subtitle="Capabilities" />
        <div className="flex flex-wrap gap-6">
          {stack.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              <FloatingChip>{item}</FloatingChip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - clientX);
    mouseY.set(e.clientY - clientY);
  };

  const projects = [
    {
      title: "Electricity Bill AI Automation",
      desc: "An end-to-end AI automation platform that extracts, analyzes, and stores electricity bill insights from PDFs, Excel files, and images.",
      stack: "Python • ERPNext • n8n • OpenRouter AI • PDF.co",
      features: ["Automated document extraction", "AI-powered bill analysis", "Workflow automation"],
      icon: <Cpu size={48} />,
      github: "https://github.com/garv999/electricity-bill-insights",
      color: "#3b82f6",
      image: electricityBillImg,
      position: "center"
    },
    {
      title: "E-Commerce Product Analytics",
      desc: "Interactive analytics dashboard for monitoring sales performance, customer behavior, and revenue growth.",
      stack: "Python • SQL • Pandas • Streamlit",
      features: ["RFM Segmentation", "Cohort Analysis", "Business Dashboard"],
      live: "https://ecommerce-product-analytics.vercel.app/",
      icon: <Layers size={48} />,
      github: "https://github.com/garv999/ecommerce-product-analytics",
      color: "#8b5cf6",
      image: ecommerceDashboardImg,
      position: "center"
    },
    {
      title: "LinkedIn Job Dashboard",
      desc: "Real-time dashboard analyzing over 1000 job postings for Data Analyst and Data Scientist roles.",
      stack: "Python • Pandas • Streamlit",
      features: ["Market trend analysis", "Skill demand visualization", "Public deployment"],
      live: "https://linkedin-job-analysis-happ5gh6brnnuiraz75zbgo.streamlit.app/",
      icon: <Globe size={48} />,
      github: "https://github.com/garv999/linkedin-job-analysis",
      color: "#14b8a6",
      image: linkedinDashboardImg,
      position: "85% center"
    },
    {
      title: "Cypher Securities",
      desc: "A high-security encryption suite implementing AES and RSA cryptography for secure file protection.",
      stack: "Python • AES • RSA • Cryptography",
      features: ["AES File Encryption", "RSA Key Generation", "Digital Signatures"],
      icon: <Code size={48} />,
      github: "https://github.com/garv999/Cypher-Securities",
      color: "#3b82f6",
      image: cypherSecurityImg,
      position: "center"
    }
  ];

  return (
    <section id="projects" className="py-40 px-6 md:px-10 relative" onMouseMove={handleMouseMove} onMouseLeave={() => {mouseX.set(0); mouseY.set(0);}}>
      <motion.div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.04), transparent 80%)`
          )
        }}
      />
      <div className="mx-auto w-full relative z-10">
        <SectionHeader title="Projects" subtitle="Innovation" />
        <div className="grid lg:grid-cols-2 gap-20">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <PremiumCard className="group h-full flex flex-col overflow-hidden">
                <div className="relative h-64 -mx-10 -mt-10 mb-10 bg-gray-50 overflow-hidden">
                  <div className="relative h-full w-full overflow-hidden rounded-t-[inherit]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.04] will-change-transform"
                      style={{ objectPosition: p.position }}
                    />
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0) 40%, rgba(255,255,255,0.02) 100%)'
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between mb-10">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                    className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-inner"
                  >
                    {p.icon}
                  </motion.div>
                  <div className="flex gap-4">
                    {p.live && (
                      <motion.a href={p.live} target="_blank" whileHover={{ scale: 1.1, translateY: -5 }} className="w-12 h-12 bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-sm">
                        <ArrowUpRight size={20} />
                      </motion.a>
                    )}
                    <motion.a href={p.github} target="_blank" whileHover={{ scale: 1.1, translateY: -5, rotate: 10 }} className="w-12 h-12 bg-gray-50 text-gray-400 hover:text-gray-950 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-sm">
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-6 group-hover:translate-x-3 transition-transform duration-700">{p.title}</h3>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium flex-grow">{p.desc}</p>
                <div className="text-blue-600 font-black text-[9px] uppercase tracking-[0.4em] mb-12">{p.stack}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {p.features.map((f, j) => (
                    <motion.div 
                      key={j} 
                      whileHover={{ x: 5 }}
                      className="px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-3 transition-all"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-blue-600 transition-colors" /> {f}
                    </motion.div>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechMarquee() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const items = ['Python', 'SQL', 'ERPNext', 'Frappe', 'n8n', 'GPT', 'Streamlit', 'Tableau', 'Power BI', 'TensorFlow', 'Git', 'GitHub'];
  const allItems = [...items, ...items];

  return (
    <div className="py-20 border-y border-gray-100 overflow-hidden flex whitespace-nowrap bg-white/30 backdrop-blur-sm relative z-20">
      <motion.div 
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center px-10"
      >
        {allItems.map((item, i) => {
          const isHovered = hoveredIndex === i;
          const isNeighbor = hoveredIndex !== null && Math.abs(hoveredIndex - i) === 1;
          
          return (
            <div 
              key={i} 
              className="flex items-center gap-6 marquee-item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span 
                className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter cursor-default transition-all duration-400 ease-out will-change-transform"
                style={{
                  opacity: isHovered ? 1 : isNeighbor ? 0.28 : 0.18,
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  textShadow: isHovered 
                    ? '0 0 12px rgba(59,130,246,0.15), 0 0 28px rgba(59,130,246,0.08)' 
                    : 'none'
                }}
              >
                {item}
              </span>
              <div className="w-3 h-3 bg-blue-500 rounded-full opacity-20" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const exps = [
    {
      period: "March 2026 — Present",
      company: "Incirco Ventures LLP",
      role: "Forward Deployed Engineer Intern",
      achievements: ["Customized ERPNext and Frappe workflows.", "Integrated EasyEcom with ERPNext using Python APIs.", "Automated logistics and sales processes.", "Enhanced enterprise applications using JS & Python."]
    },
    {
      period: "June 2025 — July 2025",
      company: "Biosarthi",
      role: "Data & Automation Intern",
      achievements: ["Built AI-powered automation pipelines.", "Integrated GPT models with ERPNext.", "Automated processing using n8n."]
    },
    {
      period: "August 2025",
      company: "Fierynet Technology LLP",
      role: "Data Science Intern",
      achievements: ["Performed data preprocessing and engineering.", "Built machine learning solutions.", "Created business analytics dashboards."]
    }
  ];

  return (
    <section id="experience" className="py-24 px-10">
      <div className="mx-auto w-full" ref={containerRef}>
        <SectionHeader title="Experience" subtitle="Journey" />
        <div className="relative">
          <div className="absolute left-[4px] top-0 w-[2px] h-full bg-gray-100 rounded-full" />
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[4px] top-0 w-[2px] h-full bg-blue-600 rounded-full origin-top shadow-[0_0_15px_rgba(37,99,235,1)]" 
          />
          
          <div className="space-y-24 relative">
            {exps.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'} relative`}
              >
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute left-[0px] top-2 w-[10px] h-[10px] rounded-full shadow-[0_0_10px_rgba(37,99,235,1)] ${i === 0 ? 'bg-blue-500 shadow-blue-500' : 'bg-blue-600'}`} 
                />
                
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4">{exp.period}</div>
                  <h3 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-3 leading-none">{exp.company}</h3>
                  <h4 className="text-xl lg:text-2xl text-gray-400 font-bold mb-8 uppercase tracking-widest">{exp.role}</h4>
                  <div className={`flex flex-wrap gap-3 ${i % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {exp.achievements.map((a, j) => (
                      <div key={j} className="px-5 py-2.5 bg-white border border-gray-100 rounded-2xl text-gray-500 text-sm font-medium leading-relaxed shadow-sm hover:shadow-md transition-shadow">
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-40 px-10">
      <div className="mx-auto w-full">
        <SectionHeader title="Education" subtitle="Academic" />
        <PremiumCard className="!p-20 !rounded-[4rem] border-none shadow-[0_50px_100px_rgba(0,0,0,0.04)]">
          <div className="grid lg:grid-cols-4 gap-20">
            <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] mt-3">2022 — 2026</div>
            <div className="lg:col-span-3">
              <h3 className="text-7xl font-black text-gray-900 uppercase tracking-tighter mb-8 leading-none">Bennett University</h3>
              <h4 className="text-3xl text-gray-400 font-bold mb-16 uppercase tracking-widest">B.Tech Computer Science (Data Science)</h4>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {[
                  "Specialized in Data Science, Machine Learning, and Business Analytics.",
                  "Built AI-powered automation systems and interactive data applications.",
                  "Applied academic knowledge through industry internships and projects."
                ].map((a, j) => (
                  <motion.div 
                    key={j}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.1 }}
                    className="flex gap-8 text-gray-500 font-medium text-xl leading-relaxed"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-4 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    <span>{a}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 border-t border-gray-100">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-4">
                  {['Machine Learning', 'Data Analytics', 'Artificial Intelligence', 'Database Systems'].map((course, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-6 py-3 bg-gray-50 rounded-full text-xs font-bold text-gray-600 border border-gray-100 italic"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PremiumCard>
      </div>
    </section>
  );
}

export function Certifications() {
  const certs = [
    { org: "IBM", name: "Excel Basics for Data Analysis" },
    { org: "IBM", name: "Databases and SQL for Data Science" },
    { org: "Deloitte", name: "Data Analytics Virtual Experience" },
    { org: "Microsoft", name: "Core Security and Cloud Fundamentals" }
  ];

  return (
    <section className="py-40 px-10">
      <div className="mx-auto w-full">
        <SectionHeader title="Certifications" subtitle="Validation" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="p-12 bg-white border border-gray-100 rounded-[3rem] shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                <Award size={40} />
              </div>
              <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">{c.org}</div>
              <div className="text-gray-900 font-black leading-tight uppercase text-base tracking-widest mb-8">{c.name}</div>
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Credential</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievement() {
  return (
    <section className="py-40 px-10">
      <div className="mx-auto w-full">
        <SectionHeader title="Achievement" subtitle="Recognition" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-12 md:p-24 bg-gradient-to-br from-blue-600 to-purple-700 rounded-[3rem] md:rounded-[4rem] text-white shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.4)] relative overflow-hidden group transition-shadow duration-700"
        >
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-50%] right-[-20%] w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px]" 
          />
          <div className="relative z-10 flex flex-col md:block">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="text-4xl md:text-6xl font-black tracking-tighter">RANK #11</div>
              <div className="hidden md:block w-px h-12 bg-white/20" />
              <div className="w-12 h-px bg-white/20 md:hidden" />
              <div className="text-sm md:text-xl font-bold opacity-80 uppercase tracking-[0.3em]">Smart India Hackathon 2024</div>
            </div>
            <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-10 leading-[1.1] md:leading-none">
              University-level Selection Round
            </h3>
            <p className="text-base md:text-2xl font-medium md:font-bold opacity-90 max-w-2xl leading-relaxed uppercase tracking-widest">
              Selected among top-performing teams for innovative problem-solving and rapid prototype development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const mailtoUrl = "mailto:agarwalgarv494@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Garv,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,";
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=agarwalgarv494@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Garv,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,";
  const emailHref = isMobile ? mailtoUrl : gmailUrl;

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-10 relative">
      <div className="mx-auto w-full">
        <SectionHeader title="Let's Build Something Impactful." subtitle="Contact" />
        <div className="grid lg:grid-cols-2 gap-20 md:gap-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed mb-8 md:mb-12">
              Currently open to <span className="text-gray-900 font-bold italic">AI Engineering</span>, <span className="text-gray-900 font-bold italic">Data Science</span>, <span className="text-gray-900 font-bold italic">ERPNext Development</span>, and <span className="text-gray-900 font-bold italic">Software Engineering</span> opportunities.
            </p>
            <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed mb-16 md:mb-24">
              Whether it's automation, enterprise solutions, or data products, I'm always excited to collaborate on ambitious projects.
            </p>
            <div className="space-y-8 md:space-y-12">
              {[
                { label: "Email", value: "agarwalgarv494@gmail.com", href: emailHref, ariaLabel: "Send email to Garv Agarwal" },
                { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/garv-agarwal-0273161b9", ariaLabel: "Visit Garv's LinkedIn profile" },
                { label: "GitHub", value: "View Repositories", href: "https://github.com/garv999", ariaLabel: "Visit Garv's GitHub profile" }
              ].map((link, i) => (
                <motion.a 
                  key={i} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  whileHover={{ x: 20 }}
                  className="flex flex-col group border-b border-gray-100 pb-8 md:pb-10 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-8 rounded-xl"
                >
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-3 md:mb-4">{link.label}</span>
                  <span className="text-2xl md:text-4xl text-gray-900 font-black tracking-tighter group-hover:text-blue-600 transition-colors uppercase break-all md:break-normal overflow-wrap-anywhere relative inline-flex w-fit">
                    {link.value}
                    <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <div className="flex flex-col justify-end mt-12 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
            <motion.div
              whileHover={{ y: -15 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-950 p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] text-white shadow-3xl relative overflow-hidden cinematic-box group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 animate-pulse" />
              <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-600/30 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000" />
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12" 
              />
              
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 md:mb-16 leading-[0.9] relative z-10">READY FOR <br /> NEW CHALLENGES.</h3>
              
              <Magnetic>
                <motion.a 
                  href={emailHref} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send email to Garv Agarwal"
                  className="inline-flex items-center gap-6 md:gap-8 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] group relative z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-8 focus-visible:ring-offset-gray-950 rounded-full"
                >
                  <span className="relative">
                    Send a Message 
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-2xl group-hover:rotate-12">
                    <ArrowUpRight size={24} className="md:w-8 md:h-8" />
                  </div>
                </motion.a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const emailHref = isMobile ? "mailto:agarwalgarv494@gmail.com" : "https://mail.google.com/mail/?view=cm&fs=1&to=agarwalgarv494@gmail.com";

  return (
    <footer className="py-28 px-10 border-t border-gray-100 bg-[#FAFAF7] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
        <div>
          <h3 className="text-5xl font-black text-gray-900 tracking-tighter mb-8 uppercase">GARV AGARWAL.</h3>
          <p className="text-gray-400 font-bold text-[11px] uppercase tracking-[0.5em] leading-loose max-w-md">
            AI Automation Engineer • Data Scientist • ERPNext Developer
          </p>
          <p className="text-[10px] font-bold text-gray-300/50 uppercase tracking-widest mt-12">
            Built with: React • TypeScript • Framer Motion • Tailwind CSS
          </p>
        </div>
        <div className="flex flex-col items-end gap-12">
          <div className="flex gap-14">
            {[
              { icon: <Linkedin size={32} />, href: "https://www.linkedin.com/in/garv-agarwal-0273161b9" },
              { icon: <Github size={32} />, href: "https://github.com/garv999" },
              { icon: <Mail size={32} />, href: emailHref }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -10, scale: 1.2, rotate: i % 2 === 0 ? 10 : -10 }} 
                className="text-gray-400 hover:text-blue-600 transition-all relative group"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">{social.icon}</div>
              </motion.a>
            ))}
          </div>
          <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.6em]">
            © 2026 Garv Agarwal. ALL SYSTEMS OPERATIONAL.
          </div>
        </div>
      </div>
    </footer>
  );
}
