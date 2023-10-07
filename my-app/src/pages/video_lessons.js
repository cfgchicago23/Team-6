import React from "react";
import YoutubeEmbed from "../components/youtube_embed";
import { Heading, Stack, Card, CardBody, CardHeader, StackDivider } from "@chakra-ui/react";

export default function Lessons() {
    return (

        <>
        <Heading color='#035422' my='10'>
            Video Tutorials
        </Heading>

        <Stack spacing={'12rem'} align='center' direction='row' px='20'>
        <Card>
            <CardHeader>
                <Heading size='md'>Treating Clients Using Empathy</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="-k_NQZ1RjK4" />
            </CardBody>
        </Card>  
        <Card>
            <CardHeader>
                <Heading size='md'>How to Paint a Room</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="CRXCB_3gLok" />
            </CardBody>
        </Card>  
        <Card>
            <CardHeader>
                <Heading size='md'>Plumbing Drain Lines</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="tLAGcEnF-8c" />
            </CardBody>
        </Card>      
        </Stack>
        <Stack spacing={'12rem'} align='center' direction='row' px='20' mt='20'>
        <Card>
            <CardHeader>
                <Heading size='md'>Installing Laminate Tiling</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="lvqdlRzNQss" />
            </CardBody>
        </Card>  
        <Card>
            <CardHeader>
                <Heading size='md'>Bathroom Floor Tiling</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="h6AABdEfpwI" />
            </CardBody>
        </Card>  
        <Card>
            <CardHeader>
                <Heading size='md'>Installing Carpeting</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="clLiPe9oHtw" />
            </CardBody>
        </Card>      
        </Stack>
        <Stack spacing={'12rem'} align='center' direction='row' px='20' mt='20'>
        <Card>
            <CardHeader>
                <Heading size='md'>Installing Hand Railing</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="wYBYzxsH8bs" />
            </CardBody>
        </Card>  
        <Card>
            <CardHeader>
                <Heading size='md'>Installing Carpeting</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="clLiPe9oHtw" />
            </CardBody>
        </Card> 
        <Card>
            <CardHeader>
                <Heading size='md'>Replacing Rotten Subfloors</Heading>
            </CardHeader>
            <CardBody>
                <YoutubeEmbed embedId="Tzi7rftE7Pw" />
            </CardBody>
        </Card>       
        </Stack>
        
            
</>

        
      );
}