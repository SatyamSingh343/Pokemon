import { useState } from 'react';
import '../styles/PokemonCard.css';

function PokemonCard({ pokemon }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Map of Pokémon types to their respective colors
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };

  // Get the primary type for the card background gradient
  const primaryType = pokemon.types[0]?.type.name || 'normal';
  const secondaryType = pokemon.types[1]?.type.name || primaryType;

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div 
      className={`pokemon-card ${!isImageLoaded ? 'loading' : ''}`}
      style={{
        background: `linear-gradient(to bottom, ${typeColors[primaryType] || '#ddd'} 0%, ${typeColors[secondaryType] || '#ddd'} 100%)`
      }}
    >
      <div className="pokemon-id">#{String(pokemon.id).padStart(3, '0')}</div>
      
      <div className="pokemon-image-container">
        {!isImageLoaded && <div className="image-placeholder"></div>}
        <img
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={`${pokemon.name} artwork`}
          className="pokemon-image"
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
      </div>
      
      <h2 className="pokemon-name">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      
      <div className="pokemon-types">
        {pokemon.types.map(typeInfo => (
          <span 
            key={typeInfo.type.name} 
            className="type-badge"
            style={{ backgroundColor: typeColors[typeInfo.type.name] || '#ddd' }}
          >
            {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;