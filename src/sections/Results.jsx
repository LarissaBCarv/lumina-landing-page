import "../styles/Results.css";

export default function Results() {
  return (
    <section className="testimonials-section" id="resultados">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Resultados</span>

          <h2>Experiências que transformam cuidado em confiança.</h2>
        </div>

        <div className="testimonial-featured">
          <p className="featured-quote">
            “Uma experiência sofisticada, acolhedora e extremamente cuidadosa.
            Cada detalhe transmite profissionalismo e leveza.”
          </p>

          <span className="featured-name">— Mariana Costa</span>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “O ambiente transmite calma e elegância. Tudo foi pensado com
              muito cuidado.”
            </p>

            <span>— Fernanda Alves</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Atendimento impecável e resultados extremamente naturais. Me
              senti confortável do início ao fim.”
            </p>

            <span>— Juliana Martins</span>
          </div>
        </div>
      </div>
    </section>
  );
}
