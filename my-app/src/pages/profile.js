import * as React from 'react'
import { CardBody, CardFooter, CardHeader, ChakraProvider, Heading, Spacer, Stack } from '@chakra-ui/react'
import YoutubeEmbed from "../components/youtube_embed";
import image1 from '../pics/20200830_134409.jpg'
import image2 from '../pics/20210806_084254.jpg'
import image3 from '../pics/20231004_103617.jpg'
import image4 from '../pics/DSC01804.JPG'
import image5 from '../pics/Volunteer_Female_Flooring Repair.jpg'
import house1 from '../pics/20201107_113446.jpg'
import house2 from '../pics/20220621_125432.jpg'
import house3 from '../pics/70790026.jpg'
import streak from '../pics/streak.png'
import baby from '../pics/baby.png'
import brush from '../pics/brush.png'
import referral from '../pics/referral.png'
import map from '../pics/navigation_map.png'
import { Link } from 'react-router-dom';

import NavBar from "../navigation/navbar";

import {
    Card,
    Radio,
    RadioGroup,
    HStack,
    Input,
    Box,
    Image,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    CircularProgress,
    CircularProgressLabel,
    Text,
    FormControl,
    FormLabel,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalOverlay,
    useDisclosure,
    Center,
<<<<<<< HEAD
    
} from '@chakra-ui/react'

=======
} from '@chakra-ui/react'
>>>>>>> da5b5b964940c7b07e1a1e12f23a0f86ede56397
function VolunteerHeader(prop) {
    return (
        <chakra.h1 color="green.500" textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
            {prop.text}
        </chakra.h1>
    )
}

function UserInfo() {

    return (
        <Box
            height={265}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={5}
            backgroundColor="green.50"
        >
            
            <VolunteerHeader text="Personal Information"></VolunteerHeader>
            <Center>
            <SimpleGrid columns={2} spacingX='18px' spacingY='10px' padding={7}>
                <Heading size='md'>Name:</Heading>
                {/*TODO: add user's name*/}
                <Text>Jane Doe</Text>
                <Heading size='md'>Email:</Heading>
                {/*TODO: add user's email*/}
                <Text>janedoe@gmail.com</Text>
                <Heading size='md'>Phone:</Heading>
                {/*TODO: add user's phone number*/}
                <Text>123-456-7890</Text>
            </SimpleGrid>
            </Center>
            
        </Box>
    )
}

function HoursCard() {
    return (
        
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='black'
            rounded={'lg'}
            backgroundColor='white'>
                <Box>
                    <Stat>
                        <StatLabel>Volunteer Hours</StatLabel>
                        {/*TODO: add user's volunteer hours*/}
                        <StatNumber>5050</StatNumber>
                    </Stat>
                </Box>
        </Stat>
    )
}

function MoneyCard() {
    return (
        <Stat
            px={'3'}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='black'
            rounded={'lg'}
            backgroundColor='white'>
                <Box>
                    <Stat>
                        <StatLabel>Value Generated</StatLabel>
                        <Center>
                        <StatNumber>$100,000</StatNumber>
                        </Center>
                        
                    </Stat>
                </Box>
        </Stat>
    )
}

function ProgressCard() {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='black'
            rounded={'lg'}
            backgroundColor='white'>
                <Box>
                    <StatLabel>Progress Towards Next 100 hr Milestone</StatLabel>
                    <Center>
                    <CircularProgress value={50} size='120px' color="green.400">
                        <CircularProgressLabel>50%</CircularProgressLabel>
                    </CircularProgress>
                    </Center>
                </Box>
            
        </Stat>)
}
function StreakCard(){
    return (
        <Stat>
            
                <Box>

                <StatLabel>4 Month Streak</StatLabel>
                    <CircularProgress value={75} size='100px' color="red.400">
                        <CircularProgressLabel>
                            <Image 
                            src={streak}
                            w="90%"
                            paddingLeft={3}
                            ></Image> 
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
        </Stat>)    
}
function ReferralCard(){
    return (
        <Stat>
            
                <Box>

                <StatLabel>Refer 5 friends</StatLabel>
                    <CircularProgress value={0} size='100px' color="red.400">
                        <CircularProgressLabel>
                            <Image 
                            src={referral}
                            w="75%"
                            paddingLeft={6}
                            ></Image> 
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
        </Stat>)    
}
function BabyCard(){
    return (
        <Stat>
            
                <Box>

                <StatLabel>1st Construction</StatLabel>
                    <CircularProgress value={100} size='100px' color="red.400">
                        <CircularProgressLabel>
                            <Image 
                            src={baby}
                            w="70%"
                            h="110%"
                            paddingLeft={8}
                            ></Image> 
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
        </Stat>)    
}

