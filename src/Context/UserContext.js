import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const toast = useToast();
  const history = useHistory();

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
      console.log(result);
      toast({
        title: 'Success',
        description: 'Account successfully created',
        status: 'success',
        duration: 9000,
        position: 'top-right',
      });
      history.push('/');
      // window.location.pathname = '/';
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
      toast({
        title: result.data.status,
        description: 'Successfully Signed in',
        status: 'success',
        duration: 9000,
        position: 'top-right',
      });
      history.push('/');
      // window.location.pathname = '/';
      // <Redirect to='/' />;
    }
  };
  const forgotPassword = async (payload) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_KEY}/users/forgotPassword`,
      payload
    );
    console.log(result);
    if (result.status === 200) {
      toast({
        title: result.data.status,
        description: result.data.message,
        status: 'success',
        duration: 9000,
        position: 'top-right',
      });
      window.location.pathname = '/resetpassword';
    }
  };
  const resetPassword = async (token, payload) => {
    const result = await axios.patch(
      `${process.env.REACT_APP_API_KEY}/users/resetPassword/${token}`,
      payload
    );
    console.log(result);
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
    <UserContext.Provider
      value={{
        signup,
        user,
        token,
        signin,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(UserContext);
  return context;
}
