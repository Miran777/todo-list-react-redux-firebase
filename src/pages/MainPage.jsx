import { useState } from "react";
import InputField from "../Components/InputField";
import TodoList from "../Components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo, selectAll, deleteChecked, canselSelectAll } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { removeUser } from "store/userSlice";
import { useTitle } from "hooks/useTitle";

export const MainPage = () => {
  const [text, setText] = useState('')
  const [selectedAll, setSelectedAll] = useState(false)
  const dispatch = useDispatch()
  const {isAuth, email} = useAuth() 
  const pageTitle = useTitle('Todo list')
  


  const swapSelectAll = () => {
    if (!selectedAll) {
      return dispatch(selectAll())
    }
    return dispatch(canselSelectAll())
  }

  const addTask = () => {
    if (text !== '') {
      dispatch(addTodo({text}))
      setText('')
    }
  }



  return isAuth ? (
    <div className="Main">
      <button className="btn-log-out" onClick={() => dispatch(removeUser())}>Log out</button>
      <div className="wrap-1">
        <div className="wrap">
          <div className="content">
            <h1>My todo list:</h1>
            <InputField text={text} handleInput={setText} handleSubmit={addTask} />

            <TodoList />

            <div className="btns">
              <input className="checkbox" type='checkbox'
              checked={selectedAll}
              onChange={e => {
                setSelectedAll(!selectedAll)
                swapSelectAll()}} />
              <button className="button"
              onClick={() => {
                dispatch(deleteChecked())
                setSelectedAll(false)
                }}>delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <Navigate to='/login' />
}

