import React, { Component } from 'react';

const ESCAPE = 27;
export default class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPress);

    window.scrollTo(0, 0);
    // Hack to apply some CSS to the root element hiding overflow
    document.body.className += ' lightbox o-hidden relative';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPress);
    document.body.className = document.body.className.replace('lightbox', '');
    document.body.className = document.body.className.replace('o-hidden', '');
    document.body.className = document.body.className.replace('relative', '');
  }

  onClose(e) {
    this.props.onClose();
    window.dispatchEvent(new Event('closeLightbox'));
  }

  onKeyPress(e) {
    if (e.keyCode === ESCAPE) this.onClose();
  }

  render() {
    return (
      <div
        className="z10 fixed top0 left0 g-trueblack m0a w-full h-full pt2"
        onClick={this.onClose}
      >
        {this.props.children}
      </div>
    );
  }
}
