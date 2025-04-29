import '../styles/TypeFilter.css';

function TypeFilter({ types, selectedType, onSelectType }) {
  const handleChange = (e) => {
    onSelectType(e.target.value);
  };

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

  return (
    <div className="type-filter">
      <select
        value={selectedType}
        onChange={handleChange}
        className="type-select"
        aria-label="Filter by Pokémon type"
      >
        <option value="">All Types</option>
        {types.map(type => (
          <option 
            key={type} 
            value={type}
            style={{ backgroundColor: typeColors[type] || '#ddd' }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TypeFilter;