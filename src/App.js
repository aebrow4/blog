import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }  from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './Atoms.css';
import { Value } from "slate";
import Post from "./components/post/post.js";
import BlogEditor, { initialValue } from "./components/editor/editor.js";
import Photo from './components/photo/photo.js';
import {
  renderMark,
} from "./marks/marks.js";
import { _1200x900, _600x600 } from './util/constants.js';

// all of these hardcoded and imported posts and assets
// should be replaced in the future with fetching from NGINX
import testPost1 from "./assets/posts/test-post.js";
import testPost2 from "./assets/posts/test-post-hormigas.js";
import ctgSunset from "./assets/img/ctg-sunset-full.png"
import ctgSunsetThumb from "./assets/img/ctg-sunset-thumb.png"
import photoSalkantayLarge from './assets/img/salkantay-900x600.png';
import photoSalkantayThumb from './assets/img/salkantay-100x100.png';
import photoValleyLarge from './assets/img/vilcabamba-valley-1200x900.png'
import photoValleyThumb from './assets/img/vilcabamba-valley-100x100.png'
const testPost1Rtf = Value.fromJSON(testPost1.value);
const testPost2Rtf = Value.fromJSON(testPost2.value);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  // TODO: get rid of this hardcoded content
  static postMetaData = [{
    title: 'Medellin, CO',
    post: testPost2Rtf,
  }, {
    title: 'Medellin, CO',
    post: testPost2Rtf,
  }, {
    title: 'Medellin, CO',
    post: testPost2Rtf,
  }]

  renderHome() {
    return (
      <div>
        <Post
          title='Medellin, CO'
          post={testPost2Rtf}
          renderMark={renderMark}
          idx={0}
        />
        <Post
          title='Cordillera Vilcabamba, PE'
          renderMark={renderMark}
          photos={[
            { url: photoSalkantayLarge, thumbUrl: photoSalkantayThumb, alt: 'Salkantay' },
            { url: photoValleyLarge, thumbUrl: photoValleyThumb, alt: 'Vilcabamba' }
          ]}
          idx={2}
        />
      </div>
    );
  }
  renderPost({ match }) {
    const id = match.params.postId;
    return (
      <Post
        title={this.constructor.postMetaData[id].title}
        post={this.constructor.postMetaData[id].post}
        renderMark={renderMark}
        idx={match.params.postId}
      />
    ) 
  }
  render() {
    return (
      <Router>
        <div className="app bgg-grey-300">
          <header>
            <h1 className="fontSize-24 bgg-grey-500 ccc-brown-300">Andy's witty blog title</h1>
          </header>
          <div className="content">
            <Route exact path='/' render={this.renderHome} />
            <Route path='/posts/:postId' render={this.renderPost} />
          </div>
        </div>
      </Router>
    );
  }
}


