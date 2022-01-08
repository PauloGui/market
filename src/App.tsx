import React from 'react';
import CarProvider from './contexts';
import { ListMarket } from './pages/ListMarket';
import Global from './styles';

function App() {
  return (
    <CarProvider>
      <ListMarket />
      <Global />
    </CarProvider>
  );
}

export default App;
