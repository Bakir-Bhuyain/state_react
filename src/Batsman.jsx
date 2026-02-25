import { useState } from "react";

export default function Batsman(){
      const [runs, setRuns] = useState(0);
      const [sixes, setSixes]= useState(0);
      const handleBatsmanRuns = ()=>{
            const newRuns = runs + 1;
            setRuns(newRuns);
      }

      const handle4Runs = ()=>{
            const newRuns = runs + 4;
            setRuns(newRuns);
      }

      const handleSixes = () =>{
            const sixesCount = sixes + 1;
            setSixes(sixesCount);
            const countSix = runs + 6;
            setRuns(countSix);
      }



      const playGround ={
            border: '2px solid goldenrod',
            borderRadius: '10px'
      }
      return(
            <div style={playGround}>
                  <h1>Player: Bangla Batsman</h1>
                  <p>six Count: {sixes}</p>
                  <button onClick={handleSixes}>Six</button>
                  {
                    runs >50 && <p>You score 50+</p>    
                  }
                  <h2>Runs: {runs}</h2>
                  <button onClick={handleBatsmanRuns}>Count Run</button>
                  <button onClick={handle4Runs}>Count Run</button>
            </div>
      )
}