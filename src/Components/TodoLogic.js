import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';
import Header from './Header';

const TodoLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'ToDo List',
      completed: false,
    },
    {
      id: uuidv4(),
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
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="toDo">
      <Header />
      <InputToDo
        addTodoItem={addTodoItem}
      />
      <ToDoList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    </div>
  );
};

export default TodoLogic;
