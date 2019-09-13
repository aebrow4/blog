import React, { Component } from 'react';
import { Value } from "slate";
import { Editor } from "slate-react";
import { addMetadataToPostMarkup } from "../../util";
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
      post: initialValue,
      title: "",
      date: "",
    }

    this.onPostChange = this.onPostChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onFieldChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  onPostChange({ value }) {
    this.setState({ post: value });
  }

  onSave(event, post) {
    event.preventDefault();
    post = addMetadataToPostMarkup(post, {
      title: this.state.title,
      date: this.state.date,
    })
    console.log(JSON.stringify(post))
  }

  onKeyDown(event, change) {
    if (!event.metaKey) return;
    if (event.key === 'Enter' || event.key === 's') return this.onSave(event, change);
    
    return setMark(event, change);
  }

  render() {
    return (
      <div>
        <h2>Write something</h2>
        <h3 className="mt1">Title</h3>
        <input onChange={e => this.onFieldChange(e, "title")} />
        <h3 className="mt1">Date</h3>
        <input onChange={e => this.onFieldChange(e, "date")} />
        <h3 className="mt1">Content</h3>
        <Editor
          value={this.state.post}
          onChange={this.onPostChange}
          onKeyDown={this.onKeyDown}
          renderMark={this.renderMark}
        />
      </div>
    );
  }
}
