
import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap"



export default function Navbars() {
  return (
    <>
    <Navbar bg="black" variant="dark">
      <Container>
      <Navbar.Brand href="/" style={{fontFamily:"Times New Roman", color:"#00c2c2"}}><h2>Travel Trek</h2></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link  href="/" style={{fontFamily:"Cosmic", color:"white"}}><h5>Home</h5></Nav.Link>
        <Nav.Link href="/planyourtrip" style={{fontFamily:"Cosmic", color:"white"}}><h5>Plan Your Trip</h5></Nav.Link>
        <Nav.Link href="/hotels" style={{fontFamily:"Cosmic", color:"white"}}><h5>Hotels</h5></Nav.Link>
        <Nav.Link href="/flights" style={{fontFamily:"Cosmic", color:"white"}}><h5>Flights</h5></Nav.Link>
        <Nav.Link href="/aboutus" style={{fontFamily:"Cosmic", color:"white"}}><h5>About us</h5></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    
  </>
  )
}


