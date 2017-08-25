import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from 'react-bootstrap';


class Cards extends React.Component {

  render() {
    const cardUrl = 'https://farm' + this.props.cardItem.farm + '.staticflickr.com/' +
      this.props.cardItem.server + '/' + this.props.cardItem.id + '_' + this.props.cardItem.secret +
      '_n.jpg';
    return(
      <div className='image-container'>
        {/* Consider making image instead of thumbnail  */}
      <Thumbnail className="image" src={cardUrl}>
             {/* <p>{this.props.cardItem.title}</p>  */}
          {/* <div className='overlay'>{this.props.cardItem.title}</div> */}
   
          </Thumbnail>
          </div>
    )
  }
}

Cards.propTypes = {
  cardItem: PropTypes.object.isRequired
};

export default Cards;
