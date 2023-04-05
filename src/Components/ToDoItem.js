import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className="listItem">
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
      className="taskCmp"
    />
    {itemProp.title}
    <button onClick={() => delTodo(itemProp.id)} type="button" className="taskDel">
      Delete
    </button>
  </li>
);

ToDoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
};

export default ToDoItem;
