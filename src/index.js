import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App name="chris"/>, document.getElementById('root'));
// ReactDOM.render(<Test name="chris"/>, document.getElementById('root'));
registerServiceWorker();