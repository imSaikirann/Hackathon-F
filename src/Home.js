import { Flex, Box, Spacer, Link } from "@chakra-ui/react";

function Home() {
  return (
    <Flex bg="gray.100" p="4" >
      <Box>
        <Link href="/">Home</Link>
      </Box>
      <Spacer />
      <Box>
        <Link href="/reg">Sign up</Link>
      </Box>
      <Box marginLeft="4">
        <Link href="/contact">Contact</Link>
      </Box>
    </Flex>
  );
}

export default Home;