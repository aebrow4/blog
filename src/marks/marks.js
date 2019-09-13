import React from 'react';

const BOLD = 'BOLD';
const BoldMark = props => {
  return <strong>{props.children}</strong>;
};
const setBoldMark = (event, change) => {
  event.preventDefault();
  change.toggleMark(BOLD);
  return true;
};

const ITALIC = 'ITALIC';
const ItalicMark = props => {
  return <em>{props.children}</em>;
};
const setItalicMark = (event, change) => {
  event.preventDefault();
  change.toggleMark(ITALIC);
  return true;
};

export const setMark = (event, change) => {
  // eslint-disable-next-line default-case
  switch (event.key) {
    case 'b': {
      setBoldMark(event, change);
      break
    }
    case 'i': {
      setItalicMark(event, change);
      break
    }
  }
};

export const renderMark = props => {
  // eslint-disable-next-line default-case
  switch (props.mark.type) {
    case BOLD: {
      return <BoldMark {...props} />;
    }
    case ITALIC: {
      return <ItalicMark {...props} />;
    }
  }
};
