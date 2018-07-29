import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
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
import PostColombia from './assets/posts/colombia.js';
import PostBerlin from './assets/posts/berlin.js';
import PostAmsterdam from './assets/posts/amsterdam.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
    this.renderHome = this.renderHome.bind(this);

    this.postData = [
      {
        idx: 0,
        Component: PostMedellin,
      },
      {
        idx: 1,
        Component: PostColombia,
      },
      {
        idx: 2,
        Component: PostPeru,
      },
      {
        idx: 3,
        Component: PostBerlin,
      },
      {
        idx: 4,
        Component: PostAmsterdam,
      },
    ];

    this.state = {lightbox: false};
  }

  renderHome() {
    return (
      <div>
        {PostAmsterdam}
        {PostBerlin}
        {PostPeru}
        {PostColombia}
        {PostMedellin}
      </div>
    );
  }
  renderPost({match}) {
    const id = Number(match.params.postId);
    return this.postData.map(
      post =>
      post.idx === id && post.Component
    );
  }
  render() {
    return (
      <Router>
        <div
          className={`app ${
            this.state.lightbox ? 'lightbox' : ''
          }`}>
          <header>
            <h3 className='bgg-grey-100 mt0 bbb-brown-200 border-bottom'>
              <Link to='/'>Andy's blog</Link>
            </h3>
          </header>
          <div className='content'>
            <Route exact path='/' render={this.renderHome} key={1}/>
            <Route path='/posts/:postId' render={this.renderPost} key={2} />
          </div>
        </div>
      </Router>
    );
  }
}
