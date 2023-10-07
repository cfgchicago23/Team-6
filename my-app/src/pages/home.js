import { Heading, Flex, Box, Spacer, Text, Stack, Button} from '@chakra-ui/react'


const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '600px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background:
      'url(rebuilding_together.jpeg) center/cover no-repeat',
  }
export default function Home() {
      return (
            <>
            
            <Box w='100%' h='400px' bgGradient='linear(to-r, gray.300, green.400, gray.300)'>
                <Heading size='3xl' pt='100px' color='#f7f4d5' pb='5'>Rebuilding Together Aurora</Heading>
                <Heading  fontSize='xl' color='#383836'>Together we repair homes, revitalize communities and rebuild lives.</Heading>

                <Stack spacing={4} direction='row' align='center' pl='570' pt='10'>
                    <Button colorScheme='black' size='lg' variant='outline'>
                      Donate
                    </Button>
                    <Button colorScheme='green' size='lg'>
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
          <Flex px='15rem'>
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
              
              </>

      )

      


}