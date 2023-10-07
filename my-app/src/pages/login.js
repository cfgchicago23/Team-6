import React from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Box,
  SimpleGrid,
  Stack,
  Center,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import NavBar from "../navigation/navbar";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminUsername: "",
      adminPassword: "",
      volunteerUsername: "",
      volunterPassword: "",
    };
  }

  handleVolunteerSubmit = async () => {
    const request = await axios
      .get("http://127.0.0.1:8000/api/volunteerUser/")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    let data = request.data;

    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const isUsernameSame = data[i].volunteerUsername.localeCompare(
        this.state.volunteerUsername
      );
      const isPasswordSame = data[i].volunteerPassword.localeCompare(
        this.state.volunterPassword
      );

      if (isUsernameSame === 0 && isPasswordSame === 0) {
        return window.location.assign("http://localhost:3000/profile/pages");
      }
    }
  };

  handleAdminSubmit = async () => {
    const request = await axios
      .get("http://127.0.0.1:8000/api/adminUser/")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    let data = request.data;

    for (let i = 0; i < data.length; i++) {
      const isUsernameSame = data[i].adminUsername.localeCompare(
        this.state.adminUsername
      );
      const isPasswordSame = data[i].adminPassword.localeCompare(
        this.state.adminPassword
      );

      if (isUsernameSame === 0 && isPasswordSame === 0) {
        return window.location.assign("http://localhost:3000/admin");
      }
    }
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <Center>
          <Stack direction={"row"} spacing="24px">
            <Center>
              <Box rounded={"lg"}>
                <Heading>Volunteer Log In</Heading>
                <SimpleGrid columns={2} spacingY={0} padding={0}>
                  <FormControl
                    rounded={"lg"}
                    paddingRight={59}
                    paddingLeft={59}
                    paddingTop={30}
                    paddingBottom={30}
                    align="center"
                    textAlign="center"
                  >
                    <VStack width="80%">
                      <Input
                        id="volunteerUsername"
                        placeholder="username"
                        name="volunteerUsername"
                        value={this.state.volunteerUsername}
                        onChange={this.onChange}
                        marginTop={2}
                      />
                      <Input
                        id="volunterPassword"
                        placeholder="password"
                        name="volunterPassword"
                        value={this.state.volunterPassword}
                        onChange={this.onChange}
                        marginTop={2}
                      />
                      <Button
                        marginTop={2}
                        onClick={this.handleVolunteerSubmit}
                      >
                        Submit
                      </Button>
                    </VStack>
                  </FormControl>
                </SimpleGrid>
              </Box>
            </Center>

            <Box rounded={"lg"}>
              <Heading>Admin Login</Heading>
              <SimpleGrid columns={2} spacingY={0} padding={0}>
                <FormControl
                  rounded={"lg"}
                  paddingRight={59}
                  paddingLeft={59}
                  paddingTop={30}
                  paddingBottom={30}
                  align="center"
                  textAlign="center"
                >
                  <VStack width="80%">
                    <Input
                      id="adminUsername"
                      placeholder="username"
                      name="adminUsername"
                      value={this.state.adminUsername}
                      onChange={this.onChange}
                      marginTop={2}
                    />
                    <Input
                      id="adminPassword"
                      placeholder="password"
                      name="adminPassword"
                      value={this.state.adminPassword}
                      onChange={this.onChange}
                      marginTop={2}
                    />
                    <Button marginTop={2} onClick={this.handleAdminSubmit}>
                      Submit
                    </Button>
                  </VStack>
                </FormControl>
              </SimpleGrid>
            </Box>
          </Stack>
        </Center>
      </>
    );
  }
}

export default LogIn;
