import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        className={`relative m0a bgg-black`}
      >
          <img
            className='m0a block'
            src={this.props.url}
            alt={this.props.alt}
          />
          {this.props.showCaption && <div><p className='font-size-threequarter align-center weight-400 c-white mr4 ml4'>{this.props.caption}</p></div>}
      </div>
    );
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  showCaption: PropTypes.bool,
};
