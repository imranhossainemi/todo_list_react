import React, { useState } from 'react';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';

const TodoLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'ToDo List',
      completed: false,
    },
    {
      id: 2,
      title: 'Imran',
      completed: true,
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  return (
    <div>
      <InputToDo />
      <ToDoList todosProps={todos} handleChange={handleChange} />
    </div>
  );
};

export default TodoLogic;
