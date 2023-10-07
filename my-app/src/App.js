import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/home';
import Profile from "./pages/profile";
import Form from "./pages/form";

function App() {
  return (
    <ChakraProvider>
      
    <div className="App">
      <Home></Home>
      <Router>
      <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages/profile">Profile</Link>
              </li>
              <li>
                <Link to="/pages/form">Form</Link>
              </li>
            </ul>
        </nav>
        <div className="App">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/pages/profile" component={Profile} /> 
            <Route exact path="/pages/form" component={Form} /> 
          </Routes>
        </div>
      </Router>
    </div>
    </ChakraProvider>
  );


}

export default App;
