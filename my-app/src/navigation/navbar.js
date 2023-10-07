import { Image } from '@chakra-ui/react';
import logo from '../pics/logo.png'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Form from "../pages/form"

export default function NavBar() {
  return (
      <div
        className="Navbar"
        style={{
          width: '100%', 
          height: 90,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          background: '#F2F4F7',
          gap: 30,
          display: 'flex',
          justifyContent: 'flex-start', 
          alignItems: 'center',
        }}
      >
        <Breadcrumb spacing="20px" separator={''}>
          <BreadcrumbItem ml='20'>
            <BreadcrumbLink href="/">
              <Image src={logo} alt='logo' boxSize='85px'/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink> <Link to={'/tutorials'}>Tutorials</Link></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/form">Sign Up to Volunteer</BreadcrumbLink>
          </BreadcrumbItem>

        </Breadcrumb>

        <Button ml='800px'colorScheme='green' variant={'outline'}>
          <Link to={'/login'}>Login</Link>
        </Button>

        {/* <Button ml='3px'colorScheme='green'>
          <Link to={'/login'}>Volunteer Sign In</Link>
        </Button> */}
      </div>
  );
}
