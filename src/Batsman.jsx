import { useState } from "react";

export default function handleBatsman(){
      const [runs, setRuns] = useState(0);
      const handleBatsmanRuns = ()=>{
            const newRuns = runs + 1;
            setRuns(newRuns);
      }

      const handle4Runs = ()=>{
            const newRuns = runs + 4;
            setRuns(newRuns);
      }




      const playGround ={
            border: '2px solid goldenrod',
            borderRadius: '10px'
      }
      return(
            <div style={playGround}>
                  <h2>Runs: {runs}</h2>
                  <button onClick={handleBatsmanRuns}>Count Run</button>
                  <button onClick={handle4Runs}>Count Run</button>
            </div>
      )
}