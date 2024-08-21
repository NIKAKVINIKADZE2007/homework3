import React, { useContext } from 'react';
import AmmountContext from '../../UseContext';
import style from './Todo.module.scss';
import apiRequest from '../../apiRequest';
const Todo = () => {
  const { items, setError, setItems } = useContext(AmmountContext);
  const TodoCompliteToggle = async (id, completed) => {
    const url = `http://localhost:3500/tasks/${id}`;

    const option = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ completed: completed }),
    };

    const data = await apiRequest(url, option);

    if (data.error) {
      setError(data.error);
    } else {
      setItems((item) => (item.id == id ? { ...item, data } : item));
    }
  };

  return (
    <ul className={style.ul}>
      {items.map((item) => {
        return (
          <li className={item.completed ? style.complited : ''} key={item.id}>
            <input
              type='checkbox'
              onChange={() => {
                TodoCompliteToggle(item.id, !item.completed);
              }}
            />
            <p>{item.description}</p>
            <button></button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
