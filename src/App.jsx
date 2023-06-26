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
      inputOrder: items.length + 1,
      quantity: quantity,
      description: description,
      packed: false,
    };
    setItems([...items, newItem]);
    setQuantity(1);
    setDescription('');
  }

  // Handle packed state of each item
  function handlePackedChange(id) {
    // Create a new array with the same items, but with the packed state of the selected item toggled
    const newItems = items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item));
    setItems(newItems);
  }

  function handleRemoveItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function calculatePackedItems() {
    return items.filter((item) => item.packed).length;
  }

  function calculatePercentagePacked() {
    return Math.round((calculatePackedItems() / items.length) * 100);
  }

  function handleSort(e) {
    const sortBy = e.target.value;
    setItems((currentItems) => {
      const sortedItems = [...currentItems];
      if (sortBy === 'input') {
        sortedItems.sort((a, b) => a.inputOrder - b.inputOrder);
        return sortedItems;
      } else if (sortBy === 'description') {
        sortedItems.sort((a, b) => {
          if (a.description.toLowerCase() < b.description.toLowerCase()) {
            return -1;
          } else if (a.description.toLowerCase() > b.description.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });
        return sortedItems;
      } else if (sortBy === 'packed') {
        sortedItems.sort((a, b) => {
          if (a.packed < b.packed) {
            return -1;
          } else if (a.packed > b.packed) {
            return 1;
          } else {
            return 0;
          }
        });
        return sortedItems;
      }
    });
  }

  function handleClearList() {
    setItems([]);
  }

  const numOfItems = items.length;
  const numOfPacked = calculatePackedItems();
  const percentPacked = numOfItems > 0 ? calculatePercentagePacked() : 0;

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
      <PackingList
        items={items}
        onPackedChange={handlePackedChange}
        onRemoveItem={handleRemoveItem}
        onClearList={handleClearList}
        onSort={handleSort}
      />
      <Stats numOfItems={numOfItems} numOfPacked={numOfPacked} percentPacked={percentPacked} />
    </div>
  );
}

export default App;
