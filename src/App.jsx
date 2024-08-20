import { useState } from 'react';
import { AmmountProvider } from './UseContext';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Todos from './components/Todo/Todos';

import './App.module.css';

function App() {
  return (
    <>
      <Header />

      <AmmountProvider>
        <Input />
        <Todos />
      </AmmountProvider>
    </>
  );
}

export default App;
