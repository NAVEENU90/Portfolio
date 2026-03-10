import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <section id="projects" className="section-padding" aria-label="Highlighted projects">
      <div className="container-custom space-y-8">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">Projects</p>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] leading-tight text-slate-800">
            Selected work that blends <span className="gradient-text">clean UI with solid engineering.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500">
            A snapshot of what I&apos;ve been building with the MERN stack, data visualizations, and AI-assisted workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel glass-panel-hover gradient-border rounded-2xl overflow-hidden flex flex-col group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-[11px]">
                  <span className="rounded-full bg-white/20 backdrop-blur-sm border border-white/20 px-2.5 py-0.5 text-white/90">Featured</span>
                  <span className="rounded-full gradient-btn px-2.5 py-0.5 text-white font-medium">{project.techStack[0]}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-4 md:p-5">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-50 border border-slate-100 px-2.5 py-1 text-slate-600">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-1 text-xs">
                  <div className="flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full gradient-btn px-3.5 py-1.5 text-[11px] font-medium text-white hover:shadow-lg transition-all">
                      <ExternalLink size={13} /><span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white/70 px-3.5 py-1.5 text-[11px] font-medium text-slate-600 hover:border-violet-400/20 hover:text-violet-600 transition-all">
                      <Github size={13} /><span>GitHub</span>
                    </a>
                  </div>
                  <span className="text-slate-400">MERN • <span className="text-slate-600">{project.techStack[0]}</span></span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
