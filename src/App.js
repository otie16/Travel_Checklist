// import { log } from "console";
import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirt", quantity: 12, packed: true },
  { id: 4, description: "Shoes", quantity: 12, packed: false },
  { id: 5, description: "Console", quantity: 12, packed: false },
  { id: 6, description: "Laptop", quantity: 12, packed: true },
  { id: 7, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // In react we are not allowed to mutate state
    // So we can't use push
    // We must make a new copy of the state
    setItems((items) => [...items, item]);
  }
  /* 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
*/

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PacketList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🏖️ Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);

    if (!description) return;

    const newtItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newtItem);

    console.log(newtItem);
    // setItems([...items, newtItem]);
    onAddItems(newtItem);

    setDescription("");
    setQuantity(1);
    // alert("hey");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Item here?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PacketList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X</em>
    </footer>
  );
}
