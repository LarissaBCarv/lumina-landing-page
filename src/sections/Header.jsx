import "../styles/Header.css";

export default function Header() {
  return (
    <header className="nav-bar">
      <nav>
        <div className="left-links">
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
        </div>
        <img src="/logoLetter.png" className="logo-nav" alt="Logo" />
        <div className="right-links">
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>
    </header>
  );
}
