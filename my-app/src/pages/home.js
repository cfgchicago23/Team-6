import { Heading, Flex, Box, Spacer, Text } from '@chakra-ui/react'

export default function Home() {
      return (
            <>
        <Heading size='2xl' color='#035422'>
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