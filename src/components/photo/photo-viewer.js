import React, { Component } from 'react';
import PropTypes from 'prop-types';


const MED_IMG = "med";
const MED_IMG_SUFFIX = `-${MED_IMG}.jpg`

export default class PhotoViewer extends Component {
  render() {
    const { url, alt, caption } = this.props;
    if (!url) return null;
    const src = `${url}${MED_IMG_SUFFIX}`;

    return (
      <div className="z10 g-gray100 b-gray300 bs-solid bw-1">
        <div className={`flex justify-around align-center`} style={{width: "520px", height: "520px"}}>
          <img className="m0a block" src={src} alt={alt}/>
        </div>
        <div className="align-center weight-400 c-black">{caption}</div>
      </div>
    );
  }
}

PhotoViewer.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  imageSize: PropTypes.string,
};
