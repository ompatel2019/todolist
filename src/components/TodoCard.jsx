import React from 'react'

const TodoCard = (props) => {
    const {children} = props
    return (
        <div>
            <li className='todoItem'>
                <p>{children}</p>
                <div className='actionsContainer'>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </li>
        </div>
    )
}

export default TodoCard 