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
            <Input type='name' placeholder='First name' />
        </FormControl>

        <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type='name' />
        </FormControl>

        <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired> 
            <FormLabel>Phone Number</FormLabel>
            <Input type='phone' />
        </FormControl>

        <FormControl as='fieldset'>
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
        </FormControl>

        <FormControl isRequired> 
            <FormLabel>Street Address</FormLabel>
            <Input type='phone' />
        </FormControl>

        <FormControl isRequired> 
            <FormLabel>State</FormLabel>
            <Input type='phone' />
        </FormControl>

        <FormControl isRequired> 
            <FormLabel>Zip Code</FormLabel>
            <Input type='phone' />
        </FormControl>

        <FormControl isRequired> 
            <FormLabel>Date of Birth</FormLabel>
            <Input type='phone' />
        </FormControl>

        <FormControl isRequired> 
            <FormLabel>Zip Code</FormLabel>
            <Input type='phone' />
        </FormControl>

        <FormControl as='fieldset'>
            <FormLabel as='legend'>
                Are you over 18?
            </FormLabel>
            <RadioGroup defaultValue='Yes'>
                <HStack spacing='24px'>
                    <Radio value='Yes'>Yes</Radio>
                    <Radio value='No'>No</Radio>
                </HStack>
            </RadioGroup>
        </FormControl>

        <FormControl>
            <FormLabel>T-Shirt Size</FormLabel>
            <Select placeholder='Select size'>
                <option>X-Small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
                <option>2X-Large</option>
                <option>3x-Large</option>
            </Select>
        </FormControl>

        <FormControl as='fieldset'>
            <FormLabel as='legend'>
                Availability
            </FormLabel>
            <RadioGroup defaultValue='Yes'>
                <HStack spacing='24px'>
                    <Radio value='asneeded'>As Needed</Radio>
                    <Radio value='weekends'>Weekends</Radio>
                    <Radio value='weekdays'>Weekdays</Radio>
                </HStack>
            </RadioGroup>
        </FormControl>

        <FormControl>
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
        </FormControl>

        <FormControl> 
            <FormLabel>Do you have any certifications or licenses you want to share with us?</FormLabel>
            <Input type='phone' />
        </FormControl>
        
        <FormControl> 
            <FormLabel>Other</FormLabel>
            <Input type='phone' />
        </FormControl>
        
        <FormControl as='fieldset'>
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
  

