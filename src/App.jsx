import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      quantity: quantity,
      description: description,
      packed: false,
    };
    setItems([...items, newItem]);
    setQuantity(1);
    setDescription('');
  }

  return (
    <div className='app font-body text-navy grid w-full h-screen'>
      <Header />
      <Form
        onFormSubmit={handleFormSubmit}
        quantity={quantity}
        description={description}
        onDescriptionChange={handleDescriptionChange}
        onQuantityChange={handleQuantityChange}
      />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
