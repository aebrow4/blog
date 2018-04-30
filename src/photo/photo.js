import React, { Component } from 'react';

export default class Photo extends Component {

  render() {
    const classNames = {
      relative: true,
      imgContainerHalf: true,
      imgContainerFull: false,
    }
    return (
      <div
        className="relative imgContainerHalf"
      >
      <img
        className="imgFull"
        src={this.props.url}
      />
      </div>
    );
  }
}


// dims: Tall, Wide
// size: S, M, L
//
// 
//
//
