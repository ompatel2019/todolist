import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, handleDeleteTodos, handleEditTodos }) => { 
  return (
    <>
      <ul className="main">
        {todos.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              index={index}
              handleDeleteTodos={handleDeleteTodos} 
              handleEditTodos={handleEditTodos} 
            >
              {todo}
            </TodoCard>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
