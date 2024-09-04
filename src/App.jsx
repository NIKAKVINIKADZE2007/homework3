import { useState } from 'react';
import { AmmountProvider } from './UseContext';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Todos from './components/Todo/Todos';

import styles from './App.module.css';
import './mixin.scss';

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
