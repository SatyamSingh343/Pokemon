import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="/pokeball-favicon.svg" 
            alt="Pokéball logo" 
            className="logo" 
          />
          <h1 className="app-title">Pokémon Explorer</h1>
        </div>
        <p className="app-subtitle">Discover the original 150 Pokémon</p>
      </div>
    </header>
  );
}

export default Header;