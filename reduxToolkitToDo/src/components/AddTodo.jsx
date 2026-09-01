import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/ToDo/todoSlice"


function AddTodo() {
// #region agent log
fetch('http://127.0.0.1:7291/ingest/123dea7d-2d38-4d75-95a2-204a53a40061',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'00990d'},body:JSON.stringify({sessionId:'00990d',location:'AddTodo.jsx:render',message:'AddTodo render before useDispatch',data:{useDispatchType:typeof useDispatch,isFn:typeof useDispatch==='function'},timestamp:Date.now(),hypothesisId:'A'})}).catch(()=>{});
// #endregion

const [input, setInput] = useState('')

const dispatch = useDispatch()

const addTodoHandler = (e) => {
  e.preventDefault()
  // #region agent log
  fetch('http://127.0.0.1:7291/ingest/123dea7d-2d38-4d75-95a2-204a53a40061',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'00990d'},body:JSON.stringify({sessionId:'00990d',location:'AddTodo.jsx:addTodoHandler',message:'form submit handler ran',data:{input,eventType:e.type,targetTag:e.target?.tagName},timestamp:Date.now(),hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  dispatch(addTodo(input))
  setInput('')
}


  return (
   <>
   <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
    type="text"
    className="bg-gray-800 rounded border
    border-gray-700 focus:border-indigo-500
    focus: ring-2 focus: ring-indigo-900 text-base
    outline-none text-gray-100 py-1 px-3 leading-8
    transition-colors duration-200 ease-in-out"
    placeholder="Enter a Todo..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />
   <button
   type="submit"
    onClick={() => {
      // #region agent log
      fetch('http://127.0.0.1:7291/ingest/123dea7d-2d38-4d75-95a2-204a53a40061',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'00990d'},body:JSON.stringify({sessionId:'00990d',runId:'post-fix',location:'AddTodo.jsx:button',message:'Add Todo button clicked',data:{buttonOutsideForm:false,input},timestamp:Date.now(),hypothesisId:'B'})}).catch(()=>{});
      // #endregion
    }}
    className="text-white bg-indigo-500 border-0 py-2 
    px-6 focus:outline-none hover:bg-indigo-600
     rounded text-lg"
   >
    Add Todo
   </button>
   </form>

   </>

  )
}

export default AddTodo