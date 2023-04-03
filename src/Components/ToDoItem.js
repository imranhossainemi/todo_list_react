import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button onClick={() => delTodo(itemProp.id)} type="button">
        Delete
      </button>

    </>
    {itemProp.title}
  </li>
);

ToDoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
};

export default ToDoItem;