function BrushCard(){
    return (
        <Stat>
            
                <Box>
                <StatLabel>Ten Paint Jobs</StatLabel>
                    <CircularProgress value={30} size='100px' color="red.400">
                        <CircularProgressLabel>
                            <Image 
                            src={brush}
                            w="75%"
                            h="140%"
                            paddingLeft={8}
                            ></Image> 
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
        </Stat>)    
}

function VolunteeringJourney() {
    return (
        <Box
            height={500}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}
            marginTop={30}
            backgroundColor="green.50">
            <VolunteerHeader text="Volunteer Journey"></VolunteerHeader>
            <Spacer height="30px"></Spacer>
            <SimpleGrid marginLeft={7} columns={4} spacing={2}>
                <StreakCard />
                <BabyCard />
                <BrushCard />
                <ReferralCard />
            </SimpleGrid>
            <Spacer height="20px"></Spacer>

            <SimpleGrid columns={3} spacing={2}>
                <HoursCard />
                <MoneyCard />
                <ProgressCard />
            </SimpleGrid>
            
        </Box>

    )
}

function MyBadges() {
    let badges = []
}

function GridPic(props) {
    return (
        <Card height='330px' border='solid 3px' borderColor='green'>
            <CardHeader fontWeight='bold'>{props.date}</CardHeader>
            <CardBody>
                <Center>
                <Image height='170px' width='220px' src={props.img} ></Image>
                </Center>
                
            </CardBody>
            <CardFooter fontWeight='bold' fontSize='14px'>
                <Text verticalAlign='10%'>{props.caption}</Text>
            </CardFooter>
        </Card>


    )
}

{/* TODO: implement this with the backend */ }
function FeedbackForm() {
    return (
        <Box
            height={400}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}
            backgroundColor="green.50">
            <VolunteerHeader text="Feedback Form"></VolunteerHeader>
            <Spacer height='20px'></Spacer>
            <FormControl>
                <FormLabel>
                    How would you describe your volunteer experience?
                </FormLabel>
                <RadioGroup defaultValue='Neutral' >
                    <HStack spacing='24px'>
                        <Radio backgroundColor='white' value='Very Negative'>Very Negative</Radio>
                        <Radio backgroundColor='white' value='Negative'>Negative</Radio>
                        <Radio backgroundColor='white' value='Neutral'>Neutral</Radio>
                        <Radio backgroundColor='white' value='Positive'>Positive</Radio>
                        <Radio backgroundColor='white' value='Very Positive'>Positive</Radio>
                    </HStack>
                </RadioGroup>
                <Spacer height='20px'></Spacer>
                <FormLabel>
                    Please share any additional comments you have for us!
                </FormLabel>
                <Input type='text' color='black' backgroundColor='white'></Input>
                <Button type="submit" colorScheme="green" mt={4}>
                    Submit
                </Button>
            </FormControl>

        </Box>

    )
}

function GalleryGrid() {
    let captions = ["Such a rewarding day!", "I met some amazing people!", "This job was tough.", "I love working with Rebuilding Aurora!", ":)"]
    let dates = ['8/7/2023', '5/3/2023', '7/25/2022', '1/14/2022', '11/5/2021']
    let img = [image1, image2, image3, image4, image5]
    let items = []
    for (let i = 0; i < 4; i++) {
        items.push(<GridPic img={img[i]} date={dates[i]} caption={captions[i]}></GridPic>)
    }
    return (
        <Box
            height={805}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={5}
            backgroundColor="green.50">
            <VolunteerHeader text="Personal Gallery"></VolunteerHeader>
            <Spacer height='20px'></Spacer>
            <SimpleGrid columns={2} spacing={4}>
                {items}
            </SimpleGrid>
        </Box>
    );

}
function HousesCard(props) {
    return (
        <Card maxW='400px' height='330px' border='solid 3px' borderColor='green'>
            <CardHeader fontWeight='bold'>{props.cardNum}</CardHeader>

            <CardBody>
                <Center>
                    <Image height='150px' width='240px' src={props.img} ></Image>
                </Center>
            </CardBody>

            <CardFooter fontWeight='bold'>

                <HouseModal houseNumber={props.cardNum} info={props.houseDescription} />

            </CardFooter>

        </Card>
    )
}

function HouseModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button display="block" marginBottom={30} colorScheme='green' onClick={onOpen}>Meet the Family!</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.houseNumber}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{props.info}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button display="block" colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function FeedbackModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme='green' onClick={onOpen} width='300px' height='80px' fontSize='20px'>Give Us Some Feedback!</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW='700px'>
                    <ModalHeader>{props.houseNumber}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FeedbackForm></FeedbackForm>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function HouseCards() {
    let info = ["The Doe family is incredibly excited to receive some help with their home! They are an older couple who have struggled to keep up with various internal and external repairs in recent years. This project will involve painting, floor instalation, and cleaning.",
        "The Smiths are a happy family of three and cannot wait to meet you! They struggle with clutter in their home, as caring for their son with severe autism is their top priority. This project will involve heavy lifting and lots of cleaning!",
        "Ellen Galvez is a widow, and finds it difficult to keep up with the upkeep of her home. She has lived in her Aurora home for 50 years, and can't wait to see it with a fresh coat of paint and some new plumbing! This project requires at least one skilled plumber."]
    let cardNum = ['House 29: October 27th', 'House 30: November 11th', 'House 31: December 20th']
    let img = [house1, house2, house3]
    let items = []
    for (let i = 0; i < 3; i++) {
        items.push(<HousesCard img={img[i]} cardNum={cardNum[i]} houseDescription={info[i]}></HousesCard>)
    }
    return (
        <Box
            height={500}
            w="77%"
            marginLeft={40}
            marginRight={40}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding='60px'
            backgroundColor="green.50">
            <VolunteerHeader text="Upcoming Projects"></VolunteerHeader>
            <Spacer height='30px'></Spacer>
            <Center>
            <SimpleGrid columns={3} spacing={20}>{items}</SimpleGrid>
            </Center>
            <Spacer height='30px'></Spacer>
        </Box>
    );

}

function Resources() {
    return (
        <Box
            height={600}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding='60px'
            backgroundColor="green.50">
            <VolunteerHeader text="Resources for the Job"></VolunteerHeader>
            <Spacer height='20px'></Spacer>
            <Stack spacing={300} direction='row' align='center' ml='5'>
                    <Box>
                        <Heading size='lg' ml='40' mb='3'>Navigation Map</Heading>
                        <Image src={map} width={60} height={60} alt ='map' ml='40'/>
                        <Text mt='3' ml='10'>
                            See the map above for the locations of recycling dumpsters in Aurora!
                        </Text>
                    </Box>
                    
                    <Box>
                        <Card minW='sm' border='2px' borderColor='green.400' mb='5' mt='5'>
                            <CardHeader>
                                <Heading size='md'>Installing Carpeting</Heading>
                            </CardHeader>
                            <CardBody>
                                <YoutubeEmbed embedId="clLiPe9oHtw" />
                            </CardBody>
                        </Card>  
                        <Button colorScheme='green' size='lg' >
                            <Link to={'/tutorials'}>See more tutorials here!</Link>
                        </Button>
                    </Box>
                </Stack>
        </Box>
    );
}

export default function Profile() {
    return (
        <ChakraProvider>
            <NavBar/>
            <Box
                w="100%"
                h="290px"
                bgGradient="linear(to-r, gray.300, green.400, gray.300)"
            >
                <Heading align="center" size="3xl" pt="100px" color="white" pb="5">
                    Thanks To You
                </Heading>
                <Heading align="center" fontSize="xl" color="#383836">
                    Every one dollar RTA invests into building materials, it produces five dollars in critical home repairs for people
                </Heading>

            </Box>
            <SimpleGrid columns={2}>
                <Box bg='white' w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <UserInfo></UserInfo>
                    <Spacer height='10px'></Spacer>
                    <VolunteeringJourney></VolunteeringJourney>
                    <Spacer height='10px'></Spacer>
                </Box>
                <Box bg='white' w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <GalleryGrid />
                </Box>
            </SimpleGrid>
            <Box bg='white' w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                <HouseCards />
                <Spacer height='20px'></Spacer>
                <Resources />
                <Spacer height='20px'></Spacer>
                <FeedbackModal/>
                <Spacer height='20px'></Spacer>
            </Box>
        </ChakraProvider>

    )
}

