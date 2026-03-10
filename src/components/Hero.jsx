import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDownRight, Download } from "lucide-react";
import { useFloatingHero } from "../animations/gsapAnimations.js";

const Hero = () => {
  useFloatingHero("#hero-card");

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const yOffset = -88;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="section-padding pt-28 md:pt-36 lg:pt-44 relative" aria-label="Introduction">
      <div className="container-custom flex flex-col items-center text-center gap-8">
        <motion.div className="inline-flex items-center gap-2 text-xs text-slate-500"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <span className="h-px w-8 bg-gradient-to-r from-transparent via-rose-400 to-violet-500" />
          <span className="uppercase tracking-[0.25em]">portfolio • mern developer</span>
          <span className="text-base">✨</span>
        </motion.div>

        <motion.div className="space-y-5" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}>
          <h1 className="font-display text-[clamp(3rem,7vw,5rem)] leading-[1.05]">
            <span className="block font-bold mb-1">
              <span className="gradient-text-hero">Hello, I&apos;m Naveen</span>
            </span>
            <span className="block font-bold text-slate-800">
              MERN Stack <span className="gradient-text">Developer.</span>
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-500 leading-relaxed">
            I design and build modern web applications with React, Node.js, Express, and MongoDB — blending clean engineering with playful, memorable interfaces.
          </p>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row items-center gap-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
          <button type="button" onClick={handleScrollToProjects}
            className="group inline-flex items-center justify-center gap-2 rounded-full gradient-btn px-7 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>View Projects</span>
            <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-6 py-3 text-sm font-medium text-slate-700 hover:border-violet-400/30 hover:bg-white transition-all duration-300">
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.div className="flex items-center gap-3 pt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
          {[
            { icon: FaGithub, href: "https://github.com/NAVEENU90", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/er-naveen-u", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 text-slate-500 hover:text-violet-600 hover:border-violet-400/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300">
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        <motion.div className="flex flex-col gap-3 pt-4 w-full max-w-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
          <p className="text-[11px] text-slate-400 text-center uppercase tracking-widest">Trusted by teams & experiments at</p>
          <div className="glass-panel rounded-2xl px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
            <span>Open Source</span>
            <span className="h-1 w-1 rounded-full bg-gradient-to-r from-rose-400 to-violet-400" />
            <span>Side Projects</span>
            <span className="h-1 w-1 rounded-full bg-gradient-to-r from-violet-400 to-blue-400" />
            <span>Freelance Collaborations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
