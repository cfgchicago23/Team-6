import { Heading, Flex, Box, Spacer, Text, Stack, Button, VStack, Image } from '@chakra-ui/react'
import TextTransition, { presets } from 'react-text-transition';
import React from 'react';


export default function Home() {
    const [index, setIndex] = React.useState(0);
    
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
      }, []);
    
    const TEXTS = ['Make a Tangible Impact on Your Community', 'Work Towards Accesibility', 
                  'Become a More Educated Home Owner', 'Gain Valuable Hands On Skills',
                  'Make New Friends', 'Fight Food Insecurity'];

      return (
            <>
            
            <Box w='100%' h='400px' bgGradient='linear(to-r, gray.300, green.400, gray.300)'>
                <Heading size='3xl' pt='100px' color='#f7f4d5' pb='5'>Rebuilding Together Aurora</Heading>
                <Heading  fontSize='xl' color='#383836'>Together we repair homes, revitalize communities and rebuild lives.</Heading>

                <Stack spacing={4} direction='row' align='center' pl='570' pt='10'>
                    <Button colorScheme='green' size='lg'>
                      Donate
                    </Button>
                    <Button colorScheme='whiteAlpha' size='lg'>
                      Volunteer
                    </Button>
                </Stack>
            </Box>

        <Heading size='2xl' color='#035422' mt='30'>
              Our Impact
          </Heading>
          <Text fontSize='2xl' mb='10'>
            Be a volunteer and contribute to our cause!
          </Text>
          <Flex px='15rem' mb='50'>
                <Box>
                      <Heading size='2xl'>
                          500
                      </Heading>
                      <Heading size='2xl' color='#035422'>Houses</Heading>
                  </Box>
                  <Spacer />
                  <Box>
                      <Heading size='2xl' pl='10'>
                          $10000
                      </Heading>
                      <Heading size='2xl' pl='10' color='#035422'>Saved</Heading>
                  </Box>
                  <Spacer />
                  <Box>
                      <Heading size='2xl'>
                          200+
                      </Heading>
                      <Heading size='2xl' color='#035422'>Volunteers</Heading>
                  </Box>
              </Flex>

            <VStack
              spacing={4}
              background='gray.50'
              pt='10' 
              pb='10'
              mx='200'
              borderRadius='50px'
            >
              <Heading size='2xl' color='#035422'>
                Why Volunteer?
              </Heading>

            <Heading color='green' align='center' pt='5' >
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </Heading>
                
            </VStack>


              
        </>

      )

      


}