import React from "react";
import YoutubeEmbed from "../components/youtube_embed";
import {
  Heading,
  Center,
  Card,
  CardBody,
  CardHeader,
  VStack,
  SimpleGrid,
  Box
} from "@chakra-ui/react";
import NavBar from "../navigation/navbar"

export default function Lessons() {
  return (
    <>
      <VStack>
      <NavBar></NavBar>
      <Box
        w="100%"
        h="200px"
        bgGradient="linear(to-r, gray.300, green.400, gray.300)"
      >
        <Center>
        <Heading color="#f7f4d5" mt="10" fontSize='40px'>
          Video Tutorials
        </Heading>
        </Center>
        <Center>
        <Heading size="md" color="gray.800" mt="3" mb="10">
          Here are some video tutorials to watch on-site or beforehand to help
          you prepare for your day of volunteering!
        </Heading>
        </Center>
        
      </Box>
        
      </VStack>
      
        <SimpleGrid columns={2} spacing={18} padding={10}>
        <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="gray.800">Treating Clients Using Empathy</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="-k_NQZ1RjK4" />
          </CardBody>
        </Card>
        <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="gray.800">How to Paint a Room</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="CRXCB_3gLok" />
          </CardBody>
        </Card>
      
      
      <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="gray.800">Plumbing Drain Lines</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="tLAGcEnF-8c" />
          </CardBody>
        </Card>
        <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="gray.800">Installing Laminate Tiling</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="lvqdlRzNQss" />
          </CardBody>
        </Card>
      
      
      <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="gray.800">Bathroom Floor Tiling</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="h6AABdEfpwI" />
          </CardBody>
        </Card>
        <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="gray.800">Installing Carpeting</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="clLiPe9oHtw" />
          </CardBody>
        </Card>
     
      
      <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="#035422">Installing Hand Railing</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="wYBYzxsH8bs" />
          </CardBody>
        </Card>
        <Card bg={"green.50"} minW="lg" border="2px" borderColor="gray.800">
          <CardHeader>
            <Heading size="md" color="#035422">Replacing a Rotten Subfloor</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="Tzi7rftE7Pw" />
          </CardBody>
        </Card>
        </SimpleGrid>
        
      
    </>
  );
}
