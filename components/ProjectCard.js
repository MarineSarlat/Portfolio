import Link from "next/link";

export default function ProjectCard({ project, style }) {
  const { slug, title, category, year, image, fit, summary, tags } = project;

  return (
    <Link className="project-card" href={`/projets/${slug}`} style={style}>
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
