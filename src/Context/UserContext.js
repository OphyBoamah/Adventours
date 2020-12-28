import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  console.log('user', user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    setToken(token);
    setUser(user);
  }, []);

  const signup = async (payload) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_KEY}/users/signup`,
      payload
    );
    if (result.status === 201) {
      const token = result.data.token;
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(result.data.data.user));
      }
      window.location.pathname = '/';
    }
  };
  const signin = async (payload) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_KEY}/users/login`,
      payload
    );
    if (result.status === 200) {
      const token = result.data.token;
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(result.data.data.user));
      }
      window.location.pathname = '/';
    }
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.pathname = '/';
  };
  return (
    <UserContext.Provider value={{ signup, user, token, signin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(UserContext);
  return context;
}
