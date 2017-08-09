import React from 'react';
import { Navbar, Nav ,NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Header extends React.Component{

  render() {
    return (
      <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              Flickr Search
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


    );
  }

};

export default Header;
