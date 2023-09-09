const Header = ({currentScore, highScore}) => {
    return (
        <div className='scoreboard'>
            <h1>Current Score: {currentScore}</h1>
            <h1>High Score: {highScore}</h1>
        </div>
    );
}
 
export default Header;