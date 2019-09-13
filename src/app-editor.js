import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/Atoms.css';
import Header from './components/header/header.js';
import BlogEditor from './components/editor/editor.js';

export default class AppEditor extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="content">
            <Route exact path="/" component={BlogEditor} key={0} />
          </div>
        </div>
      </Router>
    );
  }
}
