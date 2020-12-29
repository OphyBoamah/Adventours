import { UserProvider } from 'Context/UserContext';
import { TourProvider } from 'Context/TourContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Routes';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <TourProvider>
          <Router />
        </TourProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
