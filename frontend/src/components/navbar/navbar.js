import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
 
} from 'reactstrap';
import './navbar.css';
import logo from './Logo.png';


function NavbarTop() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar dark fixed="top" expand="md">
          <NavbarBrand href="/"><img src={logo} className="logo mt-1 ml-3" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-2">
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem  className="mr-2">
                <NavLink href="">About</NavLink>
              </NavItem>
              <NavItem  className="mr-2">
                <NavLink href="">Services</NavLink>
              </NavItem>
              <NavItem  className="mr-2">
                <NavLink href="">Contact</NavLink>
              </NavItem>
            </Nav>
           
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavbarTop
