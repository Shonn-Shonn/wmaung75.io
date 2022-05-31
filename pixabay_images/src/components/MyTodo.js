import React, { useState } from "react";
import "../Mylist.css";

function MyTodo(props) {
  const { deleteTodo } = props;
  const [input, setInput] = useState("");
  const addTo = (e) => {
    e.preventDefault();
    setInput("");
    props.add(input);
    console.log(input);
  };
  return (
    <div>
      <form onSubmit={addTo}>
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo-button" onClick={deleteTodo}>
          Add
        </button>
      </form>
    </div>
  );
}

export default MyTodo;
