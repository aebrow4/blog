import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _1200x900, _600x600 } from '../../util/constants.js';
import './photo.css';

const photoSizes = {
  medium: { height: '600px', width: '600px' },
  large: { height: '900', width: '1200px' },
}
export default class Photo extends Component {

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
