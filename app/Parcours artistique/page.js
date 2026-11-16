import Link from "next/link";
import Reveal from "@/components/Reveal";
import { stats, sport, stage, creations } from "@/data/distinctions";

export const metadata = {
  title: "Distinctions",
  description: "Mon palmarès sportif, mon expérience sur scène et mes distinctions.",
};

export default function DistinctionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Palmarès</span>
          <h1 className="title-xl">
            Scène, podiums &amp; <em>passion</em>.
          </h1>
          <p className="lead" style={{ marginTop: 26 }}>
            Avant les écrans, il y a eu les tatamis, les plateaux et les projecteurs. Voici ce
            qu'ils m'ont appris, et ce que j'en ai rapporté.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: "clamp(60px, 8vw, 110px)" }}>
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="stat-card">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="award-head">
            <div>
              <span className="eyebrow">Sport de haut niveau</span>
              <h2 className="title-lg">
                {sport.title} <em>{sport.period}</em>
              </h2>
            </div>
            <p className="lead">
              <strong style={{ color: "var(--ink)" }}>{sport.place}.</strong> {sport.text}
            </p>
          </Reveal>
          <div className="medals">
            {sport.medals.map((m, i) => (
              <Reveal key={m.label} delay={i * 70}>
                <div className="medal">
                  <span className={`medal-disc tone-${m.tone}`}>{m.count}</span>
                  <h3>{m.label}</h3>
                  {m.detail && <p>{m.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Sur scène</span>
            <h2 className="title-lg">
              Comédie musicale &amp; <em>chorégraphie</em>
            </h2>
          </Reveal>
          <div className="timeline" style={{ marginTop: 46 }}>
            {stage.map((t, i) => (
              <Reveal key={t.title + i} delay={i * 60}>
                <div className="tl-row">
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-title">
                    <h3>{t.title}</h3>
                    <span>{t.place}</span>
                  </div>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Création</span>
            <h2 className="title-lg" style={{ marginBottom: 46 }}>
              Distinctions <em>créatives</em>
            </h2>
          </Reveal>
          <div className="values">
            {creations.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="value">
                  <span className="award-year">{c.year}</span>
                  <h3>{c.title}</h3>
                  <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>{c.place}</p>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="cv-cta" style={{ marginTop: 70 }}>
            <Link href="/contact" className="btn">
              Une collaboration ? Parlons-en <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}