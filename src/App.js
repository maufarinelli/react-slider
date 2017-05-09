import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="slider">
       <div className="slider-viewport">
         <button className="arrow-left">
           <svg width="60" height="60">
             <polyline
               fill="none"
               stroke="white"
               strokeWidth="5"
               strokeLinecap="round"
               strokeLinejoin="round"
               points="40,20 18,30 40,40"></polyline>
           </svg>
         </button>
         <button className="arrow-right">
           <svg width="60" height="60">
             <polyline
               fill="none"
               stroke="white"
               strokeWidth="5"
               strokeLinecap="round"
               strokeLinejoin="round"
               points="20,20 42,30 20,40"></polyline>
           </svg>
         </button>
         <ul>
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
