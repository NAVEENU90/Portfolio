import { ArrowUp, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/[0.04]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/30 to-transparent" />
      <div className="container-custom flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          © {new Date().getFullYear()} Naveen U. Made with{" "}
          <Heart size={12} className="text-rose-500 fill-rose-500" />{" "}
          All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com/NAVEENU90", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/er-naveen-u", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] bg-white/60 text-slate-400 hover:text-violet-600 hover:border-violet-400/25 hover:shadow-[0_0_15px_rgba(168,85,247,0.12)] transition-all duration-300">
                <Icon size={15} />
              </a>
            ))}
          </div>
          <button type="button" onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 rounded-full gradient-btn px-4 py-2 text-xs font-medium text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
            <ArrowUp size={14} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
