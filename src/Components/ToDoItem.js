/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className="listItem">
      <div className="listContent" style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          className="taskCmp"
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {updateInput}
        </span>
        <div className="btns">
          <button onClick={handleEditing} type="button" className="taskEdt">
            Edit
          </button>
          <button onClick={() => delTodo(itemProp.id)} type="button" className="taskDel">
            Delete
          </button>
        </div>
      </div>
      <input
        type="text"
        value={updateInput}
        className="textEdt"
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

ToDoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
};

export default ToDoItem;
