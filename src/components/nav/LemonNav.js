import Logo from '../../assets/icons_assets/Logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaAddressBook } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa";
import { BsTelephonePlus } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa6";

import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';

export default function LemonNav(props) {

  function renderFooter(props) {
    if (props && props.footer) {
      return (              
      <>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
          <Container className="justify-content-center">
            <FaAddressBook/>
          </Container>
          <Navbar.Text className="p-2 text-start">
            123456 Dinein st
            Chicago, IL
            123456
          </Navbar.Text>
        </Stack>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
        <Container className="justify-content-center">
            <MdEmail/>
        </Container>
          <Nav.Link href="mailto:littlelemon@basket.nowhere" className="p-2 text-start">
            littlelemon@basket.nowhere
          </Nav.Link>
        </Stack>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
        <Container className="justify-content-center">
            <BsTelephonePlus/>
        </Container>        
        <Nav.Link href="tel:+15551212120" className="p-2 text-start">
            1-555-121-2120
          </Nav.Link>
        </Stack>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
        <Container className="justify-content-center">
            <FaSquareXTwitter/>
        </Container>
          <Nav.Link href='www.x.com/thisshouldgetyoua404' className="p-2 text-start">
            Twitter / X
          </Nav.Link>
        </Stack>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
        <Container className="justify-content-center">
            <FaFacebookF/>
        </Container>
          <Nav.Link href='www.fb.com/thisshouldgetyoua404' className="p-2 text-start">
            Facebook
          </Nav.Link>
        </Stack>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
        <Container className="justify-content-center">
            <FaSquare/>
        </Container>
          <Nav.Link href='www.square.com/thisshouldgetyoua404' className="p-2 text-start">
            Square
          </Nav.Link>
        </Stack>
        <Stack className="mx-auto" direction={props.direction} gap={3}>
        <Container className="justify-content-center">
            <FaInternetExplorer/>
        </Container>
          <Nav.Link href='https://www.littlelemon.com/thisshouldgetyoua404' className="p-2 text-start">
            Website
          </Nav.Link>
        </Stack>
      </>
      );
    }
  }
  let navStackClassName="d-inline-flex " ;
  navStackClassName += props.footer? "flex-col": "flex-row";

  return (
    <nav>
    <Container>
    <Navbar expand="lg" sticky={props.footer?"bottom":"top"}>
        <Navbar.Brand href="/">
          <img src={Logo} alt='Little Lemon Chicago'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Stack className={navStackClassName} direction={props.footer?"vertical":"horizontal"} gap={1}>
              <Nav.Link href="/" className="p-2 my-auto mx-auto">Home</Nav.Link>
              <Nav.Link href="/about" className="p-2 my-auto mx-auto">About</Nav.Link>
            </Stack>
            <Stack className={navStackClassName} >
              <Nav.Link href="/menu" className="p-2 my-auto mx-auto">Menu</Nav.Link>
              <Nav.Link href="/bookings" className="p-2 my-auto mx-auto">Bookings</Nav.Link>
            </Stack>
            <Stack className={navStackClassName} >
              <Nav.Link href="/specials" className="p-2 my-auto mx-auto">Specials</Nav.Link>
              <Nav.Link href="/Login" className="p-2 my-auto mx-auto">Login</Nav.Link>
            </Stack>
            {renderFooter(props)}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    </nav>
    );
}

/*
              <Stack>
                <Navbar.Text className="p-2 ms-auto">
                  Contact us
                </Navbar.Text>
                <Navbar.Text className="p-2 ms-auto">
                  123456 Dinein st
                </Navbar.Text>
                <Navbar.Text className="p-2 ms-auto">
                  Chicago, IL
                </Navbar.Text>
                <Navbar.Text className="p-2 ms-auto">
                  123456
                </Navbar.Text>
              </Stack>

              <Stack>
                <Navbar.Link href="mailto:littlelemon@basket.nowhere" className="p-2 ms-auto">
                  littlelemon@basket.nowhere
                </Navbar.Link>
                <Navbar.Link href="tel:+1 555 1212120" className="p-2 ms-auto">
                  +1 555 1212120
                </Navbar.Link>
              </Stack>

              <Stack>
                <Navbar.Link href='www.fb.com/thisshouldgetyoua404' className="p-2 ms-auto">
                  Facebook
                </Navbar.Link>
                <Navbar.Link href='www.square.com/thisshouldgetyoua404' className="p-2 ms-auto">
                  Square
                </Navbar.Link>
              </Stack>

*/