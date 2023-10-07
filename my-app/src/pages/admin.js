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

  


export default function Home() {
      return (
            <>
            <NavBar></NavBar>
              <Box
                  w="100%"
                  h="290px"
                  bgGradient="linear(to-r, gray.300, green.400, gray.300)"
              >
                  <Heading align="center" size="3xl" pt="100px" color="white" pb="5">
                      Welcome, Heather!
                  </Heading>
                  <Heading align="center" fontSize="xl" color="#383836">
                      Here are all of the upcoming projects:
                  </Heading>

              </Box>
        
          

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


          <div style={{ height: '50px' }}></div>
            <Button colorScheme='green' size='lg'>
                Add a New House Project
            </Button>

    
              
              </>
  )

}



