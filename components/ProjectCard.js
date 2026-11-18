import Link from "next/link";

// `from` = catégorie filtrée au moment du clic (ex : "Web"). Elle est transmise à la page
// du projet pour que le "projet suivant" reste dans la même catégorie.
export default function ProjectCard({ project, style, from }) {
  const { slug, title, category, year, image, fit, summary, tags } = project;

  const href =
    from && from !== "Tout"
      ? `/projets/${slug}?categorie=${encodeURIComponent(from)}`
      : `/projets/${slug}`;

  return (
    <Link className="project-card" href={href} style={style}>
      <div className={`project-media ${fit === "contain" ? "contain" : ""}`}>
        <img src={image} alt={title} loading="lazy" />
        <span className="project-chip">{category}</span>
      </div>
      <div className="project-meta">
        <h3>{title}</h3>
        <span className="project-year">{year}</span>
      </div>
      <p className="project-summary">{summary}</p>
      <div className="project-tags">
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </Link>
  );
}