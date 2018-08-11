import React from "react";
import InputForm from "../inputForm/inputForm";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container container-fluid">
        <h1>QUICKR IMAGE SEARCH</h1>
        <div className="homeForm">
          <InputForm
            handleSubmit={this.props.handleSubmit}
            value={this.props.value}
            handleChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Home;
