import { Heading, Flex, Box, Spacer } from '@chakra-ui/react'

export default function Home() {


      return (
            <>
        <Heading size='4xl'>
              Our Impact
          </Heading>
          <Flex>
                <Box>
                      <Heading size='2xl'>
                          500
                      </Heading>
                      <Heading size='xl'>Houses</Heading>
                  </Box>
                  <Spacer />
                  <Box>
                      <Heading size='2xl'>
                          $100000
                      </Heading>
                      <Heading size='xl'>Saved</Heading>
                  </Box>
                  <Spacer />
                  <Box>
                      <Heading size='2xl'>
                          200+
                      </Heading>
                      <Heading size='xl'>Volunteers</Heading>
                  </Box>
              </Flex>
              
              </>

      )

      


}