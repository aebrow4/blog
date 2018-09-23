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
        <div>
          <Link to={`/posts/${this.props.idx}`}>
            <h2 className="family-opensans weight-700 pb1">{this.props.title}</h2>
          </Link>
        </div>
        {this.props.post && (
          <div className="lh-1p4">
            <Editor
              value={this.props.post}
              renderMark={this.props.renderMark}
            />
          </div>
        )}
        {this.props.photos.length ? (
          <Gallery photos={this.props.photos} />
        ) : null}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.instanceOf(Value),
  photos: PropTypes.arrayOf(PropTypes.object),
  renderMark: PropTypes.func,
};

Post.defaultProps = {
  photos: [],
};
