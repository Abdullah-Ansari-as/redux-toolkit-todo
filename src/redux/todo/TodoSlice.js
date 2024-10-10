import { createSlice, nanoid } from '@reduxjs/toolkit' // nanoid just unique id deta hai

const initialState ={
    todos: [{id: 1, text: 'Hello'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // nanoid just unique id deta hai
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((val) => val.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer