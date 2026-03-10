import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const yOffset = -88;
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        if (!section) continue;
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveId(section.id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isScrolled ? "backdrop-blur-2xl bg-white/80 border-b border-black/[0.04] shadow-sm" : "bg-transparent"}`}>
      <nav className="container-custom flex items-center justify-between py-4">
        <RouterLink to="/" onClick={() => scrollToId("home")} className="flex items-center gap-3 group">
          <span className="inline-flex h-8 items-center justify-center rounded-xl gradient-btn px-3 text-xs font-bold text-white shadow-lg transition-shadow">
            naveen.
          </span>
          <span className="hidden text-xs font-medium text-slate-500 sm:inline-flex rounded-full border border-black/[0.06] bg-white/60 px-3 py-1">
            MERN • Creative Developer
          </span>
        </RouterLink>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => scrollToId(item.id)}
              className={`relative px-3.5 py-2 text-xs font-medium rounded-lg transition-colors ${activeId === item.id ? "text-violet-600" : "text-slate-500 hover:text-slate-800"}`}>
              {item.label}
              {activeId === item.id && (
                <motion.span layoutId="activeNavItem"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-gradient-to-r from-rose-500 via-violet-500 to-blue-500"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </div>

        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] bg-white/80 text-slate-600 hover:border-violet-400/30 hover:text-violet-600 transition-all md:hidden"
          onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }} className="absolute inset-x-4 top-16 md:hidden">
              <div className="glass-panel rounded-2xl p-3 shadow-lg">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button key={item.id} type="button" onClick={() => { scrollToId(item.id); setIsOpen(false); }}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all ${activeId === item.id ? "bg-violet-500/10 text-violet-600" : "text-slate-500 hover:bg-black/[0.02] hover:text-slate-800"}`}>
                      <span>{item.label}</span>
                      {activeId === item.id && <span className="h-1.5 w-1.5 rounded-full gradient-btn" />}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
