import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputForm from "../inputForm/inputForm";

class Header extends React.Component {
  render() {
    // The new url after search term is submitted
    return (
      <Navbar collapseOnSelect className="mainNav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Quickr Image Search</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <InputForm
              handleSubmit={this.props.handleSubmit}
              value={this.props.value}
              handleChange={this.props.handleChange}
            />
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
