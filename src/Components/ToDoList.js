/* eslint-disable react/prop-types */
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <ToDoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default ToDoList;
