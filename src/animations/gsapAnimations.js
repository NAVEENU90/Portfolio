import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useStaggerReveal = (selector, options = {}) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: options.trigger || elements[0],
          start: options.start || "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [selector, options.trigger, options.start]);
};

export const useFloatingHero = (selector) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = document.querySelector(selector);
      if (!el) return;

      gsap.to(el, {
        y: -12,
        rotate: 1,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, [selector]);
};

export const useSectionFadeIn = (selector) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = document.querySelector(selector);
      if (!el) return;

      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, [selector]);
};

export const useLenisSmoothScroll = () => {
  useEffect(() => {
    if ("scrollBehavior" in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);
};

