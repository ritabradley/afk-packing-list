import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

import './App.css';

function App() {
  return (
    <div className='app font-body text-navy grid w-full h-screen'>
      <Header />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
