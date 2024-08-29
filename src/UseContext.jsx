import React, { createContext, useEffect, useState } from 'react';
import apiRequest from './apiRequest';
const AmmountContext = createContext();

export const AmmountProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = 'http://localhost:3500/tasks';
    setLoading(true);
    const data = await apiRequest(url);
    setLoading(false);

    if (data.error) {
      setError(data.error);
    } else {
      setItems(data);
    }
  };

  //gamodzaxeba
  useEffect(() => {
    fetchData();
  }, []);

  const value = { items, setItems, setError, loading };

  return (
    <AmmountContext.Provider value={value}>{children}</AmmountContext.Provider>
  );
};

export default AmmountContext;
