import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    RadioGroup,
    Radio,
    HStack,
    Button,
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import axios from 'axios';


  export default function Form() {
      // Define state variables to store form input values
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        contactMethod: 'Call',
        streetAddress: '',
        state: '',
        zipCode: '',
        dateOfBirth: '',
        over18: 'Yes',
        tshirtSize: '',
        availability: 'Yes',
        volunteerType: '',
        certifications: '',
        other: '',
        howDidYouHear: 'social',
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Access form input values from the formData state
        console.log(formData);
        // You can now send this data to a server or perform any other action here
    };

    // Function to update the formData state when input values change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
    
    return (
      <ChakraProvider>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    />

                <FormLabel>Email address</FormLabel>
                <Input 
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example123@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    />                
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel>Phone Number</FormLabel>
                <Input 
                    id="number"
                    type="number"
                    name="number"
                    placeholder="XXX-XXX-XXXX"
                    value={formData.number}
                    onChange={handleInputChange}/>

                <FormLabel as='legend'>
                    Preferred Method of Contact
                </FormLabel>
                <RadioGroup 
                    defaultValue='Call'
                    name='contactMethod' 
                    value={formData.contactMethod} 
                    onChange={handleInputChange} >
                    <HStack spacing='24px'>
                    <Radio value='Call'>Call</Radio>
                    <Radio value='Text'>Text</Radio>
                    <Radio value='Email'>Email</Radio>
                    </HStack>
                </RadioGroup>

                <FormLabel>Street Address</FormLabel>
                <Input id="address"
                    type="address"
                    name="address"
                    placeholder="123 Daisy Way"
                    value={formData.address}
                    onChange={handleInputChange}/>

                <FormLabel>State</FormLabel>
                <Input 
                    id="state"
                    type="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}/>

                <FormLabel>Zip Code</FormLabel>
                <Input id="zip"
                    type="zip"
                    name="zip"
                    placeholder="12345"
                    value={formData.zip}
                    onChange={handleInputChange} />

                <FormLabel>Date of Birth</FormLabel>
                <Input id="dob"
                    type="dob"
                    name="dob"
                    placeholder="MM/DD/YYYY"
                    value={formData.dob}
                    onChange={handleInputChange}/>

                <FormLabel as='legend'>
                    Are you over 18?
                </FormLabel>
                <RadioGroup defaultValue='Yes'
                id="adult"
                type="adult"
                name="adult"
                value={formData.adult}
                onChange={handleInputChange}>
                    <HStack spacing='24px'>
                        <Radio value='Yes'>Yes</Radio>
                        <Radio value='No'>No</Radio>
                    </HStack>
                </RadioGroup>

                <FormLabel>T-Shirt Size</FormLabel>
                <Select 
                placeholder='Select size'
                id="size"
                type="size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}>
                    <option>X-Small</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>X-Large</option>
                    <option>2X-Large</option>
                    <option>3x-Large</option>
                </Select>   

                <FormLabel as='legend'>
                    Availability
                </FormLabel>
                <RadioGroup 
                defaultValue='Yes'
                id="avail"
                type="avil"
                name="avil"
                value={formData.avil}
                onChange={handleInputChange}>
                    <HStack spacing='24px'>
                        <Radio value='asneeded'>As Needed</Radio>
                        <Radio value='weekends'>Weekends</Radio>
                        <Radio value='weekdays'>Weekdays</Radio>
                    </HStack>
                </RadioGroup>

                <FormLabel>Preferred Role</FormLabel>
                <Select 
                id="role"
                type="role"
                name="role"
                placeholder="Select a role"
                value={formData.role}
                onChange={handleInputChange}>
                    <option>General Volunteer</option>
                    <option>Carpentry</option>
                    <option>Window replacement</option>
                    <option>Drywall/Plaster work</option>
                    <option>Flooring</option>
                    <option>Painting</option>
                    <option>HVAC</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Landscaping</option>
                </Select>

                <FormLabel>Do you have any certifications or licenses you want to share with us?</FormLabel>
                <Input type='license' 
                id="license"
                name="license"
                value={formData.license}
                onChange={handleInputChange}/>
            
                <FormLabel>Other</FormLabel>
                <Input type='other' id="other"
                name="other"
                value={formData.other}
                onChange={handleInputChange}/>
            
                <FormLabel as='legend'>
                    How did you hear about us?
                </FormLabel>
                <RadioGroup 
                id="how"
                name="how"
                value={formData.how}
                onChange={handleInputChange}
                defaultValue='Yes'>
                    <HStack spacing='24px'>
                        <Radio value='social'>Social media</Radio>
                        <Radio value='wom'>Word of mouth</Radio>
                        <Radio value='organize'>Organization</Radio>
                        <Radio value='other'>Other</Radio>
                    </HStack>
                </RadioGroup>
                <Button type="submit" colorScheme="teal" mt={4}>
                    Submit
                </Button>
            </FormControl>
        </form>
      </ChakraProvider>
  
    )
  }
  

