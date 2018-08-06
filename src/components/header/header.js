import React from "react";
import { Navbar, FormGroup, FormControl } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    // The new url after search term is submitted
    const searchURL = "?searchTerm=" + this.props.searchTerm;
    return (
      <Navbar collapseOnSelect className="mainNav">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Flickr Image Search</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <form onSubmit={this.props.handleSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={this.props.value}
                  onChange={this.props.handleChange}
                />
              </FormGroup>
            </form>
          </Navbar.Form>

          {this.props.formSubmit && (
            <Redirect
              to={{
                pathname: "/results",
                search: searchURL
              }}
            />
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
