import React from "react";
import AnimatedButton from "../animatedButton/AnimatedButton";
import PropTypes from 'prop-types';

class Home extends React.Component {

  render() {
    return (

      <div className="frontImageContainer">
        <div><h1>QUICKR</h1></div>
        <p>Image Search</p>
        <div>
          <AnimatedButton
            handleSubmit={this.props.handleSubmit}
            value={this.props.value}
            handleChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
  searchTerm: PropTypes.string,
  formSubmit: PropTypes.string,
}

export default Home;
