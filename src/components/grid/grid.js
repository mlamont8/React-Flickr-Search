import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import Cards from './../cards/cards.js';
import ModalImage from './../modalImage/modalImage.js'
import { Pagination, Modal } from 'react-bootstrap';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: '',
      isLoading: true,
      activePage: 1,
      totPages: 1,
      showModal: false,
      currentItem: {}
    };

    this.urlParse = this.urlParse.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

  }


  // For initial render
    componentDidMount() {
        this.urlParse();
    }

  // If user enters new search term within this component
    componentDidUpdate(nextProps, nextState){
      //Check to make sure search term actually changed
      if((JSON.stringify(this.props.location.search) !== JSON.stringify(nextProps.location.search))
        ||
            this.state.activePage !== nextState.activePage)
        {
          this.setState({
              isLoading: true,
              activePage: 1
      })
          this.urlParse();
    }
  }


  apiPull(search) {
     return axios.get('https://api.flickr.com/services/rest',{
      params: {
      method: 'flickr.photos.search',
      api_key: '1dfbed40745d1f76dc935c78c30abf16',
      text: search,
      safe_search: '1',
      per_page: '20',
      page: this.state.activePage,
      format: 'json',
      nojsoncallback: 1
  }
    })
    .then(function (response) {
      this.setState({
        results: response.data.photos.photo,
        totPages: Number(response.data.photos.total),
        isLoading: false
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

  //Handle page select from pagination
    handleSelect(eventKey) {
      console.log(eventKey)
    this.setState({
      activePage: eventKey
    });
  }

  // Close Modal
  closeModal(){
    this.setState({ showModal: false })
  }

  // Open Modal
  openModal(item){
    this.setState({ 
      showModal: true,
      currentItem: item
     })
  }


  render() {
      var items = this.state.results
      var term = this.state.term.toUpperCase()
      
        return this.state.isLoading === true
    ? <p>Loading</p>
    :

      <div className="mainGrid">
          <h1 className='gridName'>{term}</h1>
        <div className="gridContainer">


          {items.map((item) =>
           <div key = {item.id}>
            <Cards
              modalToggle={this.openModal.bind(this,item)}
              cardItem={item} />
              <Modal
                show={this.state.showModal}
                onHide={this.closeModal} 
                >
          
                  
                <ModalImage
                  cardItem={this.state.currentItem} />
                                 
              </Modal>
             </div>
          )}

        </div>

        
         <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.state.totPages}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
     </div>

    
  }

}

export default Grid;
