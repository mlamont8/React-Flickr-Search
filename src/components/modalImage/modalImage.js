import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class ModalImage extends Component {
    render() {
        const cardUrl = 'https://farm' + this.props.cardItem.farm + '.staticflickr.com/' +
        this.props.cardItem.server + '/' + this.props.cardItem.id + '_' + this.props.cardItem.secret +
        '_z.jpg';

        return (
            
            <Image src={cardUrl} />
        );
    }
}

export default ModalImage;