import { useEffect, useState } from 'react';
import Board from './Board';
import Header from './Header';

function App() {
  // Create states
  const [pokeList, setPokeList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [numOfPoke, setNumOfPoke] = useState(9);
  
  // Fetch pokemon info from API
  const fetchPokemon = async (number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await response.json();
    return data;
  }

  // Fetch pokemon in order
  const serializedFetchPokemon = async () => {
    const newPokeList = [];

    for (let i = 1; i < (numOfPoke + 1); i++) {
      const pokemon = await fetchPokemon(i)
      newPokeList.push({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default
      })
    }

    setPokeList(shuffleArray(newPokeList));
  }

  // Randomize order
  const shuffleArray = (array) => {
    const arrayCopy = array.slice(0);

    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    return arrayCopy;
  }

  // Check Guesses
  const handleClick = (currentGuess) => {
    if (guesses.includes(currentGuess)) {
      console.log('You Lose!');
      if (currentScore > highScore) {
        setHighScore(currentScore)
      }
      setGuesses([]);
      setCurrentScore(0);
    } else {
      console.log('Good Guess');
      setCurrentScore(currentScore + 1)
      setGuesses([...guesses, currentGuess])
    }

    setPokeList(shuffleArray(pokeList))
  }
  
  // Fetch pokemon on page load
  useEffect(() => {
    serializedFetchPokemon();
  }, []);

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore}></Header>
      <Board pokeList={pokeList} handleClick={handleClick} className='board'/>
    </>
  )
}

export default App
