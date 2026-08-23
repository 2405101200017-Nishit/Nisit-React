import { useState } from "react";

function App(){

  const [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    // console.log('value added',Math.floor( Math.random() * 10) + 1 );
    //counter = counter + 1
    
   if (counter < 20){
    setCounter(counter + 1)
   }
    
    console.log("clicked, value added");
  }

  const decreaseValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    console.log("clicked, value decreased");

  }


  return (
    <>
    <h1>Nisit and React</h1>
    <h2>Counter Value : {counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={decreaseValue}
    >Decrease Value</button>
    </>
  )
}

export default App 