import Card from "./Card";
import { RotatingLines } from "react-loader-spinner";

const Grid = ({ pokeList, handleClick, loading }) => {
  if (loading) {
    return (
      <div id="loader">
        <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="1"
          width="200"
          visible={true}
          ariaLabel="loading"
        />
      </div>
    );
  }

  return (
    <div id="grid">
      {pokeList.map((poke) => {
        return (
          <Card
            key={poke.id}
            name={poke.name}
            sprite={poke.sprite}
            id={poke.id}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Grid;
