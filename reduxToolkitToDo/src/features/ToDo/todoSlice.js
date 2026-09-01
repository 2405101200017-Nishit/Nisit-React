import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // #region agent log
            fetch('http://127.0.0.1:7291/ingest/123dea7d-2d38-4d75-95a2-204a53a40061',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'00990d'},body:JSON.stringify({sessionId:'00990d',location:'todoSlice.js:addTodo',message:'addTodo reducer ran',data:{payload:action.payload,todosBefore:state.todos.length},timestamp:Date.now(),hypothesisId:'C'})}).catch(()=>{});
            // #endregion
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
