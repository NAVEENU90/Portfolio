import { motion } from "framer-motion";
import { useSectionFadeIn } from "../animations/gsapAnimations.js";
import profileImage from "../images/me.jpeg";
const About = () => {
  useSectionFadeIn("#about");

  return (
    <section id="about" className="section-padding" aria-label="About Naveen">
      <div className="container-custom grid gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ background: "radial-gradient(circle at top, rgba(168,85,247,0.15), transparent 55%)" }} />
          <div className="relative glass-panel rounded-3xl p-5 md:p-6 flex flex-col gap-4">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/[0.06]">
              <img src={profileImage} alt="Portrait of Naveen U" className="h-full w-full object-cover object-[center_20%]" loading="lazy" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Projects", value: "10+", color: "text-rose-500" },
                { label: "Technologies", value: "20+", color: "text-violet-500" },
                { label: "Years", value: "2+", color: "text-blue-500" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-slate-50 border border-slate-100 px-3 py-3 transition-all hover:border-violet-200/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.08)]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                  <p className={`mt-1 text-lg font-semibold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">About</p>
            <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] leading-tight text-slate-800">
              Building clean, modern experiences with the <span className="gradient-text">MERN stack.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
            I&apos;m a MERN stack developer focused on crafting fast, accessible web applications with thoughtful UX. I enjoy turning complex problems into simple, intuitive interfaces powered by robust backends.
          </p>
          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
            From interactive dashboards and AI-powered tools to real-time systems, I care about code quality, performance, and maintainable architecture.
          </p>
          <div className="grid gap-4 text-sm text-slate-500">
            {[
              { color: "bg-rose-500", text: (<>Strong foundations in <span className="font-medium text-slate-700">React</span>, state management, and reusable design systems.</>) },
              { color: "bg-violet-500", text: (<>Backend experience with <span className="font-medium text-slate-700">Node.js, Express, and MongoDB</span> for RESTful APIs.</>) },
              { color: "bg-blue-500", text: (<>Focus on <span className="font-medium text-slate-700">performance</span>, <span className="font-medium text-slate-700">DX</span>, and <span className="font-medium text-slate-700">accessibility</span> across devices.</>) },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`mt-1.5 h-2 w-2 rounded-full ${item.color} shadow-sm`} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
