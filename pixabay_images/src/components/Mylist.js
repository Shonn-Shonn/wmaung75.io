import React, { useState } from "react";
import "../Mylist.css";

function Mylist(props) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput(" ");
    console.log(input);
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}

export default Mylist;
