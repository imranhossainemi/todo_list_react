/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const InputToDo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };
  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          id="task"
          name="task"
          type="text"
          placeholder="Write Task Here"
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="btnSubmit">ADD</button>
        <h2 className="msg">{message}</h2>
      </form>
    </>
  );
};

export default InputToDo;
