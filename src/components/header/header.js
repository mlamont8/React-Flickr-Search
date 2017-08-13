import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import Link from 'react-router-dom';


class Header extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    value: '',
    searchTerm: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({
    value: event.target.value
  })
}

handleSubmit(event) {
  event.preventDefault();
  this.setState({
    searchTerm: event.target.value,
    value: ''
  })
}


  render() {
    return (
      <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              Flickr Search
            </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Navbar.Form pullRight>
                <FormGroup>
                </FormGroup>
                {' '}
                <FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                <Button type="submit">Submit</Button>
              </Navbar.Form>
          </Navbar.Collapse>

        </Navbar>


    );
  }

};

export default Header;
