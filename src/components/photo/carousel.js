import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './photo.js';
import Lightbox from '../lightbox/lightbox.js';


const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { index: this.props.index };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPress.bind(this));
  }

  componentWillUnMount() {
    window.removeEventListener('keydown', this.onKeyPress.bind(this));
  }

  handleNext() {
    const numPhotos = this.props.photos.length;
    // refactor this to be async
    this.setState({ index: (this.state.index + 1) % numPhotos });
  }

  handlePrevious() {
    const numPhotos = this.props.photos.length;
    // refactor this to be async
    this.setState({ index: (this.state.index + numPhotos - 1) % numPhotos });
  }

  onKeyPress(e) {
    switch(e.keyCode) {
      case RIGHT_ARROW: {
        this.handleNext();
        break;
      }
      case LEFT_ARROW: {
        this.handlePrevious();
        break;
      }
      default: return null;
    }
  }

  render() {
    const photo = this.props.photos[this.state.index];
    return (
      <Lightbox onClose={this.props.onClose}>
        <div className='bgg-black'>
          <Photo
            url={photo.url}
            alt={photo.alt}
            key={photo.url}
            caption={photo.caption}
            onClick={this.handleNext}
            showCaption
          />
        <div><p className='italic align-center c-gray400 font-size-threequarter'>{'Use arrow keys to navigate'}</p></div>
        </div>
      </Lightbox>
    )
  }
}

Carousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

Carousel.defaultProps = {
  index: 0,
};
