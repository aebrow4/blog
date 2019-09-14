import React, { Component } from 'react';

import Photo from '../components/photo/photo';
import { ASSET_HOST } from '../config';

export default class ImageMark extends Component {
  constructor() {
    super();
    this.state = { renderPreview: false, lastTouch: new Date() };
  }

  renderPreview() {
    return (
      <Photo
        url={`${ASSET_HOST}/${this.props.href}`}
        caption={this.props.caption}
        absolute
      />
    );
  }
  render() {
    return (
      <span>
        {this.state.renderPreview && this.renderPreview()}
        <a
          href={this.props.href}
          onMouseOver={() => {
            const now = new Date();
            if (now.getTime() - this.state.lastTouch.getTime() < 25) return;
            this.setState({
              renderPreview: !this.state.renderPreview,
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
