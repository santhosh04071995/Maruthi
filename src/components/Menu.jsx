import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Mystyle from  './Menu.module.css';
export default function Menu() {
    return (
        <div className={Mystyle.mystyle} >
          
          <Navbar collapseOnSelect expand="lg" className={Mystyle.bg_body_tertiary}>
      <Container>
        <Navbar.Brand href="#home"><img className={Mystyle.logo} src="./nexa_logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className={Mystyle.navbar_collapse} id="responsive-navbar-nav">
          
          <Nav>
            <Nav.Link href="#deets" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#deets" className='text-white'>Explore</Nav.Link>
            <Nav.Link href="#deets" className='text-white'>Service</Nav.Link>
            <Nav.Link href="#deets" className='text-white bg-dark p-1'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
      );
}