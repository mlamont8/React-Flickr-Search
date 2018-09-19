import React from "react";
import AnimatedButton from "../animatedButton/AnimatedButton";
import PropTypes from 'prop-types';

class Home extends React.Component {

  render() {
    return (
  
      <div className="home-container">
        <AnimatedButton
          handleSubmit={this.props.handleSubmit}
          value={this.props.value}
          handleChange={this.props.handleChange}
       />
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
