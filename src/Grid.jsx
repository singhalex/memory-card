import Card from "./Card";

const Grid = ({pokeList, handleClick}) => {
    return (
        <div className="board">
        {pokeList.map((poke) => {
            return (
                <Card
                    key={poke.id}
                    name={poke.name}
                    sprite={poke.sprite}
                    id= {poke.id}
                    handleClick={handleClick}
                />
            )
        })}
      </div>
    );
}
 
export default Grid;