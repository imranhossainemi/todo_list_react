import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';
import Header from './Header';

const TodoLogic = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

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
  const setUpdate = (updateTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const v = todo;
          v.title = updateTitle;
        }
        return todo;
      }),
    );
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
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default TodoLogic;
