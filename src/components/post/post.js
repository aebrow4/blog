import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {renderMark} from '../../marks/marks.js';
import {Link} from 'react-router-dom';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import Gallery from '../photo/gallery.js';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summaryView: this.props.summaryView
    }
  }
  render() {
    return (
      <div className="mb2">
        <div>
          <Link to={`/posts/${this.props.idx}`}>
            <h2 className="family-opensans weight-700 pbh">{this.props.title}</h2>
          </Link>
          <h3 className="c-black70 family-opensans pb1">{this.props.date}</h3>
        </div>
        {this.props.post && (
          <div className="lh-1p5 g-gray100 b-gray300 bs-solid bw-1 p2">
            <Editor
              value={Value.fromJSON(this.props.post)}
              renderMark={renderMark}
              truncate={this.state.summaryView}
            />
            {this.state.summaryView && (
              <Link to={`/posts/${this.props.idx}`}>
                <h3 className="">Read more</h3>
              </Link>
            )}
          </div>
        )}
        {this.props.photos && (
          <Gallery photos={this.props.photos} />
        )}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  photos: PropTypes.arrayOf(PropTypes.object),
};

