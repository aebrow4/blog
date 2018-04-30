import React, { Component } from 'react';
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

  render() {
    return (
      <div className="app bgg-grey-300">
        <header>
          <h1 className="fontSize-24 bgg-grey-500 ccc-blue-200">Andy's witty blog title</h1>
        </header>
        <div className="content">
          <div className="content">
            <Post
              title="Medellin, CO"
              post={testPost2Rtf}
              renderMark={renderMark}
            />
            <Post
              title="Medellin, CO"
              post={testPost2Rtf}
              renderMark={renderMark}
            />
            <Post
              title="Medellin, CO"
              post={testPost2Rtf}
              renderMark={renderMark}
            />
          </div>
        </div>
      </div>
    );
  }
}


