
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/home';
import Admin from './pages/admin';
import { extendTheme } from '@chakra-ui/react'
import NavBar from './navigation/navbar';
import Profile from './pages/profile';
import HouseCreationForm from './pages/HouseCreationForm'
import Form from './pages/form';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Lessons from './pages/video_lessons';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

function App() {
  return (
    // <ChakraProvider>
    //   <HouseCreationForm/>
    // </ChakraProvider>
    <><ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <div className="App">
        <Lessons></Lessons>
        {/* <Home></Home> */}
      </div>
    </ChakraProvider><Router>

        <div className="App">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages/profile" component={Profile} />
            <Route exact path="/pages/form" component={Form} />
          </Routes>
        </div>
      </Router></>
  );


}





export default App;
