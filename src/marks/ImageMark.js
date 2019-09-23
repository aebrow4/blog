import React, { Component } from 'react';

import Photo from '../components/photo/photo';
import { ASSET_HOST } from '../config';

const MED_IMG = "MED";
const LG_IMG = "LG";

export default class ImageMark extends Component {
  constructor() {
    super();
    this.state = { renderImage: false, lastTouch: new Date(), imageSize: MED_IMG };

    this.toggleImageSize = this.toggleImageSize.bind(this);
  }

  toggleImageSize(e) {
    e && e.preventDefault()
    const { imageSize } = this.state;
    if (imageSize === MED_IMG) {
      this.setState({ renderImage: true, imageSize: LG_IMG })
    } else if (imageSize === LG_IMG) {
      this.setState({ renderImage: false, imageSize: MED_IMG }, () => {
        // scroll window back to where this mark was
      });
    } else {
    }
  }

  renderImage() {
    return (
      <Photo
        url={`${ASSET_HOST}/${this.props.href}`}
        caption={this.props.caption}
        imageSize={this.state.imageSize}
        cycleImageSize={this.toggleImageSize}
      />
    );
  }

  render() {
    return (
      <span>
        {this.state.renderImage && this.renderImage()}
        <a
          onClick={e => this.toggleImageSize(e)}
          href={this.props.href}
          onMouseEnter={() => {
            const now = new Date();
            if (now.getTime() - this.state.lastTouch.getTime() < 25) return;
            this.setState({
              renderImage: true,
              lastTouch: now,
            });
          }}
          onMouseLeave={() => {
            const now = new Date();
            if (now.getTime() - this.state.lastTouch.getTime() < 25) return;
            if (this.state.imageSize === LG_IMG) return;
            this.setState({
              renderImage: false,
              lastTouch: now,
            });
          }}
        >
          {this.props.children}
        </a>
      </span>
    );
  }
}
