import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AnimatedBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = useMemo(
        () => ({
            fullScreen: false,
            fpsLimit: 60,
            particles: {
                number: {
                    value: 50,
                    density: { enable: true, area: 900 },
                },
                color: { value: ["#f43f5e", "#a855f7", "#3b82f6", "#06b6d4", "#22c55e"] },
                opacity: {
                    value: { min: 0.12, max: 0.3 },
                    animation: { enable: true, speed: 0.8, sync: false },
                },
                size: {
                    value: { min: 1, max: 2.5 },
                },
                move: {
                    enable: true,
                    speed: 0.6,
                    direction: "none",
                    outModes: { default: "out" },
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: "#94a3b8",
                    opacity: 0.1,
                    width: 1,
                },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                },
                modes: {
                    grab: { distance: 140, links: { opacity: 0.18 } },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 animated-gradient-bg" />
            <div className="absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full bg-rose-300/[0.06] blur-[100px] orb-1" />
            <div className="absolute top-[50%] right-[10%] h-[450px] w-[450px] rounded-full bg-violet-300/[0.05] blur-[100px] orb-2" />
            <div className="absolute bottom-[10%] left-[40%] h-[400px] w-[400px] rounded-full bg-blue-300/[0.04] blur-[100px] orb-3" />
            <div className="absolute inset-0 pointer-events-auto">
                <Particles id="bg-particles" init={particlesInit} options={particlesOptions} className="h-full w-full" />
            </div>
        </div>
    );
};

export default AnimatedBackground;
