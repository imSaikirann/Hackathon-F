import React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
// Importing BrowserRouter, Link, and Route from React Router
import{
    BrowserRouter, Route, Routes
  } from "react-router-dom";
import style from "./Sidebar.module.css";
import {
  PhoneIcon,
  UnlockIcon,
  TimeIcon,
  SpinnerIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import Update from "./Update";
import Form from "./Form"
import { Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>
    <Routes> {/* Wrap the content with the Router component */}
      <Flex>
        <Box width="20%" height="600px" backgroundColor="white">
          <Box m="20px">
            <h1>Logo</h1>
          </Box>
          <Flex direction="column" p="40px" className={style.items}>
            <Box>
              <h2>
                <Link href="/phone">
                  <PhoneIcon />
                </Link>
              </h2>
            </Box>
            <Box>
              <h2>
                <Link href="/trending">
                  <UnlockIcon />
                  Trending
                </Link>
              </h2>
            </Box>
            <Box>
              <h2>
                <Link href="/explore">
                  <TimeIcon />
                  Explore
                </Link>
              </h2>
            </Box>
            <Box>
              <h2>
                <Link href="/favorite">
                  <SpinnerIcon />
                  Favorite
                </Link>
              </h2>
            </Box>
            <Box>
              <h2>
                <Link href="/settings">
                  <ViewIcon />
                  Settings
                </Link>
              </h2>
            </Box>
          </Flex>
        </Box>
        <Box height="100%" backgroundColor="gray">
          <Route path="/phone" component={<Update></Update>} />
          <Route path="/trending" component={Trending} />
          <Route path="/explore" component={Explore} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/settings" component={Settings} />
        </Box>
      </Flex>
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
  );
};

const Phone = () => <h1>Phone</h1>;
const Trending = () => {<Update></Update>}
const Explore = () => <Form></Form>
const Favorite = () => <h1>Favorite</h1>;
const Settings = () => <h1>Settings</h1>;

export default Sidebar;
