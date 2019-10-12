import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lightbox from "../lightbox/lightbox";

const LG_IMG_SUFFIX = `-lg.jpg`

export default class Photo extends Component {
  render() {
    const { url, caption, alt } = this.props;
    const src = `${url}${LG_IMG_SUFFIX}`;
    return (
      <Lightbox
        onClose={() => this.props.toggleImage()}
      >
        <div className={"m0a g-trueblack"}>
          <img className="m0a block" src={src} alt={alt} style={{maxHeight: "90vh"}}/>
          {caption && (
            <div>
              <p className="font-size-threequarter align-center weight-400 c-white mr4 ml4">
                {caption}
              </p>
            </div>
          )}
        </div>
      </Lightbox>
    );
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
};
