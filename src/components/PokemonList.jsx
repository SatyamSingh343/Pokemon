import PokemonCard from './PokemonCard';
import '../styles/PokemonList.css';

function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">
      {pokemon.map(pokemon => (
        <PokemonCard 
          key={pokemon.id} 
          pokemon={pokemon} 
        />
      ))}
    </div>
  );
}

export default PokemonList;