import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Photo extends Component {
  render() {
    return (
      <div className={`${this.props.absolute ? "absolute" : "relative"} m0a bgg-black`}>
        <img className="m0a block" src={this.props.url} alt={this.props.alt} />
        {this.props.caption && (
          <div>
            <p className="font-size-threequarter align-center weight-400 c-white mr4 ml4">
              {this.props.caption}
            </p>
          </div>
        )}
      </div>
    );
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  absolute: PropTypes.bool,
};
