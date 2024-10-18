import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom'


const NavbarComp = () => {
  return (
    <>

<Navbar expand="lg" className="nav sticky-top">
      <Container>
        <Navbar.Brand className='fw-bolder' href="/">House Of Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
          <NavLink className="nav-link me-3 fw-bold" to="/Home">Home</NavLink>
          <NavLink className="nav-link me-3 fw-bold" to="/update">Update Book </NavLink>
          <NavLink className="nav-link me-3 fw-bold" to="/add">Add Book </NavLink>
          </Nav>

          {/* <Nav className='ms-auto'>
          <NavLink className="nav-link me-3" to="/login"><User size={25}/></NavLink> 
          <NavLink className="nav-link" to="/cart"><ShoppingCart size={25}/></NavLink> 
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavbarComp;
