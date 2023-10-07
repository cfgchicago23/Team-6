import { Center } from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

export default function NavBar() {
  return (
    <Center>
      <div
        className="Navbar"
        style={{
          width: '100%', // Set the width to 100%
          height: 56,
          paddingTop: 10,
          paddingBottom: 10,
          background: '#F2F4F7',
          gap: 30,
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'flex-start',
        }}
      >
        <Breadcrumb spacing="20px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/pages/profile">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/pages/form">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Center>
  );
}
