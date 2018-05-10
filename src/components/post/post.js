import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import Gallery from '../photo/gallery.js';

export default class Post extends Component {
  render() {
    return (
      <div className="mb2">
        <div className="fontSize-40 weight-400 align-center pb1 bgg-grey-400 ccc-brown-300">
          <Link to={`/posts/${this.props.idx}`}>{this.props.title}</Link>
        </div>
        <div className="pl1 pr1 lh-1p4 bgg-grey-400 ccc-brown-100">
          <Editor value={this.props.post} renderMark={this.props.renderMark} />
        </div>
        {this.props.photos.length ? (
          <Gallery photos={this.props.photos} />
        ) : null}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.instanceOf(Value).isRequired,
  photos: PropTypes.arrayOf(PropTypes.object),
  renderMark: PropTypes.func,
};

Post.defaultProps = {
  post: new Value({}),
  photos: [],
};
