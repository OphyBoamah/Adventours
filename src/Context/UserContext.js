import { useToast } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from 'Utils/api';
import Cookies from 'js-cookie';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  console.log('user', user);

  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      console.log(token);
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token.token}`;
        const user = token;
        if (user) setUser(token);
      }
    }
    loadUserFromCookies();
  }, []);

  const signin = async (payload) => {
    try {
      const result = await api.post('/users/login', payload);
      if (result.status === 200) {
        Cookies.set('token', result.data, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${result.data.token}`;
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

  const signup = async (payload) => {
    try {
      const result = await api.post('/users/signup', payload);
      setUser(result);
      if (result.status === 201) {
        Cookies.set('token', result.data, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${result.data.token}`;
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
    Cookies.remove('token');
    setUser(null);
    history.push('/signin');
  };

  const forgotPassword = async (payload) => {
    try {
      const result = await api.post('/users/forgotPassword', payload);

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
      if (result.status === 200) {
        Cookies.set('token', result.data, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${result.data.token}`;
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
