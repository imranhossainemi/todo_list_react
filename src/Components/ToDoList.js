/* eslint-disable react/prop-types */
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul className="list">
    {todosProps.map((todo) => (
      <ToDoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default ToDoList;
