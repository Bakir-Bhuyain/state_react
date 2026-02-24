import './App.css'
import Batsman from'./Batsman'
import Counter from './counter'

function App() {

  function handleClick() {
    alert('i am clicked')
  }

  const handleClick3 =() =>{
    alert('handle click 3')
  }

  const handleAdd5 = (num) =>{
    const newNumber = num + 5;
    alert(newNumber)
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>Click me</button>
      {/* wrapping with the arrow function */}
      <button onClick={()=> handleAdd5(10)}>Click me</button>
      <button onClick={() => alert('click 4')}>Click me</button>
      <button onClick={function handleClickTwo() {
        alert('click 2')
      }}>Click me</button>
    </>
  )
}

export default App
