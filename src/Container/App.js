import { APIProvider } from 'Context/APIContext';
import { UserProvider } from 'Context/UserContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Routes';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <APIProvider>
          <Router />
        </APIProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
