import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete(state, action) {
            const toogledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toogledTodo.completed = !toogledTodo.completed
        },
        selectAll(state) {
            state.todos.map(todo => todo.completed = true)
        },
        canselSelectAll(state) {
            state.todos.map(todo => todo.completed = false)
        },
        deleteChecked(state) {
            state.todos = state.todos.filter(todo => todo.completed !== true)
        }
    },
})

export const {addTodo, removeTodo, toggleTodoComplete, selectAll, deleteChecked, canselSelectAll} = todoSlice.actions
export default todoSlice.reducer