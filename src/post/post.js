import React, { Component } from 'react';
import { Editor } from "slate-react";

import Photo from "../photo/photo.js";

// Presently it is not possible to include photos during the text-editing
// part of creating a post.
// The current implementation simply displays photos after the text of the post.
export default class Post extends Component {
  renderContent() {
    return (
      <div className="lh-1p4 bgg-grey-400 ccc-brown-100">
        <Editor
          value={this.props.post}
          renderMark={this.props.renderMark}
        />
      </div>
    );
  }

  renderPhotos() {
    return this.props.photos.map(photo => <div><Photo url={photo} /></div>);
  }

  render() {
    return (
      <div className="pl1 pr1 mb2">
        <div className="fontSize-40 weight-400 pb1 bgg-grey-400 ccc-brown-300">{this.props.title}</div>
        {this.renderContent()}
        {this.renderPhotos()}
      </div>
    );
  }
}

Post.defaultProps = {
  photos: [],
};
