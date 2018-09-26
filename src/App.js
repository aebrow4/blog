import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './css/App.css';
import './css/Atoms.css';
import {Value} from 'slate';
import About from './components/about/about.js';
import Post from './components/post/post.js';
import BlogEditor, {initialValue} from './components/editor/editor.js';
import Photo from './components/photo/photo.js';

import githubSvg from './assets/icon/github.svg';
import linkedinSvg from './assets/icon/linkedin.svg';
import andyPng from './assets/icon/andy.png';

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
    return <About />
  }

  renderHome() {
    return (
      <div>
        {this.postData.map(post => (
          <Post
            title={post.title}
            date={post.date}
            post={post.post}
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
      )
    );
  }
  render() {
    return (
      <Router>
        <div
          className={`app ${
            this.state.lightbox ? 'lightbox' : ''
          }`}>
          <header className='g-gray100 mt0 b-purple700 bs-solid bw-3 pt1 pb1 mb4 b-top'>
            <div className="content justify-between flex">
              <div className="">
            <Link to='/'>
              <h1 className='family-opensans valign-top inline mr1 c-trueblack'>Listening</h1>
            </Link>
              </div>
             <div className="">
                <Link to="/about">
                  <img
                    src={andyPng}
                    className="icon-large ml1"
                  />
            </Link>
            <a href="https://www.github.com/aebrow4">
              <img
                src={githubSvg}
                className="icon-large ml1"
              />
            </a>
            <a href="https://www.linkedin.com/in/andrewebrownaeb0">
              <img
                src={linkedinSvg}
                className="icon-large ml1"
              />
            </a>
              </div>
            </div>
          </header>
          <div className='content'>
            <Route exact path='/' render={this.renderHome} key={0}/>
            <Route exact path='/about' render={this.renderAbout} key={1}/>
            <Route path='/posts/:postId' render={this.renderPost} key={2} />
          </div>
        </div>
      </Router>
    );
  }
}
