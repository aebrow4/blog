import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {renderMark} from '../../marks/marks.js';
import {Link} from 'react-router-dom';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import Gallery from '../photo/gallery.js';

export default class Post extends Component {
  renderSummaryPost() {
    return (
     <Editor
       value={this.props.summaryPost}
       renderMark={renderMark}
     />
    );
  }

  renderFullPost() {
    return (
     <Editor
       value={this.props.post}
       renderMark={renderMark}
     />
    );
  }

  render() {
    return (
      <div className='mb2'>
        <div>
          <Link to={`/posts/${this.props.idx}`}>
            <h2 className='family-opensans weight-700 pbh'>{this.props.title}</h2>
          </Link>
          <h3 className='c-black70 family-opensans pb1'>{this.props.date}</h3>
        </div>
        {(this.props.post || this.props.summaryPost) && (
          <div className='lh-1p5 g-gray100 b-gray300 bs-solid bw-1 p2'>
            {this.props.summaryView ? this.renderSummaryPost() : this.renderFullPost()}
            {this.props.summaryView && (
              <Link to={`/posts/${this.props.idx}`}>
                <h3 className='mt2 family-opensans'>
                  <div>Read more</div>
                </h3>
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


