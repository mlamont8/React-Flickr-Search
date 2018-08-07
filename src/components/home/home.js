import React from 'react';
import { FormGroup, FormControl } from "react-bootstrap";


class Home extends React.Component {


  render() {

    return (
      <div className="home-container">

        <h1>QUICKR IMAGE SEARCH</h1>

        <div className="homeForm">
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
        </div>
      </div>
    )
  }
}

export default Home;
