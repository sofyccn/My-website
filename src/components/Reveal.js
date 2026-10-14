import React, { useEffect, useRef, useState } from "react";

// Animates its children into place the first time they scroll into view.
// variant: "up" (fade and rise), "drop" (fall in with a bounce),
// "spacing" (letters tighten as they fade in), or "zoom".
function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [state, setState] = useState("hidden");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setState("done");
      return undefined;
    }
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setState("visible");
        // Drop the reveal classes once the entrance has played, so the
        // element's own hover transitions are not slowed by the stagger delay
        timer = setTimeout(() => setState("done"), delay + 1300);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  const revealClass =
    state === "done"
      ? ""
      : `reveal reveal-${variant}${state === "visible" ? " is-visible" : ""} `;

  return (
    <Tag
      ref={ref}
      className={`${revealClass}${className}`.trim()}
      style={
        state === "done" || !delay
          ? style
          : { ...style, "--reveal-delay": `${delay}ms` }
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
