import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }  from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './Atoms.css';
import { Value } from "slate";
import Post from "./post/post.js";
import BlogEditor from "./editor/editor.js";
import { initialValue } from "./editor/editor.js";
import {
  renderMark,
} from "./editor/marks/marks.js";

// all of these hardcoded and imported posts and assets
// should be replaced in the future with fetching from NGINX
import testPost1 from "./assets/posts/test-post.js";
import testPost2 from "./assets/posts/test-post-hormigas.js";
import ctgSunset from "./assets/img/ctg-sunset-full.png"
import ctgSunsetThumb from "./assets/img/ctg-sunset-thumb.png"
const testPost1Rtf = Value.fromJSON(testPost1.value);
const testPost2Rtf = Value.fromJSON(testPost2.value);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  // TODO: get rid of this hardcoded content
  static postMetaData = [{
    title: "Medellin, CO",
    post: testPost2Rtf,
  }, {
    title: "Medellin, CO",
    post: testPost2Rtf,
  }, {
    title: "Medellin, CO",
    post: testPost2Rtf,
  }]

  renderHome() {
    return (
      <div>
        <Post
          title="Medellin, CO"
          post={testPost2Rtf}
          renderMark={renderMark}
          idx={0}
        />
        <Post
          title="Medellin, CO"
          post={testPost2Rtf}
          renderMark={renderMark}
          idx={1}
        />
        <Post
          title="Medellin, CO"
          post={testPost2Rtf}
          renderMark={renderMark}
          idx={2}
        />
      </div>
    );
  }
  renderPost({ match }) {
    const id = match.params.postId;
    console.log(this.constructor.postMetaData[id])
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
            <h1 className="fontSize-24 bgg-grey-500 ccc-blue-200">Andy's witty blog title</h1>
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


