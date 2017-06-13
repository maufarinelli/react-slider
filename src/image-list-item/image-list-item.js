import React, { Component } from 'react';

export class ImageListItem extends Component {
	constructor(props) {
		super(props);
		// this.isCurrentPhoto = this.props.isCurrentPhoto
	}

	render() {
		console.log('props', this.props.isCurrentPhoto);

		return (
			<li key={this.props.photo.id} className={this.props.isCurrentPhoto ? 'slider-photo current' : 'slider-photo'}>
				<img src={this.props.photo.url} alt={this.props.photo.alt} />
			</li>
		);
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('componentWillUpdate : ', nextProps);
	// 	this.isCurrentPhoto = nextProps.isCurrentPhoto;
	// }
	//
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('componentDidUpdate : ', prevProps);
	// }
}