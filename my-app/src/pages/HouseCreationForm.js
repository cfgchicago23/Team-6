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
} from "@chakra-ui/react";
import axios from "axios";
import image1 from '../pics/image2.jpg'


class HouseCreationForm extends React.Component {
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
        familyName: this.state.ownerName,
        familyEmail: this.state.ownerEmail,
        street: this.state.street,
        city: this.state.city,
        state: "IL",
        zipCode: this.state.zipCode,
        language: this.state.language,
        recievedOn: this.recievedOn,
        application: this.application,
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
      <Flex>
        {/* TODO: Include the nav bar */}
        <Box
            rounded={'lg'}
            bg='green.50'
        >
      <SimpleGrid columns={2} spacingY={0} padding={0}>
        <FormControl 
          rounded={'lg'}
          paddingRight={59}
          paddingLeft={59}
          paddingTop={30}
          paddingBottom={30}
          align='n center'textAlign="center">
          <VStack width="80%">
            <Input
              id="ownerName"
              placeholder="Owner Name"
              name="ownerName"
              value={this.state.ownerName}
              onChange={this.onChange}
              marginTop={2}
            />
            <Input
              id="ownerEmail"
              placeholder="ownerEmail@example.com"
              name="ownerEmail"
              value={this.state.ownerEmail}
              onChange={this.onChange}
              marginTop={2}
            />
            <Input
              id="street"
              placeholder="1234 Something Avenue"
              name="street"
              value={this.state.street}
              onChange={this.onChange}
              marginTop={2}
            />
            <Input
              id="city"
              placeholder="Chicago"
              name="city"
              value={this.state.city}
              onChange={this.onChange}
              marginTop={2}
            />
            <Select
              id="state"
              placeholder="Select State"
              name="state"
              value={this.state.city}
              onChange={this.onChange}
              marginTop={2}
            >
              <option>Illinois</option>
              <option>Ohio</option>
            </Select>

            <Input
              id="zipCode"
              placeholder="12345"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.onChange}
              marginTop={2}
            />

            <Input
              id="language"
              placeholder="English"
              name="language"
              value={this.state.language}
              onChange={this.onChange}
              marginTop={2}
            />

            <Input
              id="recievedOn"
              placeholder="10/6/23"
              type="date"
              name="recievedOn"
              value={this.state.recievedOn}
              onChange={this.onChange}
              marginTop={2}
            />
            <Input
              id="application"
              type="file"
              name="application"
              value={this.state.application}
              onChange={this.onChange}
              marginTop={2}
            />
         

          <Button marginTop={2} onClick={this.handleSubmit}>Submit</Button>
          </VStack>
        </FormControl>
        <Image src={image1}
            alt="Image Description"
            style={{ opacity: 0.7 }} 
        ></Image> 
        {/* TODO: Include the footer bar */}
        </SimpleGrid>
        </Box>
      </Flex>
    );
  }
}

export default HouseCreationForm;
