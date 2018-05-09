import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo.js';
import Lightbox from '../lightbox/lightbox.js';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { photoIndex: 0 };
  }
  handleNext() {
    // refactor this to be async
    this.setState({ photoIndex: this.state.photoIndex++ })
  }

  handlePrevious() {

  }

  render() {
    const photo = this.props.photos[this.state.photoIndex];
    return (
      <Lightbox onClose={this.props.onClose}>
        <div className='bgg-black'>
          <Photo
            url={photo.url}
            alt={photo.alt}
            key={photo.url}
          />
        </div>
      </Lightbox>
    )
  }
}

Carousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
}
