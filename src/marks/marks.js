import React from 'react';

const BOLD = "BOLD";
const BoldMark = props => {
  return <strong>{props.children}</strong>
}
const setBoldMark = (event, change) => {
  event.preventDefault();
  change.toggleMark(BOLD);
  return true;
}

const ITALIC = "ITALIC";
const ItalicMark = props => {
  return <em>{props.children}</em>
}
const setItalicMark = (event, change) => {
  event.preventDefault();
  change.toggleMark(ITALIC);
  return true;
}


export const setMark = (event, change) => {
  switch (event.key) {
    case 'b': {
      setBoldMark(event, change);
    }
    case 'i': {
      setItalicMark(event, change);
    }
  }
}

export const renderMark = props => {
  switch (props.mark.type) {
    case BOLD: {
      return <BoldMark {...props} />
    }
    case ITALIC: {
      return <ItalicMark {...props} />
    }
  }
}
