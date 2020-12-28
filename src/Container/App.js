import { UserProvider } from 'Context/UserContext';
import { TourProvider } from 'Context/TourContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Routes';

const App = () => {
  return (
    <UserProvider>
      <TourProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TourProvider>
    </UserProvider>
  );
};

export default App;
