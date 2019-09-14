import React, { Component } from 'react';

import ImageMark from './ImageMark';

const BOLD = 'BOLD';
const BoldMark = props => {
  return <strong>{props.children}</strong>;
};
const ITALIC = 'ITALIC';
const ItalicMark = props => {
  return <em>{props.children}</em>;
};
const IMAGE = 'IMAGE';

const _setMark = (mark, event, editor) => {
  event.preventDefault();
  editor.toggleMark(mark);
  return true;
};

const setImageMark = (event, editor, href, caption) => {
  event.preventDefault();
  editor.toggleMark({ type: IMAGE, data: { href, caption } });
};

export const setMark = (event, editor, next) => {
  switch (event.key) {
    case 'b': {
      _setMark(BOLD, event, editor);
      break;
    }
    case 'i': {
      _setMark(ITALIC, event, editor);
      break;
    }
    case 'l': {
      const href = window.prompt('href');
      const caption = window.prompt('caption');
      setImageMark(event, editor, href, caption);
      break;
    }
    default:
      return next();
  }
};

export const renderMark = (props, editor, next) => {
  switch (props.mark.type) {
    case BOLD: {
      return <BoldMark {...props} />;
    }
    case ITALIC: {
      return <ItalicMark {...props} />;
    }
    case IMAGE: {
      const href = props.mark.data.get('href');
      const caption = props.mark.data.get('caption');
      return <ImageMark href={href} caption={caption} {...props} />;
    }
    default:
      return next();
  }
};
