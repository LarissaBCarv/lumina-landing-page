import "../styles/Services.css";

export default function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        <div className="services-header">
          <span className="services-subtitle">Serviços</span>

          <h2>
            Procedimentos pensados para valorizar sua beleza de forma natural.
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Harmonização Facial</h3>

            <p>
              Técnicas modernas para realçar traços com equilíbrio, leveza e
              naturalidade.
            </p>
          </div>

          <div className="service-card">
            <h3>Skincare Avançado</h3>

            <p>
              Protocolos personalizados para revitalização, hidratação e
              luminosidade da pele.
            </p>
          </div>

          <div className="service-card">
            <h3>Bioestimuladores</h3>

            <p>
              Estímulo natural de colágeno para firmeza, sustentação e
              rejuvenescimento.
            </p>
          </div>

          <div className="service-card">
            <h3>Procedimentos Corporais</h3>

            <p>
              Tratamentos focados em bem-estar, definição corporal e autoestima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
