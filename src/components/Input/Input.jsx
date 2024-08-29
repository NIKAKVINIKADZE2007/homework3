import React, { useContext, useState } from 'react';
import AmmountContext from '../../UseContext';

import style from './Input.module.scss';
import apiRequest from '../../apiRequest';
const Input = () => {
  const { items, setError, setItems } = useContext(AmmountContext);
  const [Tododes, setTododes] = useState('');

  //damateba
  const addTodo = async (Todo) => {
    const url = 'http://localhost:3500/tasks';

    const option = {
      method: 'POST',
      body: JSON.stringify({
        //ro vpostavdi da vshlidi id meordeboda xolme amitom cota meti mivumate
        id: (items.length + 10).toString(),
        title: 'new Todo',
        description: Todo,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    };

    const data = await apiRequest(url, option);
    if (data.error) {
      setError(data.error);
    } else {
      setItems((prev) => [...prev, data]);
    }
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type='text'
        placeholder='Add a new task'
        onChange={(event) => setTododes(event.target.value)}
      />
      <button
        onClick={() => {
          Tododes.trim() ? addTodo(Tododes) : console.log('add Todo');
        }}
        className={style.addBtn}
      >
        Add
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2001_31)'>
            <path
              d='M7.98367 1.45158C9.27559 1.45158 10.5385 1.83468 11.6127 2.55244C12.6869 3.27019 13.5241 4.29037 14.0185 5.48395C14.5129 6.67754 14.6423 7.99092 14.3902 9.25802C14.1382 10.5251 13.5161 11.689 12.6026 12.6026C11.689 13.5161 10.5251 14.1382 9.25801 14.3903C7.99091 14.6423 6.67753 14.5129 5.48394 14.0185C4.29036 13.5241 3.27018 12.6869 2.55243 11.6127C1.83467 10.5385 1.45157 9.2756 1.45157 7.98368C1.45826 6.25332 2.14861 4.59574 3.37217 3.37218C4.59573 2.14862 6.25331 1.45827 7.98367 1.45158ZM7.98367 5.77648e-06C6.40605 0.00645971 4.86572 0.480174 3.55711 1.36134C2.24851 2.24252 1.2303 3.49164 0.631045 4.95102C0.031785 6.4104 -0.121666 8.01461 0.190064 9.56114C0.501794 11.1077 1.26473 12.5272 2.38256 13.6404C3.50038 14.7537 4.92298 15.5108 6.47076 15.8162C8.01855 16.1217 9.62212 15.9617 11.079 15.3564C12.536 14.7512 13.7809 13.7279 14.6567 12.4158C15.5326 11.1036 16 9.5613 16 7.98368C16 6.93249 15.7924 5.89165 15.3892 4.92089C14.9859 3.95014 14.3949 3.06857 13.6501 2.32679C12.9053 1.58501 12.0213 0.997618 11.0489 0.598327C10.0765 0.199035 9.03484 -0.00429452 7.98367 5.77648e-06Z'
              fill='#F2F2F2'
            />
            <path
              d='M11.7069 7.38126H8.49534V4.16965H7.41391V7.38126H4.19867V8.46268H7.41391V11.6743H8.49534V8.46268H11.7069V7.38126Z'
              fill='#F2F2F2'
            />
          </g>
          <defs>
            <clipPath id='clip0_2001_31'>
              <rect width='16' height='16' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Input;
