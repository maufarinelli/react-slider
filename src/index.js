import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import beachImage from './assets/img/beach.jpg';

const photosList = [
	{
		id: 1,
		alt: 'image 1',
		url: beachImage
	},
	{
		id: 2,
		alt: 'image 2',
		url: beachImage
	},
	{
		id: 3,
		alt: 'image 3',
		url: beachImage
	},
];

ReactDOM.render(
  <App photos={photosList} />,
  document.getElementById('root')
);
