import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lightbox from "../lightbox/lightbox";

const MED_IMG_SUFFIX = '-400.jpg'
const LG_IMG_SUFFIX = '-1000.jpg'
const MED_IMG = "MED";
const LG_IMG = "LG";

export default class Photo extends Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    this.setState({ imageSize: LG_IMG })
  }

  onCloseLightbox() {
    this.setState({ imageSize: MED_IMG })
  }

  renderPreview() {
    const { url, caption, alt, cycleImageSize } = this.props;
    const src = `${url}${MED_IMG_SUFFIX}`;
    return (
      <div className={"absolute m0a bgg-black z10 "} style={{top: "2rem", border: "4 px solid black"}} onClick={cycleImageSize}>
        <img className="m0a block" src={src} alt={alt} />
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
          <img className="m0a block" src={src} alt={alt} />
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
