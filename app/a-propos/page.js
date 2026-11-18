import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site, skills, tools, timeline, values, interests } from "@/data/site";

export const metadata = {
  title: "À propos",
  description: "Qui je suis, mon parcours et mon univers.",
};

export default function AProposPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container about-hero">
          <Reveal>
            <div className="portrait">
              {/* Ta photo : place-la dans /public/portrait.jpg puis décommente la ligne suivante */}
              <img src="/Grece.jpeg" alt={`Portrait de ${site.name} en Grece`} /> 
              <span className="portrait-ph">MS</span>
            </div>
          </Reveal>
          <Reveal delay={100} className="about-text">
            <span className="eyebrow">À propos</span>
            <h1 className="title-xl" style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)", marginBottom: 28 }}>
              Salut, moi c'est <em>{site.name.split(" ")[0]}</em>.
            </h1>
            <p>
              Je suis une étudiante polyvalente en dernière année de BUT MMI à Béziers. J'ai grandi au milieu du sport de haut niveau, de la scène et des cours, 
              ce qui m'a appris à être rigoureuse, créative et à m'adapter à toutes les situations.
            </p>
          
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
              <Link href="/contact" className="btn">
                Me contacter <span className="arrow">→</span>
              </Link>
              <Link href="/projets" className="btn ghost">Voir mes projets</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1. COMPÉTENCES */}
      <section className="section dark-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Compétences</span>
            <h2 className="title-lg">Ce que je <em>maîtrise</em></h2>
            <div className="chips">
              {skills.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
            <p style={{ marginTop: 28, color: "rgba(251,245,240,.7)" }}>
              Outils : {tools.join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. VALEURS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Mes valeurs</span>
            <h2 className="title-lg" style={{ marginBottom: 46 }}>Ce qui me <em>guide</em></h2>
          </Reveal>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HORS ÉCRAN */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Hors écran</span>
            <h2 className="title-lg">Ce qui m'<em>inspire</em></h2>
            <div className="interests">
              {interests.map((it) => (
                <span key={it}>{it}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. MON CHEMIN JUSQU'ICI (PARCOURS) */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Parcours</span>
            <h2 className="title-lg" style={{ marginBottom: 46 }}>Mon chemin <em>jusqu'ici</em></h2>
          </Reveal>
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 60}>
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
    </>
  );
}