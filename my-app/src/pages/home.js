import {
  Heading,
  Flex,
  Box,
  Spacer,
  Text,
  Stack,
  Button,
  VStack,
  Image,
  ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    useDisclosure,
    Modal
} from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import image1 from "../pics/rebuilding_together.jpeg";
import image2 from "../pics/truck_group.jpg";
import image3 from "../pics/happy_building.jpg";
import NavBar from "../navigation/navbar";
import { Link } from 'react-router-dom';
import nov_11_event from "../pics/nov_11_event.jpeg"


export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const TEXTS = [
    "Make a Tangible Impact on Your Community",
    "Work Towards Accesibility",
    "Become a More Educated Home Owner",
    "Gain Valuable Hands On Skills",
    "Make New Friends",
    "Fight Food Insecurity",
  ];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const slideImages = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <NavBar />
      <Box
        w="100%"
        h="400px"
        bgGradient="linear(to-r, gray.300, green.400, gray.300)"
      >
        <Heading size="3xl" pt="100px" color="#f7f4d5" pb="5">
          Rebuilding Together Aurora
        </Heading>
        <Heading fontSize="xl" color="#383836">
          Together we repair homes, revitalize communities and rebuild lives.
        </Heading>

        <Stack spacing={4} direction="row" align="center" pl="570" pt="10">
          <Button colorScheme="green" size="lg" onClick={onOpen}>
            Donate
          </Button>
          <Button  colorScheme="whiteAlpha" size="lg">
            <Link to={'/form'}>Volunteer</Link>
          </Button>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader color="green">Deliver $10 in repair for every $1 invested</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text>Can't Volunteer? That's okay! We need funding for all the resources for repairments. </Text>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='green' mr={3} onClick={onClose} variant='outline'>
                    Close
                </Button>
                <Button colorScheme='green' mr={3} onClick={onClose} >
                <Link to={'https://www.paypal.com/donate?hosted_button_id=NTF9LK8XJTCGG'}>Go to Donation Page</Link>
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>

      <Heading size="2xl" color="#035422" mt="30">
        Our Impact
      </Heading>
      <Text fontSize="2xl" mb="10">
        Be a volunteer and contribute to our cause!
      </Text>
      <Flex px="15rem" mb="50">
        <Box>
          <Heading size="2xl">500</Heading>
          <Heading size="2xl" color="#035422">
            Houses
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Heading size="2xl" pl="10">
            $10000
          </Heading>
          <Heading size="2xl" pl="10" color="#035422">
            Saved
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Heading size="2xl">200+</Heading>
          <Heading size="2xl" color="#035422">
            Volunteers
          </Heading>
        </Box>
      </Flex>

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <Image src={slideImage.url} alt=""></Image>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <VStack
        spacing={4}
        background="gray.50"
        pt="10"
        pb="10"
        my='50'
        mx='100'
        borderRadius='50px'
      >
        <Heading size="2xl" color="#035422">
          Why Volunteer?
        </Heading>

        <Heading color="green" align="center" pt="5">
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </Heading>
      </VStack>

      <Box bgGradient='linear(to-r, gray.100, green.300)'>
      <Stack spacing={300} direction='row' >
          <Image src={nov_11_event}
                alt="Image Description"
                h="100%"
                w="50%"
                style={{ opacity: 0.7 }} 
        ></Image> 
          <Box mt='35'>
            <Heading size="2xl" color="#f7f4d5" ml="-250px" mt="10">
              Upcoming Event: Nov 11th
            </Heading>
            <Heading size="lg" color="gray.600" ml="-250px" mt="3">
            Veterans' Fall Clean-Up and Repairs
            </Heading>
            <Text ml="-270px" mr='20px' mt='7'>
            Join Rebuilding Together Aurora and Crossroads Church as we team up to serve 
            those who have served and military families in the Fox Valley in honor of the 
            sacrifices they have made to our country. Last year a record-breaking number 
            of volunteers served more Veterans, military families and senior citizens than 
            ever before and we are hoping to surpass those numbers in 2023. 
            </Text>
            <Button  colorScheme="whiteAlpha" size="lg" mr='290px' mt='10'>
              <Link to={'/form'}>Sign Up</Link>
            </Button>
          </Box>
        </Stack>
      </Box>
        
    </>
  );
}
