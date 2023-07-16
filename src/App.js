import "https://quanxuuu.github.io/github-pages-local-storage/index.js";

import { useState, useEffect } from "react";
import { setToLocal, getFromLocal } from "./lib/localStorage.js";
import { Header, Form, List, Footer } from "./components";

import "./App.scss";

export default function App() {
  const [items, setItems] = useState(getFromLocal("items") ?? []);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirmed = window.confirm(
      "Are your sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  useEffect(() => setToLocal("items", items), [items]);

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAll={handleDeleteAll}
      />
      <Footer items={items} />
    </div>
  );
}
