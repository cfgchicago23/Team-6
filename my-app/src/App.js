
import './App.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
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
import LogIn from './pages/login';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

function App() {
  return (
    // <ChakraProvider>
    //   <HouseCreationForm/>
    // </ChakraProvider>
    <><ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <div className="App">
        {/* <LogIn></LogIn> */}
        <Home></Home>
        {/* <Form></Form> */}
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
