const Board = ({pokeList}) => {
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

export default Board