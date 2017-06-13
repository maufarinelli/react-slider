import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import beachImage from './assets/img/beach.jpg';
import lakeImage from './assets/img/lake.jpg';
import istaImage from './assets/img/ista.jpg';

const photosList = [
	{
		id: 1,
		alt: 'image 1',
		url: beachImage
	},
	{
		id: 2,
		alt: 'image 2',
		url: lakeImage
	},
	{
		id: 3,
		alt: 'image 3',
		url: istaImage
	},
];

ReactDOM.render(
  <App photos={photosList} />,
  document.getElementById('root')
);
