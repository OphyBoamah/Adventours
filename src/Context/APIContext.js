import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const APIContext = createContext();
export const APIProvider = ({ children }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    const result = await axios.get(`${process.env.REACT_APP_API_KEY}/tours`);
    setTours(result.data.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <APIContext.Provider value={{ tours, loading }}>
      {children}
    </APIContext.Provider>
  );
};

export default function useAPI() {
  const context = useContext(APIContext);
  return context;
}
