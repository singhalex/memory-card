import Card from "./Card";

const Board = ({pokeList, handleClick, message}) => {
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
        <h2>{message}</h2>
      </div>
    )

}

export default Board