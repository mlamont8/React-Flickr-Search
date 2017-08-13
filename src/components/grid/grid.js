import React, { Component } from 'react';
import queryString from 'query-string';

class Grid extends Component {

  render() {
    console.log(this.props)
      const gridTerm = queryString.parse(this.props.location.search)
      console.log(gridTerm);
    return (

        <div>Grid Container</div>
    );
  }

}

export default Grid;
