import Card from "./Card"

function App(){
  let myObj = {
    name : 'Nisit',
    age : 20
  }
  let newArr = [1, 2, 3, 4]
  return (
    <>
    <h1 className="bg-green-400 p-4 rounded-xl ">Tailwind Test</h1>
    <Card username='Nisit' someObj={myObj} someArr={newArr}/>
    <Card />
    </>
  )
}

export default App