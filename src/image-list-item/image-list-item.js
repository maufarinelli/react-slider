import React, { Component } from 'react';

export class ImageListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if(this.props.isCurrentPhoto) {
			return (
				<li key={this.props.photo.id} className="slider-photo current">
					<img src={this.props.photo.url} alt={this.props.photo.alt} />
				</li>
			);
		}
		else if(this.props.isPreviousPhoto) {
			return (
				<li key={this.props.photo.id} className="slider-photo previous">
					<img src={this.props.photo.url} alt={this.props.photo.alt} />
				</li>
			);
		}
		else if(this.props.isNextPhoto) {
			return (
				<li key={this.props.photo.id} className="slider-photo next">
					<img src={this.props.photo.url} alt={this.props.photo.alt} />
				</li>
			);
		}
		else {
			return (
				<li key={this.props.photo.id} className="slider-photo">
					<img src={this.props.photo.url} alt={this.props.photo.alt} />
				</li>
			);
		}

	}
}