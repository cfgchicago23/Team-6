import React from "react";
import {
  FormControl,
  Flex,
  Input,
  Button,
  VStack,
  Select,
} from "@chakra-ui/react";

class HouseCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
      ownerEmail: "",
      street: "",
      city: "",
      zipCode: "",
      language: "",
      recievedOn: "",
      application: "",
    };
  }

  handleSubmit = () => {
    // TODO: Handle the submit aspect of stuff
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
        {/* Main form */}

        <FormControl textAlign="center">
          <VStack width="50%">
            <Input
              id="ownerName"
              placeholder="Owner Name"
              name="ownerName"
              value={this.state.ownerName}
              onChange={this.onChange}
            />
            <Input
              id="ownerEmail"
              placeholder="ownerEmail@example.com"
              name="ownerEmail"
              value={this.state.ownerEmail}
              onChange={this.onChange}
            />
            <Input
              id="street"
              placeholder="1234 Something Avenue"
              name="street"
              value={this.state.street}
              onChange={this.onChange}
            />
            <Input
              id="city"
              placeholder="Chicago"
              name="city"
              value={this.state.city}
              onChange={this.onChange}
            />
            <Select
              id="state"
              placeholder="Select State"
              name="state"
              value={this.state.city}
              onChange={this.onChange}
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
            />
            <Input
              id="zipCode"
              placeholder="12345"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.onChange}
            />

            <Input
              id="language"
              placeholder="English"
              name="language"
              value={this.state.language}
              onChange={this.onChange}
            />

            <Input
              id="recievedOn"
              placeholder="10/6/23"
              type="date"
              name="recievedOn"
              value={this.state.recievedOn}
              onChange={this.onChange}
            />
            <Input
              id="application"
              type="file"
              name="application"
              value={this.state.application}
              onChange={this.onChange}
            />
          </VStack>

          <Button onClick={this.handleSubmit}></Button>
        </FormControl>
        {/* TODO: Include the footer bar */}
      </Flex>
    );
  }
}

export default HouseCreationForm;
