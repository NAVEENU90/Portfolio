import { motion } from "framer-motion";
import { useStaggerReveal } from "../animations/gsapAnimations.js";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiGithub, SiPostman, SiFigma, SiExpress, SiAngular } from "react-icons/si";
const skillsData = {
  Frontend: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "SQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
};

const iconMap = {
  React: [FaReact, "text-cyan-500"],Angular: [SiAngular, "text-red-600"], JavaScript: [SiJavascript, "text-yellow-500"],
  TypeScript: [SiTypescript, "text-blue-500"], HTML: [FaHtml5, "text-orange-500"],
  CSS: [FaCss3Alt, "text-blue-600"], Tailwind: [SiTailwindcss, "text-cyan-400"],
  "Node.js": [FaNodeJs, "text-emerald-600"], "Express.js": [SiExpress, "text-slate-600"],
  "REST APIs": [SiPostman, "text-orange-400"], MongoDB: [SiMongodb, "text-emerald-600"],
  SQL: [SiPostgresql, "text-blue-500"], PostgreSQL: [SiPostgresql, "text-blue-500"],
  Git: [FaGitAlt, "text-orange-500"], GitHub: [SiGithub, "text-slate-700"],
  "VS Code": [SiJavascript, "text-blue-500"], Postman: [SiPostman, "text-orange-400"],
  Figma: [SiFigma, "text-violet-500"],
};

const getSkillIcon = (skill) => {
  const entry = iconMap[skill];
  if (!entry) return <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />;
  const [Icon, cls] = entry;
  return <Icon className={cls} />;
};

const categoryColors = {
  Frontend: { badge: "from-rose-500 to-pink-500", glow: "hover:border-rose-300/30 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]" },
  Backend: { badge: "from-violet-500 to-purple-500", glow: "hover:border-violet-300/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]" },
  Database: { badge: "from-blue-500 to-cyan-500", glow: "hover:border-blue-300/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]" },
  Tools: { badge: "from-emerald-500 to-teal-500", glow: "hover:border-emerald-300/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]" },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding" aria-label="Skills">
      <div className="container-custom space-y-8">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600">Skills</p>
          <h2 className="font-display text-[clamp(2rem,3vw,2.6rem)] text-slate-800 leading-tight">
            Tools I use to ship fast, <span className="gradient-text">reliable products.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500">
            From frontend polish to backend APIs, I work across the MERN stack to deliver cohesive, production-ready experiences.
          </p>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white/50">
          <div className="skills-marquee flex min-w-max gap-5 px-6 py-4">
            {[...Array(2)].map((_, dupIdx) =>
              Object.entries(skillsData).map(([category, skills]) => (
                <div key={`${category}-${dupIdx}`} className="flex items-center gap-4">
                  {skills.map((skill) => (
                    <span key={`${category}-${skill}-${dupIdx}`} className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 px-4 py-2 text-xs font-medium text-slate-600">
                      <span className="text-[15px] flex items-center justify-center">{getSkillIcon(skill)}</span>
                      {skill}
                    </span>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Category Cards — using framer-motion instead of GSAP */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(skillsData).map(([category, skills], index) => {
            const colors = categoryColors[category] || categoryColors.Tools;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass-panel rounded-2xl p-4 md:p-5 transition-all duration-300 ${colors.glow}`}
              >
                <div className={`inline-flex rounded-lg bg-gradient-to-r ${colors.badge} px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-white font-semibold mb-3`}>
                  {category}
                </div>
                <ul className="space-y-2 text-sm text-slate-500">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 group">
                      <span className="text-[15px] flex items-center justify-center transition-transform group-hover:scale-110">{getSkillIcon(skill)}</span>
                      <span className="group-hover:text-slate-800 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
