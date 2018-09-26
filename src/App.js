import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './css/App.css';
import './css/Atoms.css';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Post from './components/post/post.js';
import BlogEditor, {initialValue} from './components/editor/editor.js';
import Photo from './components/photo/photo.js';

import postPeru from './assets/posts/peru.js';
import postMedellin from './assets/posts/medellin.js';
import postColombia from './assets/posts/colombia.js';
import postBerlin from './assets/posts/berlin.js';
import postAmsterdam from './assets/posts/amsterdam.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
    this.renderHome = this.renderHome.bind(this);

    this.postData = [
      postAmsterdam,
      postBerlin,
      postPeru,
      postColombia,
      postMedellin,
    ];

    this.state = {lightbox: false};
  }

  renderAbout() {
    return <About />;
  }

  renderHome() {
    return (
      <div>
        {this.postData.map(post => (
          <Post
            title={post.title}
            date={post.date}
            summaryPost={post.summaryPost}
            photos={post.photos}
            summaryView
            idx={post.idx}
            key={post.idx}
          />
        ))}
      </div>
    );
  }
  renderPost({match}) {
    const id = Number(match.params.postId);
    return this.postData.map(
      post =>
        post.idx === id && (
          <Post
            title={post.title}
            date={post.date}
            post={post.post}
            photos={post.photos}
            idx={post.idx}
            key={post.idx}
          />
        ),
    );
  }
  render() {
    return (
      <Router>
        <div className={`app ${this.state.lightbox ? 'lightbox' : ''}`}>
          <Header />
          <div className="content">
            <Route exact path="/" render={this.renderHome} key={0} />
            <Route exact path="/about" render={this.renderAbout} key={1} />
            <Route path="/posts/:postId" render={this.renderPost} key={2} />
          </div>
        </div>
      </Router>
    );
  }
}
