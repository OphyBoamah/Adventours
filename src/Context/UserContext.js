import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from 'Utils/api';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  const toast = useToast();
  const history = useHistory();
  const signin = async (payload) => {
    try {
      const result = await api.post('/users/login', payload);
      if (result.status === 200) {
        localStorage.setItem('token', JSON.stringify(result.data.token));
        setUser(result.data.data.user);
        toast({
          title: 'Success',
          description: "You're signed into your account.",
          status: 'success',
          duration: 9000,
          position: 'top-right',
        });
        history.push('/');
        window.location.reload();
      }
    } catch (error) {
      toast({
        title: 'Error occured',
        description: error.message,
        status: 'error',
        duration: 9000,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    setToken(token);
  }, []);

  const signup = async (payload) => {
    try {
      const result = await api.post('/users/signup', payload);
      setUser(result);
      if (result.status === 201) {
        setUser(result.data.data.user);
        localStorage.setItem('token', JSON.stringify(result.data.token));
        toast({
          title: 'Success',
          description: "We've created your account.",
          status: 'success',
          duration: 3000,
          position: 'top-right',
        });
        history.push('/');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error occurred',
        description: error.message,
        status: 'error',
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const forgotPassword = async (payload) => {
    try {
      const result = await api.post('/users/forgotPassword', payload);
      console.log(result);

      if (result.status === 200) {
        toast({
          title: result.data.status,
          description: result.data.message,
          status: 'success',
          duration: 3000,
          position: 'top-right',
        });
        history.push('/resetPassword');
      }
    } catch (error) {
      toast({
        title: 'Error occurred',
        description: error.message,
        status: 'error',
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const resetPassword = async (token, payload) => {
    try {
      const result = await api.patch(`/users/resetPassword/${token}`, payload);
      console.log(result);
      if (result.status === 200) {
        setUser(result.data.data.user);
        localStorage.setItem('token', JSON.stringify(result.data.token));
        toast({
          title: result.data.status,
          description: 'Password reset successfully',
          status: 'success',
          duration: 3000,
          position: 'top-right',
        });
        history.push('/');
      }
    } catch (error) {
      toast({
        title: 'Error occurred',
        description: error.message,
        status: 'error',
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const updateUser = async (payload) => {
    const result = await api.patch('/users/updateMe', payload);
    console.log('updateUser', result);
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated: !!user,
        signin,
        token,
        user,
        signup,
        logout,
        forgotPassword,
        resetPassword,
        updateUser,
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
