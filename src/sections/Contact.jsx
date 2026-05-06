import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contato">
        <div className="contact-container">
          <span className="contact-subtitle">Contato</span>

          <h2>Sua experiência de cuidado começa aqui.</h2>

          <p>
            Entre em contato e descubra um atendimento pensado para valorizar
            sua beleza com naturalidade, leveza e sofisticação.
          </p>

          <button className="contact-button">Agendar avaliação</button>

          <div className="contact-info">
            <span>contato@luminastudio.com</span>

            <span>(12) 99999-9999</span>

            <span>São José dos Campos • SP</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <img src="/logo.png" alt="Lúmina Studio" className="footer-logo" />

          <span>© 2026 Lúmina Studio. Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
