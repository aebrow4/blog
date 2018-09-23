import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo.js';
import Carousel from './carousel.js';
import Lightbox from '../lightbox/lightbox.js';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false,
      showFullGallery: false,
    };

    this.handleOpenCarousel = this.handleOpenCarousel.bind(this);
    this.handleCloseCarousel = this.handleCloseCarousel.bind(this);
    this.handleShowFullGallery = this.handleShowFullGallery.bind(this);
    this.handleCloseFullGallery = this.handleCloseFullGallery.bind(this);
  }
  handleOpenCarousel(i) {
    this.setState({ showCarousel: true, index: isNaN(i) ? 0 : i });
  }

  handleCloseCarousel() {
    this.setState({ showCarousel: false });
  }

  handleShowFullGallery() {
    this.setState({ showFullGallery: true });
  }

  handleCloseFullGallery() {
    this.setState({ showFullGallery: false });
  }

  renderPreviewGallery() {
    return (
      <div className="flex flex-row flex-wrap justify-around">
        {this.props.photos.map((photo, i) => (
          <div
            className='cursor-hand flex pr1 thumbnail'
            onClick={() => this.handleOpenCarousel(i)}
            key={photo.url}
          >
            <Photo
              url={photo.thumbUrl}
              alt={photo.alt}
            />
          </div>
        )).slice(0, 7)}
        <div className='cursor-hand flex pr1 w100px pthalf'><div className='margin0auto pthalf font-size-3 c-brown-00 hc-blue200 cursor-hand valign-bottom' onClick={this.handleShowFullGallery}>...</div></div>
      </div>
    )
  }

  renderFullGallery() {
    return (
      <Lightbox onClose={this.handleCloseFullGallery}>
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
        ))}
      </Lightbox>
    )
  }

  render() {
    return (
      <div className='pthalf pbhalf pr1 pl1 g-gray100 b-yellow900 bs-solid bw-2'>
      {this.state.showFullGallery ? this.renderFullGallery() : this.renderPreviewGallery()}
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
