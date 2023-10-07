import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/home';
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
      <Home></Home>
    </div>
    </ChakraProvider>
  );


}





export default App;
