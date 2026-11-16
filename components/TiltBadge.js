"use client";

import { useRef } from "react";

export default function TiltBadge({ src, alt = "Badge d'excellence" }) {
  const badge = useRef(null);

  const onMove = (e) => {
    const el = badge.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    
    el.style.setProperty("--rx", `${(0.5 - y) * 26}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 26}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    const el = badge.current;
    if (!el) return;
    ["--rx", "--ry", "--mx", "--my"].forEach((v) => el.style.removeProperty(v));
  };

  return (
    <div className="badge-scene" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="badge" ref={badge} style={{ "--src": `url("${src}")` }}>
        <img src={src} alt={alt} draggable={false} />
        <span className="badge-shine" aria-hidden="true" />
        <span className="badge-sweep" aria-hidden="true" />
      </div>
    </div>
  );
}