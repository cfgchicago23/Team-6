import React from "react";
import YoutubeEmbed from "../components/youtube_embed";
import {
  Heading,
  Stack,
  Card,
  CardBody,
  CardHeader,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../navigation/navbar"

export default function Lessons() {
  return (
    <>
      <VStack>
      <NavBar></NavBar>
        <Heading color="#035422" mt="10">
          Video Tutorials
        </Heading>
        <Heading size="sm" color="gray.500" mt="3" mb="10">
          Here are some video tutorials to watch on-site or beforehand to help
          you prepare for your day of volunteering!
        </Heading>
      </VStack>

      <Stack spacing={"8rem"} align="center" direction="row" px="130px">
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Treating Clients Using Empathy</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="-k_NQZ1RjK4" />
          </CardBody>
        </Card>
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">How to Paint a Room</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="CRXCB_3gLok" />
          </CardBody>
        </Card>
      </Stack>
      <Stack spacing={"8rem"} align="center" direction="row" px="130px" mt="20">
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Plumbing Drain Lines</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="tLAGcEnF-8c" />
          </CardBody>
        </Card>
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Installing Laminate Tiling</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="lvqdlRzNQss" />
          </CardBody>
        </Card>
      </Stack>
      <Stack spacing={"8rem"} align="center" direction="row" px="130px" mt="20">
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Bathroom Floor Tiling</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="h6AABdEfpwI" />
          </CardBody>
        </Card>
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Installing Carpeting</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="clLiPe9oHtw" />
          </CardBody>
        </Card>
      </Stack>
      <Stack spacing={"8rem"} align="center" direction="row" px="130px" my="20">
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Installing Hand Railing</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="wYBYzxsH8bs" />
          </CardBody>
        </Card>
        <Card bg={"gray.100"} minW="lg" border="2px" borderColor="black.400">
          <CardHeader>
            <Heading size="md">Replacing a Rotten Subfloor</Heading>
          </CardHeader>
          <CardBody>
            <YoutubeEmbed embedId="Tzi7rftE7Pw" />
          </CardBody>
        </Card>
      </Stack>
    </>
  );
}
