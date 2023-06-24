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
    // get value from select with id of `quantity`
    const quantity = document.querySelector(`#quantity`).value;
    // get value from input with id of `description`
    const description = document.querySelector(`#description`).value;
    // create a new item object with the values from the form
    const newItem = {
      id: items.length + 1,
      quantity,
      description,
      packed: false,
    };
    // add the new item to the items array
    setItems([...items, newItem]);
    // clear the form
    document.querySelector(`#quantity`).value = ``;
    document.querySelector(`#description`).value = ``;
    console.log(`submitted`);
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
