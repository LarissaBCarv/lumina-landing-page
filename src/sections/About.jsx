import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <div className="about-image">
          <img src="/aboutImage.jpg" alt="Studio" />
        </div>

        <div className="about-content">
          <span className="about-subtitle">Sobre a Lúmina</span>

          <h2>
            Cada detalhe foi pensado para transformar cuidado em experiência.
          </h2>

          <p>
            Na Lúmina Studio, acreditamos que beleza vai além da estética.
            Criamos um ambiente sofisticado, acolhedor e minimalista, onde cada
            atendimento é conduzido com atenção, leveza e propósito.
          </p>

          <p>
            Nossa missão é proporcionar experiências que elevem autoestima,
            bem-estar e confiança de forma natural e personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}
