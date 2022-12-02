import React from 'react';

import './App.css';
import { NavigationRoutes } from './Routes/routes';
import { AdminProvider } from './Context/AdminContext';
function App() {
  return (
    <>
      <AdminProvider>
        <NavigationRoutes></NavigationRoutes>
      </AdminProvider>
    </>
  );
}

export default App;
