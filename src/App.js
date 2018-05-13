import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './Atoms.css';
import {Value} from 'slate';
import Post from './components/post/post.js';
import BlogEditor, {initialValue} from './components/editor/editor.js';
import Photo from './components/photo/photo.js';
import {renderMark} from './marks/marks.js';

// TODO: move content to nginx
import PostPeru from './assets/posts/peru.js';
import PostMedellin from './assets/posts/medellin.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
    this.renderHome = this.renderHome.bind(this);

    this.state = {lightbox: false};
  }

  static postData: [
    {
      idx: 0,
      Component: PostMedellin,
    },
    {
      idx: 1,
      Component: PostPeru,
    },
  ]

  renderHome() {
    return (
      <div>
        {PostMedellin}
        {PostPeru}
      </div>
    );
  }
  renderPost({match}) {
    const id = Number(match.params.postId);
    return this.constructor.postData.map(
      post =>
      post.idx === id && post.Component
    );
  }
  render() {
    return (
      <Router>
        <div
          className={`app bgg-grey-300 ${
            this.state.lightbox ? 'lightbox' : ''
          }`}>
          <header>
            <h1 className="fontSize-24 ccc-brown-300 weight-400">
              Andy's blog
            </h1>
          </header>
          <div className="content">
            <Route exact path="/" render={this.renderHome} key={1}/>
            <Route path="/posts/:postId" render={this.renderPost} key={2} />
          </div>
        </div>
      </Router>
    );
  }
}
