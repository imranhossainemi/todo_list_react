import React from 'react';
import TodoLogic from './TodoLogic';

const TodoView = () => (
  <main>
    <TodoLogic />
    {/* <form className="form" id="form">
      <input id="task" name="task" type="text" placeholder="Write Task Here" />
      <button type="submit" className="btnSubmit">ADD</button>
    </form> */}
  </main>
);

export default TodoView;
