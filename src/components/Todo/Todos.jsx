import React, { useContext } from 'react';
import AmmountContext from '../../UseContext';
import Todo from './Todo';
import Notodos from './Notodos';
import style from './Todos.module.scss';
const Todos = () => {
  const { items, loading } = useContext(AmmountContext);
  const complited = items.filter((item) => item.completed).length;
  if (loading) return <div>loading...</div>;
  else
    return (
      <div className={style.container}>
        <div className={style.tasksContainer}>
          <div className={style.tasksCreatedDiv}>
            <p className={style.tasksCreated}>Tasks created</p>
            <button className={style.tasksCreatedButton}>{items.length}</button>
          </div>
          <div>
            {items.length == 0 ? '0' : `${complited} of ${items.length}`}
          </div>
        </div>
        <div>{items.length > 0 ? <Todo /> : <Notodos />}</div>
      </div>
    );
};

export default Todos;
