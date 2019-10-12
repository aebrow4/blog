import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderMark } from '../../marks/marks.js';
import { Link } from 'react-router-dom';
import { Editor } from 'slate-react';
import Gallery from '../photo/gallery.js';
import PhotoViewer from "../photo/photo-viewer.js";

export default class Post extends Component {
  renderSummaryPost() {
    const { summaryPost, setImage, readOnly } = this.props;
    return (
      <Editor
        value={summaryPost}
        renderMark={(props, editor, next) => renderMark({ ...props, setImage, }, editor, next)}
        readOnly={readOnly}
      />
    );
  }

  renderFullPost() {
    const { post, setImage, readOnly, imageViewer } = this.props;
    return (
        <Editor
          value={post}
          renderMark={(props, editor, next) => renderMark({ ...props, setImage, }, editor, next)}
          readOnly={readOnly}
        />
    );
  }

  render() {
    return (
      <div className="mb2">
        <div >
          <Link to={`/posts/${this.props.id}`}>
            <h2 className="family-opensans weight-700">
              {this.props.title}
            </h2>
          </Link>
          <h3 className="c-black70 family-opensans p1">{this.props.date}</h3>
        </div>
        <div className="flex justify-around" style={{alignItems: "flex-start"}}>
          {(this.props.post || this.props.summaryPost) && (
            <div className="lh-1p5 g-gray100 b-gray300 bs-solid bw-1 p2 posts">
              {this.props.summaryView
                ? this.renderSummaryPost()
                  : this.renderFullPost()}
              {this.props.summaryView && (
                <Link to={`/posts/${this.props.id}`}>
                  <h3 className="mt2 family-opensans">
                    <div>Read more</div>
                  </h3>
                </Link>
              )}
            </div>
          )}
          {!this.props.summaryView && (
            <div className="viewer sticky mt1" style={{top:0}}>
              <PhotoViewer
                url={`${window.app.config.ASSET_HOST}${this.props.imageViewer.url}`}
                alt=""
                caption=""
              />
            </div>
            )}
          </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  photos: PropTypes.arrayOf(PropTypes.object),
};
