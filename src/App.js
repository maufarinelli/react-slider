import React, { Component } from 'react';
const _ = require('lodash');
import { SliderButton } from './slider-button/slider-button';
import './App.css';

class App extends Component {
	constructor(props, state) {
		super(props);
		this.state = {currentPhoto: _.head(this.props.photos)};

		this.moveToPrev = this.moveToPrev.bind(this);
		this.moveToNext = this.moveToNext.bind(this);
	}

  render() {
    return (
      <div className="slider">
       <div className="slider-viewport">
         <ul>
           {this.props.photos.map((photo, key) => {
						 if(photo.id == this.state.currentPhoto.id) {
							 return (
								 <li key={photo.id} className="slider-photo current">
									 <img src={photo.url} alt={photo.alt} />
								 </li>
							 );
						 } else {
							 return (
								 <li key={photo.id} className="slider-photo">
									 <img src={photo.url} alt={photo.alt} />
								 </li>
							 );
						 }
           }) }
         </ul>
         <SliderButton side="left" moveToPrev={this.moveToPrev} />
         <SliderButton side="right" moveToNext={this.moveToNext} />
       </div>
      </div>
    );
  }

	componentDidMount() {
		var self = this;

		setTimeout(() => {
			this.setSliderHeight(this.getHeight());
		}, 500);
	}

	onWindowRezise() {
  	window.addEventListener('resize', () => {
			this.setSliderHeight(this.getHeight());
		})
	}

	getHeight() {
    let firstPhotoHeight = _.head(document.querySelectorAll('.slider-photo img')).offsetHeight;
    return firstPhotoHeight + "px";
  }

  setSliderHeight(height) {
		let viewport = document.querySelector('.slider-viewport');
		viewport.style.height = height;
	}

	moveToPrev() {
		var index = _.findIndex(this.props.photos, this.state.currentPhoto),
			lastIndex = this.props.photos.length - 1;

		this.state.currentPhoto = index === lastIndex ? _.head(this.props.photos) : this.props.photos[index + 1];
	}

	moveToNext() {
		var index = _.findIndex(this.props.photos, this.state.currentPhoto),
			lastIndex = this.props.photos.length - 1;

		this.state.currentPhoto = index === 0 ? this.props.photos[lastIndex] : this.props.photos[index - 1];
	}
}

export default App;
