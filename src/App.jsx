import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Function to save the todos array in local storage
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  // Function to add a new todo item
  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  };

  // Function to delete a todo item based on index
  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  };

  // Function to edit a todo item at a specified index
  const handleEditTodos = (newInput, index) => {
    const newTodoList = [...todos];
    newTodoList[index] = newInput;
    setTodos(newTodoList);
    persistData(newTodoList);
  };

  // useEffect to load the todos from local storage when the component mounts
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }

    // Correctly parse the data and set state
    const parsedTodos = JSON.parse(localTodos).todos;
    setTodos(parsedTodos);
  }, []); 

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        todos={todos}
      />
    </>
  );
};

export default App;
