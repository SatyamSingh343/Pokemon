import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import TypeFilter from './components/TypeFilter'
import PokemonList from './components/PokemonList'
import LoadingIndicator from './components/LoadingIndicator'
import ErrorMessage from './components/ErrorMessage'
import { fetchPokemonList, fetchPokemonDetails } from './services/api'
import './styles/App.css'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setIsLoading(true);
        // Fetch the list of first 150 Pokemon
        const pokemonList = await fetchPokemonList(150);
        
        // Fetch details for each Pokemon
        const detailedPokemon = await Promise.all(
          pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url))
        );
        
        // Extract all unique types
        const allTypes = new Set();
        detailedPokemon.forEach(pokemon => {
          pokemon.types.forEach(type => {
            allTypes.add(type.type.name);
          });
        });
        
        setAllPokemon(detailedPokemon);
        setDisplayedPokemon(detailedPokemon);
        setTypes(Array.from(allTypes).sort());
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch Pokémon data. Please try again later.');
        setIsLoading(false);
        console.error('Error fetching Pokémon:', err);
      }
    };

    loadPokemon();
  }, []);

  useEffect(() => {
    // Filter Pokemon based on search term and selected type
    const filteredPokemon = allPokemon.filter(pokemon => {
      const matchesSearchTerm = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === '' || 
        pokemon.types.some(type => type.type.name === selectedType);
      
      return matchesSearchTerm && matchesType;
    });
    
    setDisplayedPokemon(filteredPokemon);
  }, [searchTerm, selectedType, allPokemon]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="search-filter-container">
          <SearchBar onSearch={handleSearch} />
          <TypeFilter 
            types={types} 
            selectedType={selectedType} 
            onSelectType={handleTypeFilter} 
          />
        </div>
        
        {isLoading ? (
          <LoadingIndicator />
        ) : displayedPokemon.length > 0 ? (
          <PokemonList pokemon={displayedPokemon} />
        ) : (
          <div className="no-results">
            <h2>No Pokémon found</h2>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;