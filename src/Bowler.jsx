import {  useState } from "react"

export default function Bowler(){
      const [over, useOver] = useState(0);
      const [ball, useBall] = useState(0);
      const bowlerBall =() =>{
            const newBall = ball + 1;
            useBall(newBall);
      }
      const overDone = ()=>{
            const ballDone = over + 1;
            useOver(ballDone)
            // const done = ball + 1;
            // useBall(ballDone)
(done)
      }





      const bowlerStyle ={
            border: '2px solid green'
      }
      return(
            <div style={bowlerStyle}>
                  <p>over complete : {over}</p>
                  {
                        ball>=6 && <p>You Finished your over:{overDone}</p>
                  }
                  <h1>Bowl Count : {ball}</h1>
                  <button onClick={bowlerBall}>Ball: </button>
            </div>
      )
}