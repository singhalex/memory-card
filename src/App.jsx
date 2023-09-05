import { useEffect, useState } from 'react'

function App() {
  // Create an array of Pokemon in state
  const [pokeList, setPokeList] = useState([]);
  
  // Grab pokemon info from API
  const fetchPokemon = async (numOfPoke) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numOfPoke}`);
    const pokemon = await response.json();
    return pokemon;
  }

  const serializedFetchPokemon = async () => {
    const newPokeList = []
    for (let i = 1; i < 11; i++) {
      const data = await fetchPokemon(i)
      newPokeList.push({
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default
      })
      
      console.log(typeof(data.name))
    }

    setPokeList(newPokeList)
  }


  
  // Fetch pokemon on page load
  useEffect(() => {
    serializedFetchPokemon();
  }, []);

  

  return (
    <>
      {pokeList.map((poke) => {
        return (
          <div key={poke?.id} className='poke-card'>
            <img src={poke?.sprite} alt={poke?.name} />
            <h4>{poke?.name.toUpperCase()}</h4>
          </div>
        )
      })}
    </>
  )
}

export default App
