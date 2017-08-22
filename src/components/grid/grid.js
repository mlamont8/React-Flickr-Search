import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import Cards from './../cards/cards.js';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: ''
    };

    this.urlParse = this.urlParse.bind(this);

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


  apiPull(search) {
    console.log(search);
     return axios.get('https://api.flickr.com/services/rest',{
      params: {
      method: 'flickr.photos.search',
      api_key: '1dfbed40745d1f76dc935c78c30abf16',
      text: search,
      safe_search: '1',
      per_page: '20',
      format: 'json',
      nojsoncallback: 1
  }
    })
    .then(function (response) {
      console.log(response.data);
      this.setState({
        results: response.data.photos.photo
      })
    }.bind(this)
  )
    .catch(function (error) {
      console.log('Main Search error',error);
    });
  }


//Get search term from URL
  urlParse() {
      let gridTerm = queryString.parse(this.props.location.search)
      // pull from flickr api
      this.apiPull(gridTerm.searchTerm);
      this.setState({
        term: gridTerm.searchTerm
      })

  }


  render() {
      var items = this.state.results

    return (
      <div>
        <div className="gridContainer">
          {items.map((item, index) =>
            <Cards key={index}
            cardItem={item} />
          )}

        </div>

      </div>
    );
  }

}

export default Grid;
