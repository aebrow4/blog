import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from "slate-react";
import initialValue from "./editor/editor.js";
import {
  setMark,
  renderMark,
} from "./editor/marks/marks.js";


class App extends Component {
  constructor() {
    super();
    this.state = {
      value: initialValue,
    }

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange({ value }) {
    this.setState({ value });
  }

  onSave(event, value) {
    event.preventDefault();
    console.log(JSON.stringify(value))
  }

  onKeyDown(event, change) {
    if (!event.metaKey) return;
    if (event.key === 's') return this.onSave(event, change);
    
    return setMark(event, change);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="content">
          <Editor
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            renderMark={renderMark}
          />
        </div>
      </div>
    );
  }
}

export default App;
