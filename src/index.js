import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import beachImage from './assets/img/beach.jpg';

const photosList = [
	{
		alt: '',
		url: beachImage
	},
	{
		alt: '',
		url: beachImage
	},
	{
		alt: '',
		url: beachImage
	},
];

ReactDOM.render(
  <App photos={photosList} />,
  document.getElementById('root')
);
