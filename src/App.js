import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Shirt", quantity: 12, packed: true },
  { id: 2, description: "Shoes", quantity: 12, packed: false },
  { id: 2, description: "Console", quantity: 12, packed: false },
  { id: 2, description: "Laptop", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  /* 
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
*/

  return (
    <div className="app">
      <Logo />
      <Form />
      <PacketList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🏖️ Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you want for your 😍 trip?</h3>
    </div>
  );
}

function PacketList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
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
