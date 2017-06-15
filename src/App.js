import React, { Component } from 'react';
const _ = require('lodash');
import { SliderButton } from './slider-button/slider-button';
import { ImageListItem } from './image-list-item/image-list-item';
import './App.css';

class App extends Component {
	constructor(props, state) {
		super(props);
		this.state = {
			previousPhoto: _.last(this.props.photos),
			currentPhoto: _.head(this.props.photos),
			nextPhoto: this.props.photos[1]
		};

		this.moveToPrev = this.moveToPrev.bind(this);
		this.moveToNext = this.moveToNext.bind(this);
	}

  render() {
    return (
      <div className="slider">
       <div className="slider-viewport">
         <ul>
           { this.props.photos.map((photo, key) => {
						 return <ImageListItem photo={photo}
																	 isCurrentPhoto={this.state.currentPhoto.id === photo.id}
																	 isPreviousPhoto={this.state.previousPhoto.id === photo.id}
																	 isNextPhoto={this.state.nextPhoto.id === photo.id} />
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
		});
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

		index === 0 ?
			this.setState({
				previousPhoto: this.props.photos[lastIndex - 1],
				currentPhoto: this.props.photos[lastIndex],
				nextPhoto: _.head(this.props.photos)
			}) :
			this.setState({
				previousPhoto: index - 1 === 0 ? this.props.photos[lastIndex] : this.props.photos[index - 2],
				currentPhoto: this.props.photos[index - 1],
				nextPhoto: this.props.photos[index]
			});

			console.log(this.state);
	}

	moveToNext() {
		var index = _.findIndex(this.props.photos, this.state.currentPhoto),
			lastIndex = this.props.photos.length - 1;

		index === lastIndex ?
			this.setState({
				previousPhoto: this.props.photos[lastIndex],
				currentPhoto: _.head(this.props.photos),
				nextPhoto: this.props.photos[1]
			}) :
			this.setState({
				previousPhoto: this.props.photos[index],
				currentPhoto: this.props.photos[index + 1],
				nextPhoto: index + 1 === lastIndex ? _.head(this.props.photos) : this.props.photos[index + 2]
			});

		console.log(this.state);
	}
}

export default App;
