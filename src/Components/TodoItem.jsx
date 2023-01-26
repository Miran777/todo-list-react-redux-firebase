import { useDispatch } from "react-redux"
import { removeTodo, toggleTodoComplete } from "../store/todoSlice"

const TodoItem = ({text, completed, id}) => {
    const dispatch = useDispatch()
    

    return (
        <li className="todo-item">
            <input className="checkbox"  type="checkbox" 
            checked={completed} 
            onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <span>{text}</span>
            <span className="delete" onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}

export default TodoItem