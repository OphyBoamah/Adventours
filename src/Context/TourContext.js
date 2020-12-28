import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const TourContext = createContext({});

export const TourProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/tours`);
    setData(res.data.data.data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <TourContext.Provider value={{ data, loading }}>
      {children}
    </TourContext.Provider>
  );
};

export default function useTours() {
  const context = useContext(TourContext);
  return context;
}
