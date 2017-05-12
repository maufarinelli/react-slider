import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const photosList = [
	{
		alt: '',
		url: 'https://unsplash.it/1920/450/'
	},
	{
		alt: '',
		url: 'https://unsplash.it/1920/450/'
	},
	{
		alt: '',
		url: 'https://unsplash.it/1920/450/'
	},
];

ReactDOM.render(
  <App photos={photosList} />,
  document.getElementById('root')
);
