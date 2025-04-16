import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      setItems([...items, { text, done: false }]);
      setText('');
    }
  };

  const handleToggle = (index) => {
    const newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="container">
      <h2>New Item</h2>
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>

      <h1 className="todo-heading">Todo List</h1>
      {items.map((item, index) => (
        <div key={index} className="todo-item">
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => handleToggle(index)}
          />
          <span className={`item-text ${item.done ? 'done' : ''}`}>
            {item.text}
          </span>
          <button className="delete-button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
