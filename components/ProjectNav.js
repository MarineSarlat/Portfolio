"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";

// Lit le filtre dans l'adresse (?categorie=Web) côté navigateur : la page du projet
// reste ainsi 100 % statique (compatible export statique / hébergement simple).
function getContext(slug, categorie) {
  const project = projects.find((p) => p.slug === slug);
  const wanted = String(categorie || "").toLowerCase();
  const filter =
    projects
      .map((p) => p.category)
      .find((c) => c.toLowerCase() === wanted && c === project?.category) || null;

  const list = filter ? projects.filter((p) => p.category === filter) : projects;
  const index = list.findIndex((p) => p.slug === slug);
  const next = list.length > 1 ? list[(index + 1) % list.length] : null;
  const query = filter ? `?categorie=${encodeURIComponent(filter)}` : "";

  return { filter, next, query };
}

// ---------- Affichage (sans logique) ----------

export function BackLinkView({ filter, query }) {
  return (
    <Link href={`/projets${query}`} className="eyebrow">
      {filter ? `← Projets ${filter}` : "← Tous les projets"}
    </Link>
  );
}

export function NextProjectView({ next, filter, query }) {
  if (!next) {
    return (
      <Link href="/projets" className="next-project">
        <div>
          <span>Il n'y a pas d'autre projet dans cette catégorie</span>
          <strong>Voir tous les projets</strong>
        </div>
        <span className="btn ghost" style={{ textTransform: "none", letterSpacing: 0, fontSize: "1rem", color: "var(--ink)" }}>
          Explorer <span className="arrow">→</span>
        </span>
      </Link>
    );
  }
  return (
    <Link href={`/projets/${next.slug}${query}`} className="next-project">
      <div>
        <span>{filter ? `Projet suivant · ${filter}` : "Projet suivant"}</span>
        <strong>{next.title}</strong>
      </div>
      <span className="btn ghost" style={{ textTransform: "none", letterSpacing: 0, fontSize: "1rem", color: "var(--ink)" }}>
        Découvrir <span className="arrow">→</span>
      </span>
    </Link>
  );
}

// ---------- Versions qui tiennent compte du filtre ----------

export function BackLink({ slug }) {
  const params = useSearchParams();
  const { filter, query } = getContext(slug, params.get("categorie"));
  return <BackLinkView filter={filter} query={query} />;
}

export function NextProject({ slug }) {
  const params = useSearchParams();
  const { filter, next, query } = getContext(slug, params.get("categorie"));
  return <NextProjectView next={next} filter={filter} query={query} />;
}