import React, { Component } from 'react';

import Photo from '../components/photo/photo';

const MED_IMG = 'med';
const LG_IMG = 'lg';

export default class ImageMark extends Component {
  constructor() {
    super();
    this.state = {};

    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage(e) {
    e && e.preventDefault();
    const { renderImage } = this.state;
    if (renderImage) {
      this.setState({
        renderImage: false,
        pageYOffset: window.pageYOffset,
      });
    } else {
      this.setState({ renderImage: true }, () => {
        window.scrollTo(0, this.state.pageYOffset);
      });
    }
  }

  renderImage() {
    const { ASSET_HOST } = window.app.config;
    return (
      <Photo
        url={`${ASSET_HOST}${this.props.href}`}
        caption={this.props.caption}
        toggleImage={this.toggleImage}
      />
    );
  }

  render() {
    return (
      <span>
        {this.state.renderImage && this.renderImage()}
        <a
          onClick={e => this.toggleImage(e)}
          href={this.props.href}
          onMouseEnter={() => {
            this.props.setImage({
              url: `${this.props.href}`,
              caption: this.props.caption,
              cycleImageSize: this.toggleImageSize,
            });
          }}
        >
          {this.props.children}
        </a>
      </span>
    );
  }
}
