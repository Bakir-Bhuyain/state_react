import { useState } from "react"

export default function Counter (){
      const [count, setCount] = useState(0);

      const handleAdd = () =>{
            const newCount = count + 1;
            setCount(newCount)
      }

      // function handleMinus(){
      //       let [minus, setMinus] = useState(count)
      //       let newMinus = () =>{
      //             let newMinusCount = count- 1;
      //             setMinus(newMinusCount)
      //       }
      // }
      const bodyStyle ={
            border :'2px solid blue'
      }
      return(
            <div style={bodyStyle}>
                  <h3>count: {count}</h3>
                  <button onClick={handleAdd}>Add</button>
            </div>

            // <div style={bodyStyle}>
            //       <h3>Count: </h3>
            //             <button>Minus</button>
            // </div>
      )
}