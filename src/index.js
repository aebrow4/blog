import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/colors.css';
import App from './App';
import AppEditor from './app-editor';
import registerServiceWorker from './registerServiceWorker';

const Blog = process.env.REACT_APP_MODE !== 'editor' ? App : AppEditor;
ReactDOM.render(<Blog />, document.getElementById('root'));
registerServiceWorker();
