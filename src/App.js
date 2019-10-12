import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Value } from 'slate';
import './css/App.css';
import './css/Atoms.css';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Post from './components/post/post.js';
import PhotoViewer from './components/photo/photo-viewer.js';
import { truncatePost, postIdFromTitle } from './util';

// Store the relative paths of the JSON blog posts
const POSTS = ['grand-teton.json', 'cathedral-peak.json', 'lone-pine.json'];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.setImage = this.setImage.bind(this);

    this.state = { posts: [], imageViewer: {} };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const { ASSET_HOST } = window.app.config;
    const promises = POSTS.map(path =>
      fetch(`${ASSET_HOST}assets/post/${path}`)
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
          post: Value.fromJSON(j),
          summaryPost: Value.fromJSON(truncatePost(j)),
        }));
        this.setState({ posts });
      });
  }

  setImage(img) {
    this.setState({ imageViewer: img })
  }

  renderAbout() {
    return <About />;
  }

  renderHome() {
    return (
      <div className="flex justify-around" style={{alignItems: "flex-start", }}>
        <div className="" style={{}}>
            {this.state.posts.map(post => (
              <Post
                title={post.title}
                date={post.date}
                summaryPost={post.summaryPost}
                imageViewer={this.state.imageViewer}
                summaryView
                readOnly
                setImage={this.setImage}
                id={post.id}
                key={post.id}
              />
            ))}
          </div>
          <div className="viewer sticky" style={{top: 0, marginTop: "6.5rem"}}>
            <PhotoViewer
              url={`${window.app.config.ASSET_HOST}${this.state.imageViewer.url}`}
              alt=""
              caption=""
            />
        </div>
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
            readOnly
            imageViewer={this.state.imageViewer}
            setImage={this.setImage}
            id={post.id}
            key={post.id}
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
