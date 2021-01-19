import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./navbar.css";
import logo from "./Logo.png";

function NavbarTop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark fixed='top' expand='md'>
        <NavbarBrand href='/'>
          <img src={logo} className='logo mt-1 ml-3' alt='logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem className='mr-2'>
              <NavLink>
                <Link to='/' className='text-white'>
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='mr-2'>
              <NavLink>
                <Link to='/about' className='text-white'>
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='mr-2'>
              <NavLink>
                <Link to='/projects' className='text-white'>
                  Projects
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='mr-2'>
              <NavLink className='no-border'>
                <Link to='/services' className='text-white '>
                  Services
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='mr-2'>
              <NavLink>
                <Link to='/contact' className='text-white'>
                  Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className='mr-2'>
              <NavLink>
                <Link to='/career' className='text-white'>
                  Careers
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
