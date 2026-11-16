"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";

export default function ProjectsGrid() {
  const router = useRouter();
  const params = useSearchParams();

  const fromUrl = params.get("categorie");
  const initial = categories.find((c) => c.toLowerCase() === (fromUrl || "").toLowerCase()) || "Tout";

  const [active, setActive] = useState(initial);
  const [animKey, setAnimKey] = useState(0);

  // Garde le filtre synchronisé avec l'URL (ex : /projets?categorie=Web)
  useEffect(() => {
    setActive(initial);
  }, [initial]);

  const choose = (cat) => {
    setActive(cat);
    setAnimKey((k) => k + 1);
    router.replace(cat === "Tout" ? "/projets" : `/projets?categorie=${encodeURIComponent(cat)}`, {
      scroll: false,
    });
  };

  const visible = active === "Tout" ? projects : projects.filter((p) => p.category === active);
  const countOf = (cat) => (cat === "Tout" ? projects.length : projects.filter((p) => p.category === cat).length);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filtrer les projets par catégorie">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            className={`filter ${active === cat ? "active" : ""}`}
            onClick={() => choose(cat)}
          >
            {cat}
            <span className="count">{countOf(cat)}</span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty">Aucun projet dans cette catégorie pour le moment.</p>
      ) : (
        <div className="projects-grid animating" key={animKey}>
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} style={{ animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
      )}
    </>
  );
}
