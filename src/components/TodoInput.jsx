import React from 'react'

const TodoInput = ({greeting}) => {
  return (
    <header>
        <input type="text" placeholder='Enter todo...'/>
        <button>Add</button>
    </header>
  )
}

export default TodoInput