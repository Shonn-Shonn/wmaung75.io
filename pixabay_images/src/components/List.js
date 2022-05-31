import React from "react";
import "../Mylist.css";
import { FaTrashAlt } from "react-icons/fa";

function List(props) {
  const { deleteTodo, todo } = props;
  return (
    <div className="list">
      <p>
        {props.todo.text}
        <FaTrashAlt className="delete" onClick={() => deleteTodo(todo.id)} />
      </p>
    </div>
  );
}

export default List;
