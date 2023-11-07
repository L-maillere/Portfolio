import TitleWrapper from "../UtilsComponents/TitleWrapper/TitleWrapper";

function ContactForm() {

  return (
    <section className="contact-form">
      <TitleWrapper title="Contactez-moi" level="h1" />
      <form action="https://formspree.io/f/xbjvbpag" method="POST">
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" autoComplete="name" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" autoComplete="email" required />

        <label htmlFor="phone">Téléphone :</label>
        <input type="tel" id="phone" name="phone" autoComplete="tel" />

        <div className="text-and-submit">
          <label htmlFor="subject">Objet :</label>
          <select id="subject" name="subject">
            <option value="info">Demande d'information</option>
            <option value="freelance">Projet freelance</option>
            <option value="job">Opportunité d'emploi</option>
          </select>

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required></textarea>

          <div className="consent">
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">J'accepte la politique de confidentialité.</label>
          </div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;