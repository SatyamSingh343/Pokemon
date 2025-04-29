import '../styles/LoadingIndicator.css';

function LoadingIndicator() {
  return (
    <div className="loading-container">
      <div className="pokeball-spinner">
        <div className="pokeball">
          <div className="pokeball-top"></div>
          <div className="pokeball-middle"></div>
          <div className="pokeball-bottom"></div>
          <div className="pokeball-button"></div>
        </div>
      </div>
      <p className="loading-text">Loading Pokémon...</p>
    </div>
  );
}

export default LoadingIndicator;