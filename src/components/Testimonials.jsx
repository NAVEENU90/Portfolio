import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/projects.js";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section-padding" aria-label="Testimonials">
      <div className="container-custom space-y-8">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">Testimonials</p>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] font-semibold leading-tight text-slate-800">
            People I&apos;ve <span className="gradient-text">collaborated with.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500">
            Feedback from founders, product teams, and engineers on projects I&apos;ve helped design and build.
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex flex-col items-start gap-4 md:w-2/5">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1 text-xs text-violet-700">
              <Star className="fill-amber-400 text-amber-400" size={14} />
              <span>Collaborative, reliable, detail-oriented</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full gradient-btn border border-white/30 flex items-center justify-center text-[11px] font-semibold text-white shadow-lg">
                {active.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">{active.name}</p>
                <p className="text-xs text-slate-400">{active.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={active.rating >= i + 1 ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
              ))}
            </div>
            <div className="flex items-center gap-2 pt-1">
              {[{ fn: handlePrev, icon: ChevronLeft, label: "Previous" }, { fn: handleNext, icon: ChevronRight, label: "Next" }].map(({ fn, icon: Icon, label }) => (
                <button key={label} type="button" onClick={fn} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] bg-white/70 text-slate-500 hover:border-violet-400/30 hover:text-violet-600 transition-all" aria-label={`${label} testimonial`}>
                  <Icon size={18} />
                </button>
              ))}
            </div>
            <div className="flex gap-1.5 pt-1">
              {testimonials.map((t, index) => (
                <button key={t.id} type="button" aria-label={`Go to testimonial from ${t.name}`} onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-6 gradient-btn" : "w-2 bg-slate-200 hover:bg-slate-300"}`} />
              ))}
            </div>
          </div>

          <div className="md:w-3/5 relative">
            <Quote size={40} className="absolute -top-2 -left-1 text-violet-500/10" />
            <AnimatePresence mode="wait">
              <motion.blockquote key={active.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="text-sm md:text-base text-slate-500 leading-relaxed pl-6">
                &ldquo;{active.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
