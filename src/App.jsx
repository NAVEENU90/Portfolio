import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import { useLenisSmoothScroll } from "./animations/gsapAnimations.js";

function App() {
  useLenisSmoothScroll();

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 relative overflow-x-hidden">
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
