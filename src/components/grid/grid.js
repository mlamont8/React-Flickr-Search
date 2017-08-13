import React from 'react';
import queryString from 'query-string';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.urlParse = this.urlParse.bind(this);
  }

//Get search term from URL
  urlParse() {
      let gridTerm = queryString.parse(this.props.location.search)
      console.log(gridTerm.searchTerm);

  }

// For initial render
  componentDidMount() {
      this.urlParse();
  }

// If user enters new search term within this component
  componentDidUpdate(nextProps){
    //Check to make sure search term actually changed
    if(JSON.stringify(this.props.location.search) !== JSON.stringify(nextProps.location.search))
      {
        this.urlParse();
  }
}



  render() {

    return (

        <div>Grid Container</div>
    );
  }

}

export default Grid;
