import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

// Transforme un lien YouTube ou Vimeo classique en lien "embed" utilisable dans le site.
function toEmbed(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    if (host === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (host === "youtube.com") {
      if (u.pathname.startsWith("/embed/")) return url;
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === "vimeo.com") return `https://player.vimeo.com/video/${u.pathname.split("/").filter(Boolean)[0]}`;
    if (host === "player.vimeo.com") return url;
  } catch {}
  return null;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/projets" className="eyebrow">← Tous les projets</Link>
          <h1 className="title-xl" style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)" }}>
            {project.title}
          </h1>
          <dl className="case-meta">
            <div><dt>Catégorie</dt><dd>{project.category}</dd></div>
            <div><dt>Année</dt><dd>{project.year}</dd></div>
            <div><dt>Rôle</dt><dd>{project.role}</dd></div>
            <div><dt>Outils</dt><dd>{project.tools}</dd></div>
          </dl>
        </div>
      </section>

      <section style={{ paddingBottom: 60 }}>
        <div className="container case-text">
          <Reveal>
            <h2 className="title-lg" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Le <em>projet</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            {(project.intro || []).map((para, i) => (
              <p key={i} className={i === 0 ? "lead" : ""} style={i === 0 ? { maxWidth: "none" } : { color: "var(--ink-soft)" }}>
                {para}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Intégration du site WordPress en Iframe si la propriété iframeUrl existe dans les données du projet */}
      {project.iframeUrl && (
        <section style={{ paddingBottom: 60 }}>
          <div className="container">
            <Reveal>
              <div style={{ width: "100%" }}>
                <h3 className="title-lg" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", marginBottom: "20px" }}>
                  Aperçu du <em>site en direct</em>
                </h3>
                {/* Conteneur avec des bords ronds (borderRadius) */}
                <div style={{ width: "100%", height: "600px", borderRadius: "16px", overflow: "hidden" }} className="border border-gray-200 shadow-lg bg-white">
                  <iframe 
                    src={project.iframeUrl} 
                    title={project.title}
                    style={{ width: "100%", height: "100%", border: "0", borderRadius: "16px" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section style={{ paddingBottom: "clamp(60px, 8vw, 110px)" }}>
        <div className="container">
          <div className="gallery">
            {(project.gallery || []).map((g) => {
              const embed = g.embed ? toEmbed(g.embed) : null;
              return (
                <Reveal key={g.src || g.embed || g.video}>
                  <figure className={`shot ${g.pad ? "pad" : ""}`} style={!g.wide && !embed && !g.video ? { maxWidth: 640, margin: "0 auto" } : undefined}>
                    {embed ? (
                      <div className="video-frame">
                        <iframe
                          src={embed}
                          title={g.caption || "Vidéo"}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                        />
                      </div>
                    ) : g.video ? (
                      <video className="video-file" src={g.video} poster={g.poster} controls playsInline preload="metadata" />
                    ) : (
                      <img src={g.src} alt={g.caption} loading="lazy" />
                    )}
                    {g.caption && <figcaption>{g.caption}</figcaption>}
                  </figure>
                </Reveal>
              );
            })}
                      </div>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(70px, 9vw, 130px)" }}>
        <div className="container">
          <Link href={`/projets/${next.slug}`} className="next-project">
            <div>
              <span>Projet suivant</span>
              <strong>{next.title}</strong>
            </div>
            <span className="btn ghost" style={{ textTransform: "none", letterSpacing: 0, fontSize: "1rem", color: "var(--ink)" }}>
              Découvrir <span className="arrow">→</span>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}