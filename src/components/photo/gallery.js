import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo.js';
import Carousel from './carousel.js';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false,
    };

    this.handleOpenCarousel = this.handleOpenCarousel.bind(this);
    this.handleCloseCarousel = this.handleCloseCarousel.bind(this);
  }
  handleOpenCarousel(i) {
    this.setState({ showCarousel: true, index: isNaN(i) ? 0 : i });
  }

  handleCloseCarousel() {
    this.setState({ showCarousel: false });
  }

  render() {
    return (
      <div className='bgg-grey-400 p1'>
        {this.props.photos.map((photo, i) => (
          <div
            className='inline-block pr1 cursor-hand'
            onClick={() => this.handleOpenCarousel(i)}
            key={photo.url}
          >
            <Photo
              url={photo.thumbUrl}
              alt={photo.alt}
            />
          </div>
        )).slice(0, 15)}
      <span className='font-size-3 hcc-blue-200 cursor-hand' onClick={this.handleOpenCarousel}>...</span>
      {this.state.showCarousel && (
        <Carousel
          photos={this.props.photos}
          index={this.state.index}
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
