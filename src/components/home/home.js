import React from 'react';
import { FormGroup, FormControl, Glyphicon } from "react-bootstrap";


class Home extends React.Component {


  render() {

    return (
      <div className="home-container">
        <h1>QUICKR IMAGE SEARCH</h1>
        <div className="homeForm">
          <form onSubmit={this.props.handleSubmit}>
            <FormGroup bsClass="form-group has-feedback has-feedback-left">
              <FormControl
                type="text"
                placeholder="Search"
                value={this.props.value}
                onChange={this.props.handleChange}
              />
              <Glyphicon glyph="search" className="form-control-feedback" />
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }
}

export default Home;
