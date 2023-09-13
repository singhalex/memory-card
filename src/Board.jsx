import Grid from "./Grid";
import StartSceen from "./StartScreen";

const Board = ({ pokeList, handleClick, handleStart, gameOver }) => {
  return gameOver ? (
    <StartSceen handleStart={handleStart} />
  ) : (
    <Grid pokeList={pokeList} handleClick={handleClick} />
  );
};

export default Board;
