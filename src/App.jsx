import { useEffect, useState } from 'react';
import Board from './Board';

function App() {
  // Create an array of Pokemon in state
  const [pokeList, setPokeList] = useState([]);
  
  // Fetch pokemon info from API
  const fetchPokemon = async (numOfPoke) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numOfPoke}`);
    const data = await response.json();
    return data;
  }

  // Fetch pokemon in order
  const serializedFetchPokemon = async () => {
    const newPokeList = [];
    const numOfPoke = 10;

    for (let i = 1; i < (numOfPoke + 1); i++) {
      const pokemon = await fetchPokemon(i)
      newPokeList.push({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default
      })
    }

    setPokeList(newPokeList)
  }


  
  // Fetch pokemon on page load
  useEffect(() => {
    serializedFetchPokemon();
  }, []);

  return (
    <Board pokeList={pokeList} test='Testes'/>
  )
}

export default App
