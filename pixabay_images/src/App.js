import React, { useState } from "react";
import MyTodo from "./components/MyTodo";
import List from "./components/List";
import "./Mylist.css";

function App() {
  const [todos, setTodo] = useState([]);
  const deleteTodo = (id) => {
    let cutTodo = todos.filter((todo) => todo.id !== id);
    setTodo(cutTodo);
    console.log(cutTodo);
  };

  const add = (text) => {
    let id = todos.length + 1;
    let todo = { id: id, text: text, completed: false };
    setTodo([todo, ...todos]);
  };

  return (
    <div className="todolist">
      <h1>TodoLists</h1>
      <MyTodo todo={todos} add={add} />
      {todos.map((todo, index) => {
        return <List key={index} todo={todo} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default App;
