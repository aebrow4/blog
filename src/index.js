import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/colors.css';
import Blog from './App';
import Editor from './app-editor';
import { Development, Production } from './config';
import registerServiceWorker from './registerServiceWorker';

const App = process.env.REACT_APP_MODE !== 'editor' ? Blog : Editor;
const Config = process.env.NODE_ENV === 'production' ? Production : Development;
const config = new Config();
window.app = { config }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
