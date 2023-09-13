const Card = ({ name, sprite, id, handleClick }) => {
  return (
    <div
      className="poke-card"
      onClick={() => {
        handleClick(id);
      }}
    >
      <img src={sprite} alt={name} />
      <h4>{name.toUpperCase()}</h4>
    </div>
  );
};

export default Card;
