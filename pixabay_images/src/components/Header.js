import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Header() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Cola and spirit",
    },
    {
      id: 2,
      cheched: false,
      item: "Lachi and orange",
    },
    {
      id: 3,
      checked: false,
      item: "Domino and ice-cream",
    },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <div>
      <main>
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id} style={{ listStyle: "none" }}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                  onDoubleClick={() => handleCheck(item.id)}
                >
                  {item.item}
                </label>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  style={{ color: "lightpink" }}
                  onClick={() => handleDelete(item.id)}
                ></FaTrashAlt>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: "2rem" }}>Your list is empty</p>
        )}
      </main>
    </div>
  );
}

export default Header;
