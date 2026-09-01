import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  // #region agent log
  fetch('http://127.0.0.1:7291/ingest/123dea7d-2d38-4d75-95a2-204a53a40061',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'00990d'},body:JSON.stringify({sessionId:'00990d',runId:'post-fix',location:'App.jsx:render',message:'App rendered',data:{hasTodos:typeof Todos==='function',hasAddTodo:typeof AddTodo==='function'},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  return (
    <>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
