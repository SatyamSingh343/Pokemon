// Function to fetch the initial list of Pokemon
export const fetchPokemonList = async (limit = 150) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw error;
  }
};

// Function to fetch detailed information about a specific Pokemon
export const fetchPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching Pokemon details:`, error);
    throw error;
  }
};

// Function to fetch a specific Pokemon by ID or name
export const fetchPokemonById = async (idOrName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching Pokemon ${idOrName}:`, error);
    throw error;
  }
};