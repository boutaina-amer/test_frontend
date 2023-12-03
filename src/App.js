import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Count from './Count';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Count />
      </div>
    </ChakraProvider>
  );

}

export default App;
