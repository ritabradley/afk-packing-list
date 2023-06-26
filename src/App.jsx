import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

import './App.css';

function App() {
  const [items, setItems] = useState([]);

  function onFormSubmit(e) {
    e.preventDefault();
    const quantity = document.querySelector(`#quantity`).value;
    const description = document.querySelector(`#description`).value;
    const newItem = {
      id: items.length + 1,
      quantity,
      description,
      packed: false,
    };
    setItems([...items, newItem]);
    // set the quantity field back to default
    document.querySelector(`#quantity`).value = 1;
    // clear the description field
    document.querySelector(`#description`).value = '';
  }

  return (
    <div className='app font-body text-navy grid w-full h-screen'>
      <Header />
      <Form onSubmit={onFormSubmit} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
