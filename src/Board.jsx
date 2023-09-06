import Card from "./Card";

const Board = ({pokeList}) => {
    return (
      <div className="board">
        {pokeList.map((poke) => {
            return (
                <Card
                    key={poke.id}
                    name={poke.name}
                    sprite={poke.sprite}
                />
            )
        })}
      </div>
    )

}

export default Board