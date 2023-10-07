import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/home';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Home></Home>
    </div>
    </ChakraProvider>
  );


}

export default App;
