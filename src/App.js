import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home"
import{
  BrowserRouter, Route, Routes
} from "react-router-dom";
import About from "./About";

function App() {
  return (
    
    <BrowserRouter>
       <ChakraProvider>
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/reg" element={<About></About>}></Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
 
  );
}


export default App;


