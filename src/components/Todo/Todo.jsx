import React, { useContext } from 'react';
import AmmountContext from '../../UseContext';

const Todo = () => {
  const { items } = useContext(AmmountContext);
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <button type='radio'></button>
            <p>{item.description}</p>
            <button></button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
