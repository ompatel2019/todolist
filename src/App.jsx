import React, { useState} from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  };

  const handleEditTodos = (newInput, index) => { 
    const newTodoList = [...todos];
    newTodoList[index] = newInput;
    setTodos(newTodoList);
  };
  
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos} />
    </>
  );
};

export default App;
