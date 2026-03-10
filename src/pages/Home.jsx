import { useState, useEffect } from "react";
import { SiMongodb, SiExpress, SiReact, SiAngular, SiNodedotjs } from "react-icons/si";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const techIcons = [
  { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { Icon: SiExpress, color: "#64748b", label: "Express" },
  { Icon: SiReact, color: "#61DAFB", label: "React" },
  { Icon: SiAngular, color: "#DD0031", label: "Angular" },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIcon, setActiveIcon] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % techIcons.length);
    }, 400);
    return () => clearInterval(interval);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f1f5f9] relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-rose-200/30 blur-[80px] orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-200/30 blur-[80px] orb-2" />
        <div className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full bg-blue-200/20 blur-[80px] orb-3" />

        <div className="flex flex-col items-center gap-8 z-10">
          {/* Tech stack icons cycling */}
          <div className="relative">
            {/* Orbit ring */}
            <div className="absolute -inset-6 loading-orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-rose-500 to-violet-500 shadow-lg" />
            </div>
            <div className="absolute -inset-6 rounded-full border border-dashed border-slate-300/50" />

            {/* Icon container */}
            <div className="relative h-20 w-20 rounded-2xl bg-white/90 border border-black/[0.06] shadow-xl flex items-center justify-center overflow-hidden">
              {techIcons.map(({ Icon, color, label }, index) => (
                <div
                  key={label}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    opacity: activeIcon === index ? 1 : 0,
                    transform: activeIcon === index ? "scale(1) translateY(0)" : "scale(0.5) translateY(8px)",
                  }}
                >
                  <Icon size={36} style={{ color }} />
                </div>
              ))}
            </div>
          </div>

          {/* Tech name cycling */}
          <div className="flex flex-col items-center gap-3 loading-fade-in">
            <span className="text-sm font-medium text-slate-700 tracking-wide h-5 flex items-center">
              {techIcons[activeIcon].label}
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Loading portfolio
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 overflow-hidden rounded-full bg-slate-200 loading-fade-in-delay">
            <div className="h-full rounded-full gradient-btn loading-bar" />
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {techIcons.map(({ label, color }, index) => (
              <div
                key={label}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: activeIcon === index ? "20px" : "8px",
                  backgroundColor: activeIcon === index ? color : "#cbd5e1",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
