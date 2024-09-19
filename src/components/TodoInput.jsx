import React, { useState } from 'react'

const TodoInput = ({handleAddTodos}) => {

    const [todoValue, setTodoValue] = useState('');
    const [invalidShow, setInvalidShow] = useState(false)

    const toggleSetInvalidShow = () => { 
        if (invalidShow) { 
            setInvalidShow(false);
        } else {
            setInvalidShow(true);
        }
    }

    return (
        <header className=''>
            {invalidShow && 
                <div className='bg-red-400 p-4 absolute flex justify-between w-[50%]'>
                    <p>Text is empty!</p>
                    <i onClick={toggleSetInvalidShow} className="fa-solid fa-xmark cursor-pointer"></i>
                </div>
            }
            <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} type="text" placeholder='Enter todo...'/>
            <button onClick={() => {
                if (todoValue === '') { 
                    toggleSetInvalidShow()
                } else {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }
            }}>Add</button>
        </header>
    )
}

export default TodoInput
