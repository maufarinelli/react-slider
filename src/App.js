import React, { Component } from 'react';
import { SliderButton } from './slider-button/slider-button';
import './App.css';

class App extends Component {
	constructor(props) {
	  super(props);
	  //this.photos = this.props.photos;
	  //console.log('PHOTOS', this.photos);
  }

  render() {
    return (
      <div className="slider">
       <div className="slider-viewport">
         <SliderButton side="left" />
         <SliderButton side="right" />
         <ul>
           {this.props.photos.map((photo) => {
             return (
               <li>
                 <img src={photo.url} />
               </li>
             );
           }) }
           <li>
             <img src="https://unsplash.it/1920/450/" />
           </li>
         </ul>
       </div>
      </div>
    );
  }
}

export default App;
