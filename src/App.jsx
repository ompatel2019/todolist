import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {

    const [todos, setTodos] = useState([])
    

    function handleAddTodos(newTodo) { 
      const newTodoList = [...todos, newTodo];
      setTodos(newTodoList);
    }

    return (
      <>
        <TodoInput handleAddTodos={handleAddTodos}/>
        <TodoList todos={todos}/>
      </>
      
    )
}

export default App