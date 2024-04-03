import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import AddItem from './AddItem.js';
import SearchItem from './SearchItem.js';
import Content from './Content.js';
import Footer from './Footer.js';

function App() {

const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);

const [newItem, setNewItem] = useState('');

const [searchItem, setSearchItem] = useState('');

useEffect(() => {
  localStorage.setItem('shoppingList', JSON.stringify(items));
}, [items]);

const handleCheck = (id) => {
    const newItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(newItems);
};

const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newItems = [...items, {id: items.length > 0 ? (items[items.length - 1].id + 1) : 1, checked: false, content: newItem}];
  setItems(newItems);
  setNewItem('');
};

  const title = "Shopping List";

  return (
    <div className="App">
      <Header title={title} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <Content items={items.filter(item => item.content.toLowerCase().includes(searchItem.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
