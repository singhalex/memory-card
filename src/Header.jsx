const Header = ({currentScore, highScore}) => {
    return (
        <div className='header'>
            <div>
                <h1 id="title">PokeShuffle</h1>
            </div>
            <div className='scoreboard'>
                <p>Current Score: {currentScore}</p>
                <p>High Score: {highScore}</p>
            </div>
        </div>
    );
}
 
export default Header;