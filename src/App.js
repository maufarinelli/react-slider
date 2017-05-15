import React, { Component } from 'react';
const _ = require('lodash');
import { SliderButton } from './slider-button/slider-button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="slider">
       <div className="slider-viewport">
         <ul>
           {this.props.photos.map((photo, key) => {
             return (
               <li key={photo.name} className="slider-photo">
                 <img src={photo.url} />
               </li>
             );
           }) }
         </ul>
         <SliderButton side="left" />
         <SliderButton side="right" />
       </div>
      </div>
    );
  }

	componentDidMount() {
		var self = this;

		setTimeout(function() {
			self.sliderHeight = self.getHeight();
			self.setSliderHeight();
		}, 500);
	}

	getHeight() {
    let firstPhotoHeight = _.head(document.querySelectorAll('.slider-photo img')).offsetHeight;
    return firstPhotoHeight + "px";
  }

  setSliderHeight() {
		let viewport = document.querySelector('.slider-viewport');
		viewport.style.height = this.sliderHeight;
	}
}

export default App;
