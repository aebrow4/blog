import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './lightbox.css';

const ESCAPE = 27;
export default class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPress)
  }

  componentWillUnMount() {
    window.removeEventListener('keydown', this.onKeyPress)
  }

  onClose(e) {
    this.props.onClose();
  }

  onKeyPress(e) {
    if (e.keyCode === ESCAPE) this.onClose();
  }

  render() {
    return (
      <div className="absolute top0 left0 bgg-black margin0auto w100 h100" onClick={this.onClose}>
        <div className='pt2'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

