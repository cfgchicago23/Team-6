import "./App.css";
import * as React from "react";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Admin from "./pages/admin";
import NavBar from "./navigation/navbar";
import Profile from "./pages/profile";
import Form from "./pages/form";
import HouseCreationForm from "./pages/HouseCreationForm";
import Lessons from "./pages/video_lessons";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App">
        <Home />{" "}
      </div>
    ),
  },
  {
    path: "*",
    element: <Profile />,
  },
  {
    path: "/pages/profile",
    element: <Profile />,
  },
  {
    path: "/pages/form",
    element: <Form />,
  },
]);

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
    // <>
    //   <ChakraBaseProvider theme={theme}>
    //     <NavBar></NavBar>
    //     <div className="App">
    //       <Home></Home>
    //       {/* <Form></Form> */}
    //     </div>
    //   </ChakraBaseProvider>
    //   <Router>
    //     <div className="App">
    //       <Routes>
    //         <Route exact path="/" component={Home} />
    //         <Route exact path="/pages/profile" component={Profile} />
    //         <Route exact path="/pages/form" component={Form} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </>
  );
}

export default App;
