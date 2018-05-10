import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './photo.css';

export default class Photo extends Component {
  checkViewport() {
    // is the viewport smaller than the dimensions of the image we are trying to render?
    const viewPortHeight = window.innerHeight;
    const viewPortWidth = window.innerWidth;
  }

  fitToViewport() {

  }

  render() {
    return (
      <div
        className={`relative margin0auto bgg-black`}
      >
          <img
            className='margin0auto block'
            src={this.props.url}
            alt={this.props.alt}
          />
          <div><p className='font-size-half align-center weight-400 ccc-white'>{this.props.caption}</p></div>
      </div>
    );
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
