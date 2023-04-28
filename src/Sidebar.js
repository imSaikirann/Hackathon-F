import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import{
    BrowserRouter, Route, Routes
  } from "react-router-dom";
import style from "./Sidebar.module.css";
import DashB from "./DashB";
import { Link } from "@chakra-ui/react";
import Home from './Home';
import Reg from './Reg';

const Sidebar = () => {
  return (
    <Flex>
    <Box width="16%" height="900px" backgroundColor="#E6FFFA" boxShadow="xl">
    
      <Flex direction="column" p="40px" gap="50" className={style.items}>
        <Box w="100%" >
          <h2 >
            
        <Link href="/">Home</Link>
          </h2>
        </Box>
        <Box>
          <h2>
         <Link href='/dashboard'>DashBoard</Link>
          </h2>
        </Box>
        <Box>
          <h2>
            <Link href='/reg'>Register</Link>
          </h2>
        </Box>
        <Box>
          <h2>
           <Link href='/studentdetails'>Student Details</Link>
          </h2>
        </Box>
        <Box>
          <h2>
          <Link href="/logout">Logout</Link>
          </h2>
        </Box>
      </Flex>
    </Box>
    <Box height="100%" >
    <BrowserRouter>
<ChakraProvider>
  <Routes>
    <Route path="/" element= {<Home></Home>}></Route>
    <Route path="/dashboard" element={<DashB></DashB>}></Route>
    <Route path="/reg" element={<Reg></Reg>}></Route>
  </Routes>
</ChakraProvider>
</BrowserRouter>
    </Box>
  </Flex>
  );
};





export default Sidebar;