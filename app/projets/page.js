import { Suspense } from "react";
import ProjectsGrid from "@/components/ProjectsGrid";
import TiltBadge from "@/components/TiltBadge";

export const metadata = {
  title: "Projets",
  description: "Découvre mes projets, filtrables par catégorie.",
};

export default function ProjetsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container hero-split">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h1 className="title-xl">
              Mes <em>projets</em>
            </h1>
            <p className="lead" style={{ marginTop: 26 }}>
              Une sélection de mes réalisations. Filtre par catégorie pour explorer ce qui t'intéresse.
            </p>
          </div>
          <TiltBadge src="/badge.png" alt="Prix d'excellence MMI 2026, IUT de Béziers" />
        </div>
      </section>
      <section style={{ paddingBottom: "clamp(70px, 10vw, 140px)" }}>
        <div className="container">
          <Suspense fallback={null}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>
    </>
  );
}