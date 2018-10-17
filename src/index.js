import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Game from './sbg.js';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Game />, document.getElementById('container'));

registerServiceWorker();
