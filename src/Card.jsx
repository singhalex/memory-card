const Card = ({name, sprite}) => {
    return (
        <div className='poke-card'>
            <img src={sprite} alt={name} />
            <h4>{name.toUpperCase()}</h4>
        </div>
      );
}
 
export default Card;