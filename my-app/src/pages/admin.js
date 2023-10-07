import { Heading, Flex, Box, Spacer, Text } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { AddIcon, MinusIcon } from '@chakra-ui/icons'; // Import Chakra UI icons
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { FaHome, FaClock } from "react-icons/fa";
  import { BsPeopleFill} from "react-icons/bs";
import NavBar from '../navigation/navbar';
import { Link } from 'react-router-dom';
  import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

  


export default function Home() {
      return (
            <>
        <div style={{ height: '50px' }}></div>
        <Heading size='2xl' color='#035422'>
              Welcome, Heather!
          </Heading>
          <div style={{ height: 'px' }}></div>

          <div style={{ height: '25px' }}></div>
          
    
          <Heading size='lg' color='#035422'>
              Upcoming Projects:
          </Heading>

          <div style={{ height: '25px' }}></div>
          

          <Accordion allowMultiple>
          <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Flex alignItems="center"> {/* Flex container */}
                    <Box mr={2}> {/* Margin right for spacing */}
                      <FaHome /> {/* House icon */}
                    </Box>
                    <Box flex="1" textAlign="left" marginRight="30px">
                      Smith House
                    </Box>
                  </Flex>


                    
                  <Flex alignItems="center"> {/* Flex container */}
                    <Box mr={2} > {/* Margin right for spacing */}
                      <FaClock /> {/* House icon */}
                    </Box>
                    <Box flex="1" marginRight="30px" >
                      3 Days Till Event
                    </Box>
                  </Flex>

                  <Flex alignItems="center"> {/* Flex container */}
                    <Box mr={2}> {/* Margin right for spacing */}
                    <BsPeopleFill /> {/* House icon */}
                    </Box>
                    <Box flex="1" >
                      30 of 40 Volunteers
                    </Box>
                  </Flex>


                  
                  <Box flex="1" textAlign="right">
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Card align='center'>
  <CardHeader>
    <Heading size='md'> More Information</Heading>
  </CardHeader>
  <CardBody>
    <Text>The Smith House Project is scheduled to occur on October 10th, 2023. It will occur at 1773 Eagle Drive in Aurora, IL. There are currently 30 registered volunteers out of the 40 spots available. 

</Text>
  </CardBody>
  <CardFooter>
  <Button style={{ backgroundColor: 'black', color: 'white' }}>Alert Volunteers</Button>

  </CardFooter>
</Card>

              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Flex alignItems="center"> {/* Flex container */}
                    <Box mr={2}> {/* Margin right for spacing */}
                      <FaHome /> {/* House icon */}
                    </Box>
                    <Box flex="1" textAlign="left" marginRight="30px">
                      Patel House
                    </Box>
                  </Flex>

                  <Flex alignItems="center"> {/* Flex container */}
                    <Box mr={2}> {/* Margin right for spacing */}
                      <FaClock /> {/* House icon */}
                    </Box>
                    <Box flex="1" marginRight="30px">
                      5 Days Till Event
                    </Box>
                  </Flex>

                  <Flex alignItems="center"> {/* Flex container */}
                    <Box mr={2}> {/* Margin right for spacing */}
                    <BsPeopleFill /> {/* House icon */}
                    </Box>
                    <Box flex="1" >
                      25 of 40 Volunteers
                    </Box>
                  </Flex>

                  <Box flex="1" textAlign="right">
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                        
              <Card align='center'>
  <CardHeader>
    <Heading size='md'> More Information</Heading>
  </CardHeader>
  <CardBody>
    <Text>The Patel House Project is scheduled to occur on October 12th, 2023. It will occur at 788 Creek View Drive in Aurora, IL. There are currently 25 registered volunteers out of the 40 spots available. </Text>
  </CardBody>
  <CardFooter>
  <Button style={{ backgroundColor: 'black', color: 'white' }}>Alert Volunteers</Button>
  </CardFooter>
</Card>



             
              </AccordionPanel>
            </>
          )}
        </AccordionItem>


        
          

          <div style={{ height: '25px' }}></div>
          

          <Accordion marginTop={30} 
              marginLeft={90} 
              marginRight={90} 
              outlineColor="black"
              allowMultiple>
              <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'green.500', color: 'white' }}>
                          <Flex alignItems="center"> {/* Flex container */}
                            <Box mr={2}> {/* Margin right for spacing */}
                              <FaHome /> {/* House icon */}
                            </Box>
                            <Box flex="1" textAlign="left" marginRight="30px">
                              Smith House
                            </Box>
                          </Flex>


                            
                          <Flex alignItems="center"> {/* Flex container */}
                            <Box mr={2} > {/* Margin right for spacing */}
                              <FaClock /> {/* House icon */}
                            </Box>
                            <Box flex="1" marginRight="30px" >
                              3 Days Till Event
                            </Box>
                          </Flex>

                          <Flex alignItems="center"> {/* Flex container */}
                            <Box mr={2}> {/* Margin right for spacing */}
                            <BsPeopleFill /> {/* House icon */}
                            </Box>
                            <Box flex="1" >
                              30 of 40 Volunteers
                            </Box>
                          </Flex>


                          
                          <Box flex="1" textAlign="right">
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </Box>
                        </AccordionButton>
                        <Spacer height='20px'></Spacer>

                      </h2>
                      <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _expanded={{ bg: 'green.500', color: 'white' }}>
                      <Flex alignItems="center"> {/* Flex container */}
                        <Box mr={2}> {/* Margin right for spacing */}
                          <FaHome /> {/* House icon */}
                        </Box>
                        <Box flex="1" textAlign="left" marginRight="30px">
                          Patel House
                        </Box>
                      </Flex>

                      <Flex alignItems="center"> {/* Flex container */}
                        <Box mr={2}> {/* Margin right for spacing */}
                          <FaClock /> {/* House icon */}
                        </Box>
                        <Box flex="1" marginRight="30px">
                          5 Days Till Event
                        </Box>
                      </Flex>

                      <Flex alignItems="center"> {/* Flex container */}
                        <Box mr={2}> {/* Margin right for spacing */}
                        <BsPeopleFill /> {/* House icon */}
                        </Box>
                        <Box flex="1" >
                          30 of 40 Volunteers
                        </Box>
                      </Flex>

                      <Box flex="1" textAlign="right">
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

          </Accordion>



</Accordion>



    <div style={{ height: '50px' }}></div>
    <Button colorScheme='green' size='lg'>
        Add a New House Project
    </Button>

    
              
              </>
  )

}



