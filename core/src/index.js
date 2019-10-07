import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';

const appTitle = "Persons manager";

ReactDOM.render(<App title={appTitle}/>, document.getElementById('root'));
