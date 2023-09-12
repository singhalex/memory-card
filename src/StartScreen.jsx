import { useState } from "react";

const StartSceen = ({handleStart}) => {
    const [value, setValue] = useState(9);

    return (
        <div className="start-screen">
            <form>
                <label htmlFor="poke-number">How many Pokemon can you remember? (Max 150)</label>
                <input
                    type="number"
                    id="poke-number"
                    name="poke-number"
                    min="1"
                    max="150"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
                <button type="submit" onClick={(e) => handleStart(e, value)}>Start Game</button>
            </form>
            <p>Don't click on the same Pokemon more than once. How many can you remember?</p>
        </div>
    );
}
 
export default StartSceen;