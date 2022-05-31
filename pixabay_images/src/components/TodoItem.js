import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-row">
      <p>{props.todo.input}</p>
    </div>
  );
}

export default TodoItem;
