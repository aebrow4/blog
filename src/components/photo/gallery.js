import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo.js';
import Carousel from './carousel.js';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { showCarousel: false };

    this.handleOpenCarousel = this.handleOpenCarousel.bind(this);
    this.handleCloseCarousel = this.handleCloseCarousel.bind(this);
  }
  handleOpenCarousel() {
    this.setState({ showCarousel: true });
  }

  handleCloseCarousel() {
    this.setState({ showCarousel: false });
  }

  render() {
    return (
      <div className='bgg-grey-400 p1'>
        {this.props.photos.map(photo => (
          <div className='inline-block pr1 cursor-hand' onClick={this.handleOpenCarousel}>
            <Photo
              url={photo.thumbUrl}
              alt={photo.alt}
              key={photo.url}
            />
          </div>
        )).slice(0, 15)}
      <span className='font-size-3 hcc-blue-200 cursor-hand' onClick={this.handleOpenCarousel}>...</span>
      {this.state.showCarousel && (
        <Carousel
          photos={this.props.photos}
          onClose={this.handleCloseCarousel}
        />
      )}
      </div>
    )
  }
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Gallery.defaultProps = {
  photos: [],
}
