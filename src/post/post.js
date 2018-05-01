import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Editor } from "slate-react";

import Photo from "../photo/photo.js";

// Presently it is not possible to include photos during the text-editing
// part of creating a post.
// The current implementation simply displays photos after the text of the post.
export default class Post extends Component {
  renderContent() {
    return (
      <div className="pl1 pr1 lh-1p4 bgg-grey-400 ccc-brown-100">
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
      <div className="mb2">
        <div className="fontSize-40 weight-400 align-center pb1 bgg-grey-400 ccc-brown-300"><Link to={`/posts/${this.props.idx}`}>{this.props.title}</Link></div>
        {this.renderContent()}
        {this.renderPhotos()}
      </div>
    );
  }
}

Post.defaultProps = {
  photos: [],
};
