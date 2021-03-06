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
      <div className="flex flex-row flex-wrap justify-between">
        {this.props.photos
          .map((photo, i) => (
            <div
              className="cursor-hand flex w100 h100 o-hidden"
              onClick={() => this.handleOpenCarousel(i)}
              key={photo.url}
            >
              <Photo url={photo.thumbUrl} alt={photo.alt} />
            </div>
          ))
          .slice(0, 7)}
      </div>
    );
  }

  renderFullGallery() {
    return (
      <Lightbox onClose={this.handleCloseFullGallery}>
        {this.props.photos.map((photo, i) => (
          <div
            className="inline-block pr1 cursor-hand"
            onClick={() => this.handleOpenCarousel(i)}
            key={photo.url}
          >
            <Photo url={photo.thumbUrl} alt={photo.alt} />
          </div>
        ))}
      </Lightbox>
    );
  }

  render() {
    return (
      <div className="pt4 pb4 pr2 pl2 g-gray100 b-gray300 bs-solid bw-1">
        {this.state.showFullGallery
          ? this.renderFullGallery()
          : this.renderPreviewGallery()}
        {this.state.showCarousel && (
          <Carousel
            photos={this.props.photos}
            index={this.state.index}
            onClose={this.handleCloseCarousel}
          />
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Gallery.defaultProps = {
  photos: [],
};
