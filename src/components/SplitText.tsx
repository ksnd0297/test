"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      document.fonts.ready.then(() => {
        if (!containerRef.current) return;

        // Hide the container until the fonts are loaded
        containerRef.current.style.visibility = "visible";

        const { words } = splitText(containerRef.current.querySelector("h1")!);

        // Animate the words in the h1
        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05),
          }
        );
      });
    }, 1000);
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <h1 className="h1">Level up your animations with the all-in membership</h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
