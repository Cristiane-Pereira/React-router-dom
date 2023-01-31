import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarComponet = ({ args }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color="info" dark expand="xl" className="py-3">
        <NavbarBrand href="/">
          <strong style={{ fontSize: 30 }}>✯START✯</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <strong>
                <NavLink href="/home">Home</NavLink>
              </strong>
            </NavItem>
            <NavItem>
              <strong>
                <NavLink href="/about">About</NavLink>
              </strong>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponet;
