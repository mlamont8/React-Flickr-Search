import React from "react";
import Header from "./components/header/header.js";
import { Route } from "react-router-dom";
import Home from "./components/home/home.js";
import Grid from "./components/grid/grid.js";
import Footer from "./components/footer/footer.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      searchTerm: "",
      formSubmit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTerm: "",
      value: event.target.value,
      formSubmit: false
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchTerm: this.state.value,
      value: "",
      formSubmit: true
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
          searchTerm={this.state.searchTerm}
          formSubmit={this.state.formSubmit}
        />
        <div className="container-fluid main-content">
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Grid} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
