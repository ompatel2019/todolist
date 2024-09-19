import React from 'react'
import TodoCard from './TodoCard'

const TodoList = () => {
    let todos = [
        'Finish learning React',
        'Eat more fruits and vege', 
        'Pick up kids from school'
    ]
  return (
    <>
        <ul className='main'>
            {todos.map((todo,index) => { 
                return ( 
                    <TodoCard key={index}>
                        {todo}
                    </TodoCard>
                )
            })}
        </ul>
    </>
  )
}

export default TodoList