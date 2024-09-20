import React, { useState } from 'react';

const TodoCard = ({ children, handleDeleteTodos, handleEditTodos, index }) => { 

    const [showInput, setShowInput] = useState(false);
    const [newInput, setNewInput] = useState('')

    return (
        <div>
        <li className="todoItem">
            <p>{children}</p>
            <div className="actionsContainer">
            {showInput &&
                <div>
                    <input value={newInput} onChange={(e) => setNewInput(e.target.value)} className='border-2 border-gray-400 rounded-[7px]' type="text"/>
                    <button onClick={() => {
                            handleEditTodos(newInput, index);
                            setShowInput(prev => !prev);
                    }} className='font-sans p-2'>Add</button>
                </div>
            }
            <button onClick={() => {
                setShowInput(prev => !prev);
                }}>
                <i className="fa-regular fa-pen-to-square"></i>
                </button>

            <button onClick={() => {handleDeleteTodos(index)}}>
                <i className="fa-solid fa-trash cursor-pointer"></i>
            </button>
            </div>
        </li>
        </div>
    );
};

export default TodoCard;
