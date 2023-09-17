import Grid from "./Grid";
import StartSceen from "./StartScreen";

const Board = ({ pokeList, handleClick, handleStart, gameOver, loading }) => {
  return gameOver ? (
    <StartSceen handleStart={handleStart} />
  ) : (
    <Grid pokeList={pokeList} handleClick={handleClick} loading={loading} />
  );
};

export default Board;
