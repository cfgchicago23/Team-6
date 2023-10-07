import React from "react";
import {
  FormControl,
  Flex,
  Input,
  Button,
  VStack,
  Select,
  Box,
  SimpleGrid,
  Image,
  Stack,
  Center,
  Heading
} from "@chakra-ui/react";
import axios from "axios";
import image1 from '../pics/image2.jpg'


class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      street: "",
      city: "",
      zipCode: "",
      language: "",
      recievedOn: "",
      application: "",
    };
  }

  handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/api/house/", {
        // TODO: Fix the state value, the recieved on, and the application value
        volEmail: this.state.volEmail,
        volPassword: this.state.volPassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
        <Center>
          <Stack direction={'row'} spacing='24px'>
              <Center>
                <Box
                  rounded={'lg'}
  
                >
                  <Heading>Volunteer Log In</Heading>
                  <SimpleGrid columns={2} spacingY={0} padding={0}>
                    <FormControl 
                      rounded={'lg'}
                      paddingRight={59}
                      paddingLeft={59}
                      paddingTop={30}
                      paddingBottom={30}
                      align='center'textAlign="center">
                      <VStack width="80%">
                        <Input
                          id="volName"
                          placeholder="email@example.com"
                          name="volEmail"
                          value={this.state.volEmail}
                          onChange={this.onChange}
                          marginTop={2}
                        />
                        <Input
                          id="volPassword"
                          placeholder="password"
                          name="volPassword"
                          value={this.state.volPassword}
                          onChange={this.onChange}
                          marginTop={2}
                        />
                      <Button marginTop={2} onClick={this.handleSubmit}>Submit</Button>
                      </VStack>
                    </FormControl>
                  </SimpleGrid>
              </Box>
            </Center>

            <Box 
              rounded={'lg'}
              >
                <Heading>Admin Login</Heading>
                <SimpleGrid columns={2} spacingY={0} padding={0}>
              <FormControl 
                rounded={'lg'}
                paddingRight={59}
                paddingLeft={59}
                paddingTop={30}
                paddingBottom={30}
                align='center'textAlign="center">
                <VStack width="80%">
                  <Input
                    id="volName"
                    placeholder="email@example.com"
                    name="volEmail"
                    value={this.state.volEmail}
                    onChange={this.onChange}
                    marginTop={2}
                  />
                  <Input
                    id="volPassword"
                    placeholder="password"
                    name="volPassword"
                    value={this.state.volPassword}
                    onChange={this.onChange}
                    marginTop={2}
                  />
                <Button marginTop={2} onClick={this.handleSubmit}>Submit</Button>
                </VStack>
              </FormControl>
              </SimpleGrid>
                </Box>
            </Stack>
        </Center>
        
    );
  }
}

export default LogIn;
