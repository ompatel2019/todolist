import React from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {
  const greeting = 'hello world!'
  return (
    <>
      <TodoInput/>
      <TodoList/>
    </>
    
  )
}

export default App