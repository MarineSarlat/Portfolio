"use client";

import { useState } from "react";
import { site } from "@/data/site";

// Version simple : le formulaire ouvre le logiciel de messagerie avec le message pré-rempli.
// Pour un envoi direct sans messagerie, branche un service comme Formspree ou EmailJS.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[Portfolio] ${data.get("sujet")} — ${data.get("nom")}`;
    const body = `${data.get("message")}\n\n—\n${data.get("nom")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" required placeholder="Nom" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="vous@exemple.fr" autoComplete="email" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="sujet">Sujet</label>
        <select id="sujet" name="sujet" defaultValue="Nouveau projet">
          <option>Nouveau projet</option>
          <option>Stage / emploi</option>
          <option>Collaboration</option>
          <option>Autre</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"  />
      </div>
      <button className="btn" type="submit">
        Envoyer le message <span className="arrow">→</span>
      </button>
    
    </form>
  );
}
