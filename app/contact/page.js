import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Un projet, une question, une collaboration ? Écris-moi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="title-xl">
            Créons vos prochains projets <em>ensemble</em>.
          </h1>
        </div>
      </section>
      <section style={{ paddingBottom: "clamp(70px, 10vw, 140px)" }}>
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <p className="lead">
              Un projet, une question, une envie de collaboration ? Écrivez-moi, je vous réponds avec
              plaisir.
            </p>
            <a className="big" href={`mailto:${site.email}`}>{site.email}</a>
            <div className="contact-list">
              <div>
                <span>Localisation</span>
                <span>{site.location}</span>
              </div>
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  <span>{s.label}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
