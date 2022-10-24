import React from 'react';
import { StorProvider } from './components/context/globalStatus';
import { Navegation } from './components/routes';



function App() {
  return (
    <StorProvider>
      <Navegation />
    </StorProvider>
  );
}

export default App;
