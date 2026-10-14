import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = () => window.matchMedia("(pointer: fine)").matches;

// Site-wide motion: smooth scrolling, a scroll progress bar, a soft glow that
// follows the cursor, a spotlight on hovered cards, and magnetic buttons.
// Everything is skipped for people who ask their device to reduce motion.
function Effects() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const lenis = new Lenis({ duration: 1.1, anchors: true });
    window.__lenis = lenis;
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    const root = document.documentElement;
    const updateProgress = () => {
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--scroll-progress",
        max > 0 ? String(window.scrollY / max) : "0"
      );
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    const magnets = new Set();
    const onPointerMove = (e) => {
      root.style.setProperty("--cursor-x", `${e.clientX}px`);
      root.style.setProperty("--cursor-y", `${e.clientY}px`);
      root.classList.add("cursor-active");

      const card = e.target.closest && e.target.closest(".spotlight");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }

      const magnet = e.target.closest && e.target.closest(".magnetic");
      magnets.forEach((m) => {
        if (m !== magnet) {
          m.style.transform = "";
          magnets.delete(m);
        }
      });
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        magnet.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
        magnets.add(magnet);
      }
    };
    const onPointerLeave = () => root.classList.remove("cursor-active");

    if (hasFinePointer()) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      magnets.forEach((m) => (m.style.transform = ""));
    };
  }, []);

  // Jump to the top on page change without a smooth-scroll animation
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}

export default Effects;
