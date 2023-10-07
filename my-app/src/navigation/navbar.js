import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

export default function NavBar() {
    return (
        <div className="Navbar" style={{width: 1440, height: 56, paddingTop: 10, paddingBottom: 10, background: '#F2F4F7', justifyContent: 'center', alignItems: 'flex-start', gap: 530, display: 'inline-flex'}}>
        <Breadcrumb spacing='20px'  style={{alignItems: 'flex-start'}}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
        
          <BreadcrumbItem>
            <BreadcrumbLink href='/pages/profile'>About</BreadcrumbLink>
          </BreadcrumbItem>
        
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='/pages/form'>Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        </div>
)

}