import './profile.css';
import * as React from 'react'
import { ChakraProvider, Heading, Spacer } from '@chakra-ui/react'
import image1 from '../pics/20200830_134409.jpg'
import image2 from '../pics/20210806_084254.jpg'
import image3 from '../pics/20231004_103617.jpg'
import image4 from '../pics/DSC01804.JPG'
import image5 from '../pics/Volunteer_Female_Flooring Repair.jpg'

import {
    Radio,
    RadioGroup,
    HStack,
    Input,
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
    Button
} from '@chakra-ui/react'

function VolunteerHeader(prop) {
    return (
        <chakra.h1 color="green.500" textAlign={'center'} fontSize={'4xl'} fontWeight={'bold'}>
            {prop.text}
        </chakra.h1>
    )
}

function VolunteerPageBox() {
    return (
        <Box
            height={300}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}>
        </Box>)

}

function UserInfo() {
    
    return (
        <Box
        height={300}
        border={'3px solid'}
        borderColor='green'
        rounded={'lg'}
        padding={5}>
            <VolunteerHeader text="Personal Information"></VolunteerHeader>
            <SimpleGrid columns={2} spacingY={5} padding={5}>
                <Heading size='md'>Name:</Heading>
                {/*TODO: add user's name*/}
                <Text>Jane Doe</Text>
                <Heading size='md'>Email:</Heading>
                {/*TODO: add user's email*/}
                <Text>janedoe@gmail.com</Text>
                <Heading size='md'>Phone:</Heading>
                {/*TODO: add user's phone number*/}
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
                        {/*TODO: add user's volunteer hours*/}
                        <StatNumber>5000</StatNumber>
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
            <VolunteerHeader text="Volunteer Journey"></VolunteerHeader>
            <Spacer height="80px"></Spacer>
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

{/* TODO: implement this with the backend */}
function FeedbackForm() {
    return (
        <Box
            height={400}
            border={'3px solid'}
            borderColor='green'
            rounded={'lg'}
            padding={10}>
            <VolunteerHeader text="Feedback Form"></VolunteerHeader>
            <Spacer height='20px'></Spacer>
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
                <Spacer height='20px'></Spacer>
                <FormLabel>
                    Please share any additional comments you have for us!
                </FormLabel>
                <Input type='text'></Input>
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
            <VolunteerHeader text="Personal Gallery"></VolunteerHeader>
            <Spacer height='20px'></Spacer>
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
