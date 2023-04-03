/* eslint-disable react/prop-types */
import React from 'react';

const ToDoItem = ({ itemProp, handleChange }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <button type="button"> Delete </button>
    {itemProp.title}
  </li>
);

export default ToDoItem;
