import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


class Header extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    value: '',
    searchTerm: '',
    formSubmit: false
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({
    searchTerm: '',
    value: event.target.value,
    formSubmit: false
  })
}

handleSubmit(event) {
  event.preventDefault();
  this.setState({
    searchTerm: this.state.value,
    value: '',
    formSubmit: true
  })
}


  render() {
    // The new url after search term is submitted
    const searchURL = '?searchTerm='+ this.state.searchTerm;
    return (
      <Navbar collapseOnSelect className='mainNav'>
          <Navbar.Header>
            <Navbar.Brand>
              Flickr Search
            </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                    {' '}
                  <Button type="submit">Submit</Button>
                </FormGroup>
              </form>
              </Navbar.Form>

              {this.state.formSubmit && (
                <Redirect to={{
                  pathname: '/results',
                  search: searchURL
                }}/>
              )}
          </Navbar.Collapse>

        </Navbar>


    );
  }

};

export default Header;
