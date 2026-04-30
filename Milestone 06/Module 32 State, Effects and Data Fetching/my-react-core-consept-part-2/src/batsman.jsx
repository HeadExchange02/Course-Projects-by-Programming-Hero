import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const counterStyle = {
        border: '3px solid green',
    }

    return(
        <div style={counterStyle}>
            <h3>Team: Bangladesh</h3>
            <h1>Runs: {runs}</h1>
            {
                runs >= 50 && <p>You Scored Half Century</p>
            }
            
            {
                runs >= 100 && <p>You Scored Century</p>
            }
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleFour}>Four</button>
        </div>
    )
}