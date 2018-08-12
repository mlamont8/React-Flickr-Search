import React from "react";
import queryString from "query-string";
import axios from "axios";
import Cards from "./../cards/cards.js";
import Loader from "./../loader/loader.js";
import ModalImage from "./../modalImage/modalImage.js";
import { Pagination, Modal, Button, Pager } from "react-bootstrap";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: "",
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
    this.pagerClick = this.pagerClick.bind(this);
  }

  // For initial render
  componentDidMount() {
    this.urlParse();
  }

  // If user enters new search term within this component
  componentDidUpdate(nextProps, nextState) {
    //Check to make sure search term actually changed
    if (
      JSON.stringify(this.props.location.search) !==
      JSON.stringify(nextProps.location.search)
    ) {
      this.setState({
        isLoading: true
      });
      this.urlParse();
    }
  }

  apiPull(search, page) {
    return axios
      .get("https://api.flickr.com/services/rest", {
        params: {
          method: "flickr.photos.search",
          api_key: "1dfbed40745d1f76dc935c78c30abf16",
          text: search,
          safe_search: "1",
          per_page: "40",
          page: page,
          format: "json",
          nojsoncallback: 1
        }
      })
      .then(
        function(response) {
          console.log(response);
          this.setState({
            results: response.data.photos.photo,
            totPages: Number(response.data.photos.total),
            isLoading: false
          });
          document.body.scrollTop = 0;
        }.bind(this)
      )
      .catch(function(error) {
        console.log("Main Search error", error);
      });
  }

  //Get search term from URL
  urlParse() {
    let gridTerm = queryString.parse(this.props.location.search);
    // pull from flickr api
    this.apiPull(gridTerm.searchTerm, 1);
    this.setState({
      term: gridTerm.searchTerm,
      isLoading: true
    });
  }

  //Handle page select from pagination
  handleSelect(eventKey) {
    console.log("eventKey", eventKey);
    this.apiPull(this.state.term, eventKey);
    this.setState({
      activePage: eventKey
    });
  }

  // Close Modal
  closeModal() {
    this.setState({ showModal: false });
  }

  // Open Modal
  openModal(item) {
    this.setState({
      showModal: true,
      currentItem: item
    });
  }

  // Logic for pager of next or previous
  pagerClick(e, value) {
    let newValue = 0;
    value === "Next"
      ? (newValue = this.state.activePage + 1)
      : (newValue = this.state.activePage - 1);
    if (newValue !== 0) {
      this.apiPull(this.state.term, newValue);
      this.setState({
        activePage: newValue
      });
    }
  }

  render() {
    var items = this.state.results;
    var term = this.state.term.toUpperCase();

    return this.state.isLoading === true ? (
      <Loader />
    ) : (
      <div className="mainGrid container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="gridName">{term}</h1>
          </div>
          <div className="col-md-6">
            <div>
              <Pager>
                <Pager.Item next onClick={e => this.pagerClick(e, "Previous")}>
                  Previous
                </Pager.Item>{" "}
                <Pager.Item next onClick={e => this.pagerClick(e, "Next")}>
                  Next
                </Pager.Item>
              </Pager>
            </div>
            <div className="pull-right">Page : {this.state.activePage}</div>
          </div>
        </div>
        <div className="gridContainer row">
          {items.map(item => (
            <div key={item.id}>
              <Cards
                modalToggle={this.openModal.bind(this, item)}
                cardItem={item}
              />
            </div>
          ))}
          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <ModalImage cardItem={this.state.currentItem} />
            <Modal.Footer>
              <Modal.Title>{this.state.currentItem.title}</Modal.Title>
              <Button bsStyle="info" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
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
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default Grid;
