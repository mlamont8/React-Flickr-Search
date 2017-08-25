import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';


class Cards extends React.Component {

  render() {
    const cardUrl = 'https://farm' + this.props.cardItem.farm + '.staticflickr.com/' +
      this.props.cardItem.server + '/' + this.props.cardItem.id + '_' + this.props.cardItem.secret +
      '_n.jpg';
    return(
      <div className='image-container'>
           <Image className="image" src = {cardUrl} responsive />
       </div>
    )
  }
}

Cards.propTypes = {
  cardItem: PropTypes.object.isRequired
};

export default Cards;
