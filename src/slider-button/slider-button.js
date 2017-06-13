import React, { Component } from 'react';

export class SliderButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (this.props.side === 'left') ? (
			<button className="arrow-left" onClick={this.props.moveToPrev} >
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
		) : (
			<button className="arrow-right" onClick={this.props.moveToNext} >
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
		);
	}
}