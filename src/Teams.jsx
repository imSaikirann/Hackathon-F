import { Image,Box,Text, Flex  } from '@chakra-ui/react'



import React from 'react'

export default function Teams() {
  return (
    <Flex 
  display="flex"
    alignItems="center"
   justifyContent="center"
    flexDirection="column"
    height="100vh"
  
    marginTop="9rem">
        
         
          <Box boxSize='600px' display="flex"  margin="2rem" textAlign="center">
          <Text as='b'>Batters</Text>
             <Box boxSize='220px' >
             <Image src='./dhoni.png' alt='Dan Abramov' />
              <Text as ='b'>name</Text>
             </Box>
             <Box boxSize='220px' >
             <Image src='./conway.png' alt='Dan Abramov' />
              <Text as ='b'>name</Text>
             </Box>
             <Box boxSize='220px' >
             <Image src='./rai.png' alt='Dan Abramov' />
              <Text as ='b'>name</Text>
             </Box>
             
             
          </Box>
          <Box boxSize='600px' display="flex"  margin="2rem" textAlign="center">
          <Text as='b'>All Rounders</Text>
             <Box boxSize='220px' >
             <Image src='./ravi.png' alt='Dan Abramov' />
              <Text as ='b'>Name</Text>
             </Box>
            
             
             
          </Box>
          <Box boxSize='600px' display="flex"  margin="2rem" textAlign="center">
          <Text as='b'>Batters</Text>
             <Box boxSize='220px' >
             <Image src='./deeppak.png' alt='Dan Abramov' />
              <Text as ='b'>Dhoni</Text>
             </Box>
             <Box boxSize='220px' >
             <Image src='./aka.png' alt='Dan Abramov' />
              <Text as ='b'>Dhoni</Text>
             </Box>
           
             
             
          </Box>
        
       
        
          
         
    </Flex>
    
  )
}
