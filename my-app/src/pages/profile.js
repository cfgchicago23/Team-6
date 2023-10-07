import './profile.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import {
  Box,
  Image,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'

function StatsCard() {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>

          <Stat>
            <StatLabel>Volunteer Hours</StatLabel>
            <StatNumber>5000 hr</StatNumber>
          </Stat>

        </Box>
      </Flex>
    </Stat>
  )
}

export default function App() {
  return (
    <ChakraProvider>
        <Box bg='white' w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
            Your Volunteering Stats:
          </chakra.h1>
          <SimpleGrid columns={1} spacing={0}>
            <StatsCard />
          </SimpleGrid>
          <SimpleGrid columns={3} spacing={10}>
            <Box w='20%'>
              <Image src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' />
            </Box>
            <Box w='20%'>
              <Image src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' />
            </Box>
            <Box w='20%'>
              <Image src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' />
            </Box>
          </SimpleGrid>
        </Box>
    </ChakraProvider>

  )
}
