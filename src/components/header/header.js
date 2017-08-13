import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    value: '',

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
    searchTerm: this.state.value,
    value: ''
  })
}


  render() {
    const term = this.state.value;
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
              <form>
                <FormGroup >
                  <FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
                  {' '}
                  <Link
                    className="button"
                    to={{
                      pathname: '/results',
                      search: '?term=' + term}}
                      type="submit">Submit
                    </Link>
                </FormGroup>
              </form>

              </Navbar.Form>
          </Navbar.Collapse>

        </Navbar>


    );
  }

};

export default Header;
