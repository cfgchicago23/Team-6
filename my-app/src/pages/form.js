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
  } from '@chakra-ui/react'


  export default function Form() {
    return (
      <ChakraProvider>
        <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input 
                id="firstname"
                type='firstname' 
                placeholder='First name' 
                value = {this.state.firstname}
                onChange = {this.onChange}
                />

            <FormLabel>Last Name</FormLabel>
            <Input 
                type='lastname' 
                id="lastname"
                placeholder='Last name' 
                value = {this.state.lastname}
                onChange = {this.onChange}/>

            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>

            <FormLabel>Phone Number</FormLabel>
            <Input type='phone' />

            <FormLabel as='legend'>
                Preferred Method of Contact
            </FormLabel>
            <RadioGroup defaultValue='Call'>
                <HStack spacing='24px'>
                <Radio value='Call'>Call</Radio>
                <Radio value='Text'>Text</Radio>
                <Radio value='Email'>Email</Radio>
                </HStack>
            </RadioGroup>

            <FormLabel>Street Address</FormLabel>
            <Input type='phone' />

            <FormLabel>State</FormLabel>
            <Input type='phone' />

            <FormLabel>Zip Code</FormLabel>
            <Input type='phone' />

            <FormLabel>Date of Birth</FormLabel>
            <Input type='phone' />

            <FormLabel>Zip Code</FormLabel>
            <Input type='phone' />

            <FormLabel as='legend'>
                Are you over 18?
            </FormLabel>
            <RadioGroup defaultValue='Yes'>
                <HStack spacing='24px'>
                    <Radio value='Yes'>Yes</Radio>
                    <Radio value='No'>No</Radio>
                </HStack>
            </RadioGroup>
            <FormLabel>T-Shirt Size</FormLabel>
            <Select placeholder='Select size'>
                <option>X-Small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
                <option>2X-Large</option>
                <option>3x-Large</option>
            </Select>            <FormLabel as='legend'>
                Availability
            </FormLabel>
            <RadioGroup defaultValue='Yes'>
                <HStack spacing='24px'>
                    <Radio value='asneeded'>As Needed</Radio>
                    <Radio value='weekends'>Weekends</Radio>
                    <Radio value='weekdays'>Weekdays</Radio>
                </HStack>
            </RadioGroup>
            <FormLabel>T-Shirt Size</FormLabel>
            <Select placeholder='Select size'>
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
            <Input type='phone' />
        
            <FormLabel>Other</FormLabel>
            <Input type='phone' />
        
            <FormLabel as='legend'>
                How did you hear about us?
            </FormLabel>
            <RadioGroup defaultValue='Yes'>
                <HStack spacing='24px'>
                    <Radio value='social'>Social media</Radio>
                    <Radio value='wom'>Word of mouth</Radio>
                    <Radio value='wom'>Organization</Radio>
                    <Radio value='other'>Other</Radio>
                </HStack>
            </RadioGroup>
        </FormControl>

      </ChakraProvider>
  
    )
  }
  

