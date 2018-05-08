import React, { Component } from 'react';
import { Value } from "slate";
import { Editor } from "slate-react";
import {
  renderMark,
  setMark
} from '../../marks/marks.js';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Type it here.',
              },
            ],
          },
        ],
      },
    ],
  },
})
export default class BlogEditor extends Component {
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
      <Editor
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        renderMark={this.renderMark}
      />
    );
  }
}
