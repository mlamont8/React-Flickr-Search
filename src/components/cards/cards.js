import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';


class Cards extends React.Component {

  render() {
    const cardUrl = 'https://farm' + this.props.cardItem.farm + '.staticflickr.com/' +
      this.props.cardItem.server + '/' + this.props.cardItem.id + '_' + this.props.cardItem.secret +
      '_z.jpg';
    return(
     
           <Image className="image" src = {cardUrl} responsive onClick={this.props.modalToggle} />
   
    )
  }
}

Cards.propTypes = {
  cardItem: PropTypes.object.isRequired
};

export default Cards;
