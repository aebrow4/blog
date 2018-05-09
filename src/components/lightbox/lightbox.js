import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './lightbox.css';

export default class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <div className="absolute top0 left0 bgg-black margin0auto w100 h100" onClick={this.handleClose}>
        <div className='pt2'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

