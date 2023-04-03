/* eslint-disable react/prop-types */
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todosProps, handleChange }) => (
  <ul>
    {todosProps.map((todo) => (
      <ToDoItem key={todo.id} itemProp={todo} handleChange={handleChange} />
    ))}
  </ul>
);

export default ToDoList;
