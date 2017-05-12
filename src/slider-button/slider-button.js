import React, { Component } from 'react';

export class SliderButton extends Component {
	constructor(props) {
		super(props);
		this.side = this.props.side;
	}

	render() {
		return (this.props.side === 'left') ? (
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
		) : (
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
		);
	}
}