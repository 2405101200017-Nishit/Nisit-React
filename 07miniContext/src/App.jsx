import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProcider"

function App() {
 

  return (
    <UserContextProvider>
    <h1>React | Nishit </h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
