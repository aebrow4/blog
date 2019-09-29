import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lightbox from "../lightbox/lightbox";

const MED_IMG = "med";
const LG_IMG = "lg";
const MED_IMG_SUFFIX = `-${MED_IMG}.jpg`
const LG_IMG_SUFFIX = `-${LG_IMG}.jpg`

export default class Photo extends Component {
  onClick() {
    this.setState({ imageSize: LG_IMG })
  }

  onCloseLightbox() {
    this.setState({ imageSize: MED_IMG })
  }

  renderPreview() {
    const { url, alt, cycleImageSize } = this.props;
    const src = `${url}${MED_IMG_SUFFIX}`;
    return (
      <div className={"absolute m0a bgg-black z10"} style={{top: "-20rem", left: "4rem" }} onClick={cycleImageSize}>
        <img className="m0a block" src={src} alt={alt} style={{border: "4px solid black"}}/>
      </div>
    );
  }

  renderFull() {
    const { url, caption, alt, cycleImageSize } = this.props;
    const src = `${url}${LG_IMG_SUFFIX}`;
    return (
      <Lightbox
        onClose={cycleImageSize}
      >
        <div className={"m0a bgg-black"}>
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

  render() {
    const { imageSize } = this.props;
    if (imageSize === LG_IMG) {
      return this.renderFull();
    } else if (imageSize === MED_IMG) {
      return this.renderPreview()
    }

    return null;
  }
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  imageSize: PropTypes.string,
};
