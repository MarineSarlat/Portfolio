import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import TiltBadge from "@/components/TiltBadge";
import { site, pillars, skills, tools, timeline } from "@/data/site";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (

    <>
   
      {/* ============ HERO ============ */}
      <section className="hero" id="accueil">
        <div className="container hero-grid">
          <div>
            <h1>
              La <em>polyvalence,</em> mon atout créatif.
            </h1>
            <span className="eyebrow">{site.name}</span>
            <div className="hero-actions">
              <Link href="/projets" className="btn">
                Voir mes projets <span className="arrow">→</span>
              </Link>
            
            <a href="/cv-marine-sarlat3.pdf" download className="btn soft">
              Télécharger mon CV <span className="arrow">↓</span>
            </a>
         <a href="#contact" className="btn ghost">Me contacter</a>
            </div>
          </div>
          <div className="arch">
            <img src="/projets/Marine.jpeg" alt="Portrait de Marine" />
            <div className="arch-caption ">Polyvalence, sensibilité, exigence : trois facettes de ma créativité.</div>
          </div>
        </div>
      </section>

      {/* ============ UNIVERS ============ */}
      <section className="section" id="univers">
        <div className="container">
        <div className="intro-grid" style={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "start", gap: "3rem", alignItems: "center" }}>
          <Reveal delay={100} className="intro-text">
            <p>
              Étudiante en dernière année de BUT MMI et actuellement en échange universitaire au Québec, 
              je me spécialise en développement web pour concevoir, coder et structurer des applications 
              et des sites web sur mesure.
            </p>
            <p>
              En associant mes compétences techniques en programmation à une maîtrise des enjeux de communication, 
              je traduis des besoins utilisateurs en interfaces fonctionnelles et ergonomiques.
            </p>
          </Reveal>

          <TiltBadge className="hero-split"
            src="/badge.png" 
            alt="Prix d'excellence MMI 2026, IUT de Béziers" 
          />
        </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className={`pillar ${p.color}`}>
                  <span className="num">0{i + 1}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

        {/* ============ COMPÉTENCES + PARCOURS ============ */}
      <section className="section dark-section" id="parcours">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Compétences</span>
            <h2 className="title-lg">Ce que je <em>sais faire</em></h2>
            <div className="chips">
              {skills.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
            <p style={{ marginTop: 28, color: "rgba(251,245,240,.7)" }}>
              Outils : {tools.join(" · ")}
            </p>
          </Reveal>

          <Reveal style={{ marginTop: 80 }}>
            <span className="eyebrow">Parcours</span>
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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {/* ============ PROJETS ============ */}
      <section className="section" style={{ paddingTop: 0 }} id="projets">
        <div className="container">
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">Sélection</span>
              <h2 className="title-lg">Projets <em>coup de coeur</em></h2>
            </div>
            <Link href="/projets" className="btn ghost">
              Tous les projets <span className="arrow">→</span>
            </Link>
          </Reveal>
          <div className="projects-grid">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ============ CONTACT ============ */}
      <section className="section" id="contact">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2 className="title-lg">Créons vos prochains projets <em>ensemble</em>.</h2>
            <a className="big" href={`mailto:${site.email}`}>{site.email}</a>
            <div className="contact-list">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  <span>{s.label}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
