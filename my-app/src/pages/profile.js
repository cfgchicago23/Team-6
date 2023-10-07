import './profile.css';
import * as React from 'react'
import { ChakraProvider, Heading, Spacer } from '@chakra-ui/react'

import {
    Radio,
    RadioGroup,
    HStack,
    Input,
    WrapItem,
    Box,
    Image,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    CircularProgress,
    CircularProgressLabel,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'

function UserInfo() {
    return (
        <Box
            height={300}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}
        >
            <chakra.h1 color="green.500" textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
                Jane's Personal Information:
            </chakra.h1>
            <SimpleGrid columns={2} spacingY={5} padding={5}>
                <Heading size='md'>Name:</Heading>
                <Text>Jane Doe</Text>
                <Heading size='md'>Email:</Heading>
                <Text>janedoe@gmail.com</Text>
                <Heading size='md'>Phone:</Heading>
                <Text>123-456-789</Text>
            </SimpleGrid>
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
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box>
                    <Stat>
                        <StatLabel>Volunteer Hours</StatLabel>
                        <StatNumber>5000 hr</StatNumber>
                    </Stat>
                </Box>
            </Flex>
        </Stat>
    )
}

function MyBadges() {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='black'
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box>
                    <Stat>
                        <StatLabel>Volunteer Hours</StatLabel>
                        <StatNumber>5000 hr</StatNumber>
                    </Stat>
                </Box>
            </Flex>
        </Stat>
    )
}

function MoneyCard() {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='black'
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box>
                    <Stat>
                        <StatLabel>Value Generated</StatLabel>
                        <StatNumber>$100,000</StatNumber>
                    </Stat>
                </Box>
            </Flex>
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
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box>

                    <StatLabel>Progress Towards Next Badge</StatLabel>

                    <CircularProgress value={75} size='120px' color="green.400">
                        <CircularProgressLabel>75%</CircularProgressLabel>
                    </CircularProgress>

                </Box>
            </Flex>
        </Stat>)
}

function VolunteeringJourney() {
    return (
        <Box
            height={500}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}>
            <chakra.h1 color="green.500" textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Jane's Volunteering Journey:
            </chakra.h1>
            <SimpleGrid columns={3} spacing={2}>
                <HoursCard />
                <MoneyCard />
                <ProgressCard />

            </SimpleGrid>
        </Box>

    )
}

function GridPic(props) {
    return (
        <Box
            backgroundColor='green.100'
            height='300px'
            width='300px'
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding='10px'
        >
            <Heading size='sm'>{props.date}</Heading>
            <Spacer height='10px'></Spacer>
            <Image height='180px' width='280px' src={props.img} ></Image>
            <Spacer height='10px'></Spacer>
            <Text verticalAlign='10%'>{props.caption}</Text>
        </Box>

    )
}

function FeedbackForm() {
    return (
        <Box
            height={400}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}>
            <chakra.h1 color="green.500" textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Feedback Form:
            </chakra.h1>
            <FormControl>
            <FormLabel>
                How would you describe your volunteer experience?
            </FormLabel>
            <RadioGroup defaultValue='Neutral'>
                <HStack spacing='24px'>
                    <Radio value='Very Negative'>Very Negative</Radio>
                    <Radio value='Negative'>Negative</Radio>
                    <Radio value='Neutral'>Neutral</Radio>
                    <Radio value='Positive'>Positive</Radio>
                    <Radio value='Very Positive'>Positive</Radio>
                </HStack>
            </RadioGroup>
            <FormLabel>
                Please share any additional comments you have for us!
            </FormLabel>
            <Input type='text'></Input>
        </FormControl>

         </Box>
        
    )
}

function GalleryGrid() {
    let captions = ["Such a rewarding day!", "This job was tough.", "I met some amazing people!", "I love Rebuilding Aurora", ":)"]
    let dates = ['8/7/2023', '5/3/2023', '7/25/2022', '1/14/2022', '11/5/2021']
    let img = ['./pics/20200830_134409.jpg', './pics/20210806_084254.jpg', './pics/20231004_103617.jpg', './pics/DSC01804.JPG', './pics/Volunteer_Female_Flooring Repair.jpg']
    let items = []
    for (let i = 0; i < 5; i++) {
        items.push(<GridPic img={img[i]} date={dates[i]} caption={captions[i]}></GridPic>)
    }
    return (
        <Box
            height={1220}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}>
            <chakra.h1 color="green.500" textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Jane's Personal Gallery:
            </chakra.h1>
            <SimpleGrid columns={2} spacing={4}>
                {items}
            </SimpleGrid>
        </Box>
    );

}

export default function Profile() {

    return (
        <ChakraProvider>
            <SimpleGrid columns={2}>
                <Box bg='white' w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <UserInfo></UserInfo>
                    <Spacer height='10px'></Spacer>
                    <VolunteeringJourney></VolunteeringJourney>
                    <Spacer height='10px'></Spacer>
                    <FeedbackForm></FeedbackForm>
                </Box>
                <Box bg='white' w='100%' mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <GalleryGrid />
                </Box>


            </SimpleGrid>


        </ChakraProvider>

    )
}
