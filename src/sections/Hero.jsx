import "../styles/Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">Lúmina Studio</span>

          <h1>Realce sua beleza com sofisticação e naturalidade.</h1>

          <p>
            Experiências exclusivas em estética e bem-estar com atendimento
            personalizado, tecnologia avançada e cuidado em cada detalhe.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Agendar avaliação</button>

            <button className="secondary-btn">Conhecer serviços</button>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={"./stockImage1.jpg"} alt="Beauty" className="hero-image" />

          <div className="hero-card">
            <p>
              Atendimento premium focado em conforto, autoestima e bem-estar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
