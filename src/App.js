import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Value } from 'slate';
import { ASSET_HOST } from './config';
import './css/App.css';
import './css/Atoms.css';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Post from './components/post/post.js';
import { truncatePost, postIdFromTitle } from './util';

// Store the relative paths of the JSON blog posts
const POSTS = ['cathedral-peak.json'];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
    this.renderHome = this.renderHome.bind(this);

    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const promises = POSTS.map(path =>
      fetch(`${ASSET_HOST}/assets/post/${path}`)
    );
    Promise.all(promises)
      .then(data => {
        return Promise.all(data.map(d => d.json()));
      })
      .then(json => {
        const posts = json.map(j => ({
          title: j.title,
          id: postIdFromTitle(j.title),
          date: j.date,
          post: Value.fromJSON(j.value),
          summaryPost: Value.fromJSON(truncatePost(j.value)),
        }));
        this.setState({ posts });
      });
  }

  renderAbout() {
    return <About />;
  }

  renderHome() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post
            title={post.title}
            date={post.date}
            summaryPost={post.summaryPost}
            photos={post.photos}
            summaryView
            readOnly
            id={post.id}
            key={post.id}
          />
        ))}
      </div>
    );
  }

  renderPost({ match }) {
    const id = match.params.postId;
    return this.state.posts.map(
      post =>
        post.id === id && (
          <Post
            title={post.title}
            date={post.date}
            post={post.post}
            photos={post.photos}
            id={post.id}
            key={post.id}
            readOnly
          />
        )
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
