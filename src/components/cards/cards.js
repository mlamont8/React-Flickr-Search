import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from 'react-bootstrap';


class Cards extends React.Component {

  render() {
    const cardUrl = 'https://farm' + this.props.cardItem.farm + '.staticflickr.com/' +
      this.props.cardItem.server + '/' + this.props.cardItem.id + '_' + this.props.cardItem.secret +
      '_n.jpg';
    return(
      <Thumbnail src= {cardUrl} alt="242x200">
            <p>{this.props.cardItem.title}</p>

          </Thumbnail>
    )
  }
}

Cards.propTypes = {
  cardItem: PropTypes.object.isRequired
};

export default Cards;
